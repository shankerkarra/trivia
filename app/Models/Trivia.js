export default class Trivia {
  constructor({ category, type, difficulty, question, correct_answer, incorrect_answer }) {
    this.category = category;
    this.type = type;
    this.difficulty = difficulty;
    this.question = question;
    this.correct_answer = correct_answer;
    this.incorrect_answer = incorrect_answer;
  }
  get Template() {
    return /*html*/`
    <div class="col-12 mt-5">
    <div class="d-flex justify-content-around">
        <h4 class="text-uppercase">Category: ${this.category}</h4>
        <h6 class="text-uppercase">Type: ${this.type}</h4>
        <h class="text-uppercase">Type: ${this.difficulty}</h>
    </div>
    <div class="text-center m-5 question">
        <h3>${this.question}</h3>
        <div class="answer">
            <p>${this.correct_answer}</p>
                        <p>${this.incorrect_answer}</p>
        </div>
    </div>
    </div>
    `
  }
}
