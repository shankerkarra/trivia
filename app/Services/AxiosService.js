export const triviaApi = axios.create({
  baseURL: 'https://opentdb.com/api.php?amount=10&difficulty=easy&type=boolean',
  timeout: 10000
})

