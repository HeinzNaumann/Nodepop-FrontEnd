import MessageController from "./controllers/MessageController.js"
import SignupController from "./controllers/SignupController.js"



window.addEventListener('DOMContentLoaded', function () {

    //Seleccionamos el nodo del formulario
    const form = document.querySelector('form')
    //Crear una instancia del controlador del formulario
    new SignupController(form)

    const messages = document.querySelector('.error-message')

    new MessageController(messages)
})