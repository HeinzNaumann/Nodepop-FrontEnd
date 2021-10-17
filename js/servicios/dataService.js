const url = "http://localhost:8000/api/productos"

export default {

    getAnuncios: async function () {

        const response = await fetch(url)

        if (response.ok) {
            const anuncios = await response.json()
            console.log(anuncios)
            return anuncios.map(anuncio => {
                anuncio.date = anuncio.date || anuncio.updatedAt
                anuncio.nombre = anuncio.nombre.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
                anuncio.imagen = anuncio.imagen.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
                return anuncio
            })
        } else {
            throw new Error("Error al recuperar los anuncios")

        }

    },


    getDetalleAnuncio: async function (anuncioID) {
        const url = `http://localhost:8000/api/productos/${anuncioID}`
        const response = await fetch(url)
        if (response.ok) {
            const anuncio = await response.json()

            anuncio.canBeDeleted = anuncio.userId === this.getAuthUserId()

            return anuncio
        } else {
            if (response.status == 404) {
                return null
            } else {
                throw new Error('Error al cargar el producto')
            }
        }
    },

    delete: async function (url, body = {}) {
        return await this.request('DELETE', url, body)
    },

    post: async function (url, body) {
        return await this.request('POST', url, body)
    },

    put: async function (url, body) {
        return await this.request('PUT', url, body)
    },

    request: async function (method, url, body) {

        const requestConfig = {
            method: method,
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

    createProducto: async function (nombre, imagen, estadoCompra, estadoVenta, precio) {
        const url = "http://localhost:8000/api/productos"
        if (estadoCompra === "on") {
            estadoCompra = "Se compra"
            estadoVenta = " "
        } else if (estadoVenta === "on") {
            estadoVenta = "Se vende"
            estadoCompra = " "
        }
        return await this.post(url, { nombre, imagen, estadoCompra, estadoVenta, precio })
    },

    deleteProducto: async function (anuncioID) {
        const url = `http://localhost:8000/api/productos/${anuncioID}`
        return await this.delete(url)
    },

    getAuthUserId: function () {
        const token = localStorage.getItem('AUTH_TOKEN')

        if (token === null) {
            return null
        }
        const b64Parts = token.split('.')
        if (b64Parts.length !== 3) {
            return null
        }
        const b64Data = token.split('.')[1]
        try {
            const userJSON = atob(b64Data)
            const user = JSON.parse(userJSON)
            return user.userId

        } catch (error) {
            console.log("Error while decoding Token", error)
            return null
        }
    }
}