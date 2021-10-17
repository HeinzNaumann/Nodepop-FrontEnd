
import { loaderView } from "../views.js"
import PubSub from "../servicios/PubSub.js"

export default class LoaderController {

    constructor(element) {
        this.element = element
        this.element.innerHTML = loaderView()
        PubSub.subscribe(PubSub.events.SHOW_LOADING, () => {
            this.showLoader()
        })
        PubSub.subscribe(PubSub.events.HIDE_LOADING, () => {
            this.hideLoader()
        })
    }

    hideLoader() {
        this.element.style.display = 'none'
    }

    showLoader() {
        this.element.style.display = 'initial'
    }
}