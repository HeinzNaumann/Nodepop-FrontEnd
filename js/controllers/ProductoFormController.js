import dataService from "../servicios/dataService.js"
import PubSub from "../servicios/PubSub.js"


export default class ProductoFormController {
    constructor(element) {
        this.element = element
        this.attachEventListeners()
    }

    attachEventListeners() {
        this.element.addEventListener('submit', async event => {
            event.preventDefault()

            if (this.element.checkValidity()) {
                const data = new FormData(this.element)
                const nombre = data.get('nombre')
                const imagen = data.get('imagen')
                const estadoVenta = data.get('estadoVenta')
                const estadoCompra = data.get('estadoCompra')
                const precio = data.get('precio')
                try {
                    const result = await dataService.createProducto(nombre, imagen, estadoCompra, estadoVenta, precio)
                    PubSub.publish(PubSub.events.SHOW_SUCCESS, "Creado correctamente")
                } catch (error) {
                    PubSub.publish(PubSub.events.SHOW_ERROR, error)
                }
            }
        })
    }
}