import dataService from "../js/servicios/dataService.js"
import { anuncioView } from "../js/views.js"

export default async function(domElement){

    try{
        const anuncios = await dataService.getAnuncios()
          
        
        for (const anuncio of anuncios){
            const anuncioElement = document.createElement('p') 
            const anuncioHTML = anuncioView(anuncio)
            anuncioElement.innerHTML = anuncioHTML
            domElement.appendChild(anuncioElement)
        }
        
        }catch(error){
            alert(error)
        }finally{
                
        const loader = document.querySelector(".lds-ring")
        
        loader.classList.toggle('hidden')
    
        }
}