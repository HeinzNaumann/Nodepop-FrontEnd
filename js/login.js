import MessageController from "./controllers/MessageController.js"
import LoginController from "./controllers/LoginController.js"



window.addEventListener('DOMContentLoaded', function () {

    //Seleccionamos el nodo del formulario
    const form = document.querySelector('form')
    //Crear una instancia del controlador del formulario
    new LoginController(form)

    const messages = document.querySelector('.error-message')

    new MessageController(messages)
})