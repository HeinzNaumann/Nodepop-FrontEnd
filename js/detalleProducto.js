import LoaderController from "./controllers/LoaderController.js";
import DetalleProductoController from "./controllers/DetalleProductoController.js"
import MessageController from "./controllers/MessageController.js"



window.addEventListener("DOMContentLoaded", function () {

    const messagesDiv = document.querySelector('.messages')
    new MessageController(messagesDiv)

    const loaderDiv = document.querySelector('.loader')
    new LoaderController(loaderDiv)

    const id = new URLSearchParams(window.location.search).get('id')

    const anuncioDiv = document.querySelector('.anuncio')
    new DetalleProductoController(anuncioDiv, id)
});