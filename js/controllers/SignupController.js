import dataService from "../servicios/dataService.js"
import PubSub from "../servicios/PubSub.js"

export default class SignupController {

    constructor(element) {
        this.element = element // <- Esto es un <form> de HTML
        this.attachEventListeners()
    }

    checkIfAllPasswordsAreEqual(passwordToCheck) {
        const inputPassword = this.element.querySelectorAll('input[type="password"]')

        // guardo las contraseñas que hay en los inpjts
        let passwords = []
        for (const input of inputPassword){
          if (passwords.includes(input.value) === false){
              passwords.push(input.value)
          }
        }
        
        if(passwords.length == 1){
            for(const input of inputPassword){
                input.setCustomValidity('')
            }
        }else{
            for(const input of inputPassword){
                input.setCustomValidity('Las passwords no coinciden')
            }
        }

    }


    attachEventListeners() {
        this.element.addEventListener('submit', async function (event) {

            // evitamos que el formulario se envie
            event.preventDefault()

            //comprobar si valida

            if (this.checkValidity()) {
                try{
                    const data = new FormData(this)
                    const username = data.get('username')
                    const password = data.get('password')
                    const result = await dataService.registerUser(username, password)
                    PubSub.publish(PubSub.events.SHOW_SUCCESS, "Registrado Correctamente")
                }catch(error){
                    PubSub.publish("SHOW_ERROR", error)
                }

               
            } else {
                let errorMessage = ''
                for (const element of this.elements) {
                    if (element.validity.valid === false) {
                        errorMessage += `Error en el Campo ${element.name}: ${element.validationMessage}.`

                    }
                }
                PubSub.publish("SHOW_ERROR", errorMessage)
            }

        })

        this.element.querySelectorAll('input[type="password"]').forEach(input => {
            input.addEventListener('input', () =>{
               this.checkIfAllPasswordsAreEqual()
            })
        })

        this.element.querySelectorAll('input').forEach(inputElement =>{
       
            inputElement.addEventListener('input', () =>{
                if(this.element.checkValidity()){
                    this.element.querySelector('button').removeAttribute('disabled')
                }else{
                    this.element.querySelector('button').setAttribute('disabled', true)
                }
            })
        })
    }
}