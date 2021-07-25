import { ProxyState } from "../AppState.js";
import Trivia from "../Models/Trivia.js";
import { triviaApi } from "./AxiosService.js";

class TriviasService {
  async getNewQuestion() {
    try {
      const res = await triviaApi.get()
    } catch (error) {
      console.log(error);
    }
    ProxyState.trivias = new Trivia(res.data[0])
  }
}


export const triviasService = new TriviasService();