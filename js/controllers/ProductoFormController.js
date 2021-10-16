import dataService from "../servicios/dataService.js"
import PubSub from "../servicios/PubSub.js"

export default class ProductoFormController{
    constructor(element){
        this.element = element
        this.attachEventListeners()
    }

    attachEventListeners(){
        this.element.addEventListener('submit', async event =>{
            event.preventDefault()
            
            if(this.element.checkValidity()){
                const data = new FormData(this.element)
                const nombre = data.get('nombre')
                try{
                    const result = await dataService.createProducto(nombre)
                    PubSub.publish(PubSub.event.SHOW_SUCESS, "Anuncio creado")
                }catch(error){
                    PubSub.publish(PubSub.events.SHOW_ERROR, error)
                }
            }
        })
    }
}