const url = "http://localhost:8000/api/productos"

export default {

    getAnuncios: async function () {

        const response = await fetch(url)

        if (response.ok) {
            return await response.json()
        } else {
            throw new Error("Error al recuperar los anuncios")
        }

    },

    post: async function(url,body){

        const requestConfig = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(body)
        }
        const response = await fetch(url, requestConfig)
        
        try{
            const data = await response.json()
            if(response.ok){
                return data
            }else{
                throw new Error(data.message)
            }
        }catch(error){
            throw error
        }

    },

    registerUser: async function(username, password){
        const url = 'http://localhost:8000/auth/register'
        return this.post(url, {username, password})
        
    },

    
    login: async function(username, password){
        const url = 'http://localhost:8000/auth/login'
        return this.post(url, {username, password})
        
    }
}