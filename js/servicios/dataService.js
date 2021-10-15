const url = "http://localhost:8000/auth/register"

export default {

    getAnuncios: async function () {

        const response = await fetch(url)

        if (response.ok) {
            return await response.json()
        } else {
            throw new Error("Error al recuperar los anuncios")
        }

    },

    registerUser: async function(username, password){
        const url = 'http://localhost:8000/auth/register'
        const requestConfig = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({username, password})
        }
        const response = await fetch(url, requestConfig)
        if (response.ok){
            return await response.json()
        }else{
            throw new Error('Error al registrar el usuario')
        }
    }
}