import PubSub from "../servicios/PubSub.js"
import { errorView, succesView } from "../views.js"

export default class MessageController{
    
    constructor(element){
        this.element = element
        // Suscribimos al controlador que nos interesa
        PubSub.subscribe(PubSub.events.SHOW_ERROR, error =>{
             this.showError(error)
            })

        // nos suscribimos al evento para mostrarr mensajes de error
        PubSub.subscribe(PubSub.events.SHOW_SUCCESS, message =>{
            this.showSuccess(message)
        })
    }

    attachCloseMessageEventListener(){
       
        const button = this.element.querySelector('button')
        button.addEventListener('click', () => {
            this.hideError()
        })
    }

    showSuccess(message){
        this.element.innerHTML = succesView(message)
        this.attachCloseMessageEventListener();
}

    showError(message) {
        this.element.innerHTML = errorView(message)
        this.attachCloseMessageEventListener();
    }

    hideError() {
        this.element.innerHTML = ''
    }
}