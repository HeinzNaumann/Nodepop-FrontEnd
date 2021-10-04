const url = "../../DB.json"

export default{

    getAnuncios: async function(){

        const response = await fetch(url)

        if(response.ok){
            return await response.json()
        }else{
            throw new Error("Error al recuperar los anuncios")
        }


        

    }
}