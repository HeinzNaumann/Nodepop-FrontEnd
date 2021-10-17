import LoaderController from "./controllers/LoaderController.js";
import DetalleProductoController from "./controllers/DetalleProductoController.js"




window.addEventListener("DOMContentLoaded", function () {

    const loaderDiv = document.querySelector('.loader')
    new LoaderController(loaderDiv)

    const id = new URLSearchParams(window.location.search).get('id')

    const anuncioDiv = document.querySelector('.anuncio')
    new DetalleProductoController(anuncioDiv, id)
});