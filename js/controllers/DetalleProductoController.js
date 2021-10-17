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
        try {
            const anuncio = await dataService.getDetalleAnuncio(anuncioID)
            this.element.innerHTML = detalleProductoVista(anuncio)
            this.addDeleteButtonEventListener(anuncio)
        } catch (error) {
            PubSub.publish(PubSub.events.SHOW_ERROR, error)
        } finally {
            PubSub.publish(PubSub.events.HIDE_LOADING)
        }
    }

    addDeleteButtonEventListener(anuncio) {
        const button = this.element.querySelector('button')
        if (button) {
            button.addEventListener('click', async () => {
                const answer = confirm("¿Seguro que quieres borrar el anuncio?")
                if (answer === true) {
                    PubSub.publish(PubSub.events.SHOW_LOADING)
                    button.setAttribute('disabled', 'disabled')
                    try {
                        await dataService.deleteProducto(anuncio.id)
                        window.location.href = '/'
                    } catch (error) {
                        PubSub.publish(PubSub.events.SHOW_ERROR, error)
                    } finally {
                        button.removeAttribute('disabled')
                        PubSub.publish(PubSub.events.HIDE_LOADING)

                    }
                }
            })
        }
    }

}