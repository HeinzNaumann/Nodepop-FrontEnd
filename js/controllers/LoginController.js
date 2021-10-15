import dataService from "../servicios/dataService.js"
import PubSub from "../servicios/PubSub.js"

export default class LoginController{

    constructor(element){
        this.element = element
        this.attachEventListeners()
    }

    attachEventListeners(){
        //manejamos el envio del formulario para hacer el login
        this.element.addEventListener('submit', async event =>{
            event.preventDefault()
            if(this.element.checkValidity()){
                //hacemos el login
                const data = new FormData(this.element)
                const username = data.get('username')
                const password = data.get('password')
                try{
                    const result = await dataService.login(username, password)
                    location.href = '/' // mandamos al usuario a la home
                }catch(error){
                    PubSub.publish(PubSub.events.SHOW_ERROR, error)
                }
            }else{
                PubSub.publish(PubSub.events.SHOW_ERROR, "Ambos campos son obligatoiros")
            }
        })
    }
}