//import ValuesController from "./Controllers/ValuesController.js";
import triviasController from "./Controllers/TriviasController.js"

class App {
  //valuesController = new ValuesController();
  triviasController = new TriviasController();
}

window["app"] = new App();
