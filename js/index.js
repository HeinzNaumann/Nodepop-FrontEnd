import {anuncioView} from "./views.js"
import dataService from "./servicios/dataService.js"
import anunciosListController from "../controllers/anunciosListController.js"


const list = document.querySelector(".post-list")
anunciosListController(list)

/*

async function loadAnuncios(){



}

window.addEventListener('DOMContentLoaded', loadAnuncios)
*/    
