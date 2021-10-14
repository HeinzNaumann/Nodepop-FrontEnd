import SignupController from "./controllers/SignupController.js"



window.addEventListener('DOMContentLoaded', function () {

    //Seleccionamos el nodo del formulario
    const form = document.querySelector('form')
    //Crear una instancia del controlador del formulario
    const controller = new SignupController(form)

})