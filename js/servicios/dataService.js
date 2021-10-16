const url = "http://localhost:8000/api/productos"

export default {

    getAnuncios: async function () {

        const response = await fetch(url)

        if (response.ok) {
            const anuncios = await response.json()
            return anuncios.map(anuncio => {
                anuncio.date = anuncio.date || anuncio.updatedAt
                anuncio.nombre = anuncio.nombre.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
                return anuncio
            })
        } else {
            throw new Error("Error al recuperar los anuncios")
        }

    },

    post: async function (url, body) {

        const requestConfig = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(body)
        }
        if (this.isAuthenticed()) {
            const token = localStorage.getItem('AUTH_TOKEN')
            requestConfig.headers.Authorization = `Bearer ${token}`
        }
        const response = await fetch(url, requestConfig)

        try {
            const data = await response.json()
            if (response.ok) {
                return data
            } else {
                throw new Error(data.message)
            }
        } catch (error) {
            throw error
        }

    },

    registerUser: async function (username, password) {
        const url = 'http://localhost:8000/auth/register'
        return await this.post(url, { username, password })

    },


    login: async function (username, password) {
        const url = 'http://localhost:8000/auth/login'
        const data = await this.post(url, { username, password })
        const token = data.accessToken
        localStorage.setItem('AUTH_TOKEN', token)

    },

    isAuthenticed: function () {
        return localStorage.getItem('AUTH_TOKEN') !== null
    },

    createProducto: async function (nombre) {
        const url = "http://localhost:8000/api/productos"
        return await this.post(url, { nombre })
    }
}