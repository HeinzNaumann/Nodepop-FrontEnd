import MessageController from "./controllers/MessageController.js"
import ProductoFormController from "./controllers/ProductoFormController.js"
import DataService from "./servicios/dataService.js"


window.addEventListener('DOMContentLoaded', function () {


    if (DataService.isAuthenticed() === false) {
        window.location.href = "/login.html?next=/new.html"
    }

    //Seleccionamos el nodo del formulario
    const form = document.querySelector('form')
    //Crear una instancia del controlador del formulario
    new ProductoFormController(form)

    const messages = document.querySelector('.messages')

    new MessageController(messages)
})