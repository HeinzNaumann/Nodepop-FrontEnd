import PubSub from "../servicios/PubSub.js"
import dataService from "../servicios/dataService.js"
import { detalleProductoVista } from "../views.js"


export default class DetalleProductoController {

    constructor(element, anuncioID) {
        this.element = element
        this.loadAnuncio(anuncioID)
    }

    async loadAnuncio(anuncioID) {
        PubSub.publish(PubSub.events.SHOW_LOADING)
        debugger
        try {
            const anuncio = await dataService.getDetalleAnuncio(anuncioID)

            this.element.innerHTML = detalleProductoVista(anuncio)

        } catch (error) {
            PubSub.publish(PubSub.events.SHOW_ERROR, error)
        } finally {
            PubSub.publish(PubSub.events.HIDE_LOADING)
        }
    }

}