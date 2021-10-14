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
        this.element.addEventListener('submit', function (event) {

            // evitamos que el formulario se envie
            event.preventDefault()

            //comprobar si valida

            if (this.checkValidity()) {
                console.log('Formulario ok')
            } else {
                let errorMessage = ''
                for (const element of this.elements) {
                    if (element.validity.valid === false) {
                        errorMessage += `Error en el Campo ${element.name}: ${element.validationMessage}.`

                    }
                }
                alert(errorMessage)
            }

        })

        this.element.querySelectorAll('input[type="password"]').forEach(input => {
            input.addEventListener('input', () =>{
               this.checkIfAllPasswordsAreEqual()
            })
        })
    }
}