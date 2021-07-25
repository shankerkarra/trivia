import { ProxyState } from "../AppState.js";
import Trivia from "../Models/Trivia.js";
import { triviaApi } from "./AxiosService.js";

class TriviasService {
  async getNewQuestion() {
    const res = await triviaApi.get()
    this.getNewQuestion()
  }

  // ProxyState.trivias = new Trivia(res.data[0])
}


export const triviasService = new TriviasService();