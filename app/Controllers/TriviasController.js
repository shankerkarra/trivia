import { ProxyState } from "../AppState.js"
import { triviasService } from "../Services/TriviasService.js"

function _draw() {
  document.getElementById('question').innerHTML = ProxyState.trivias.Template
}


export default class TriviasController {
  constructor() {
    ProxyState.on('trivias', _draw)
    this.getNewQuestion()
  }
  async getNewQuestion() {
    try {
      debugger;
      await triviasService.getNewQuestion()
    } catch (error) {
      console.error(error)
    }
  }
}