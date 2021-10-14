import { anuncioView } from '../views.js'
import DataService from '../servicios/dataService.js'

export default class TweetListController {
  constructor(element, errorMessageController) {
    this.element = element;
    this.errorMessageController = errorMessageController
  }

  async renderAnuncios() {
    try {
      const anuncios = await DataService.getAnuncios();
      for (const anuncio of anuncios) {
        const anuncioElement = document.createElement('article')
        anuncioElement.innerHTML = anuncioView(anuncio)
        this.element.appendChild(anuncioElement)
      }

    } catch (error) {
      this.errorMessageController.showError(error)
    }
  }
}
