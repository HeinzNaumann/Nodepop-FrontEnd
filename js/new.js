import MessageController from "./controllers/MessageController.js"
import ProductoFormController from "./controllers/ProductoFormController.js"



window.addEventListener('DOMContentLoaded', function () {

    //Seleccionamos el nodo del formulario
    const form = document.querySelector('form')
    //Crear una instancia del controlador del formulario
    new ProductoFormController(form)

    const messages = document.querySelector('.messages')

    new MessageController(messages)
})