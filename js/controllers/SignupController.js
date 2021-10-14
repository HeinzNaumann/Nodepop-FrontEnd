export default class SignupController {

    constructor(element) {
        this.element = element // <- Esto es un <form> de HTML
        this.attachEventListeners()
    }

    checkIfAllPasswordsAreEqual(passwordToCheck) {
        const inputPassword = this.element.querySelectorAll('input[type="password"]')
        for (const input of inputPassword) {
            if (input.value !== passwordToCheck) {
                return false
            }
        }
        return true
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
                        errorMessage += `El Campo ${element.name} no puede estar vacío.`

                    }
                }
                alert(errorMessage)
            }

        })

        this.element.querySelectorAll('input[type="password"]').forEach(input => {
            input.addEventListener('input', function () {
                if (input.value == otrasPassword) {
                    input.setCustomValidity('')
                } else {
                    input.setCustomValidity('Las contraseñas no coinciden')
                }
            })
        })
    }
}