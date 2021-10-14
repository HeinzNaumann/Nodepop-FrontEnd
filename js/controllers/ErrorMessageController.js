
import { errorView } from "../views.js"

export default class ErrorMessageController {

    constructor(element) {
        this.element = element
    }

    showError(message) {
        this.element.innerHTML = errorView(message)
        const button = this.element.querySelector('button')
        button.addEventListener('click', () => {
            this.hideError()
        })
    }

    hideError() {
        this.element.innerHTML = ''
    }
}