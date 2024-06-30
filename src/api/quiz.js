import axios from "axios"
import { useShuffle } from "../hooks/CustomHooks"

export const fetchQuizQuestions = async ({category, difficulty}) => {
  const endpoint = `https://opentdb.com/api.php?amount=10&difficulty=${difficulty}&type=multiple&category=${category}`

  return axios.get(endpoint)
    .then(res => {
      let shuffledQuestions = res.data.results.map((question) => {
        return {
          ...question, 
          answers: useShuffle(
            [...question.incorrect_answers, question.correct_answer]
          )
        }
      })
      return shuffledQuestions;
    })
    .catch(err => {
      console.error(err);
      return null;
    })
}