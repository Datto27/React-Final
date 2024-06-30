import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion';
import { fetchQuizQuestions } from '../api/quiz';
import QuestionCard from '../components/QuestionCard';
import { currentDate, useCurrentDate, useLocalStorage, useQueryParams } from '../hooks/CustomHooks';
import LoadingAnimaton from '../components/LoadinAnimation';

function QuizPage() {
  const navigate = useNavigate();
  const { username } = useParams();
  const query = useQueryParams();
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const [number, setNumber] = useState(1);
  const [userAnswers, setUserAnswers] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [history, setHistory] = useLocalStorage('history');

  useEffect(() => {
    if (questions.length === 0) {
      setIsLoading(true);
      fetchQuizQuestions({category: query.category, difficulty: query.difficulty})
        .then((res) => {
          setIsLoading(false);
          if (res) {
            setQuestions(res);
          }
        })
    }
  }, []);

  const checkAnswer = (e) => {
    const answer = e.currentTarget.value

    setCorrectAnswer(questions[number-1].correct_answer)      

    const correct = questions[number-1].correct_answer === answer;
    if (correct) {
      setScore((prev) => prev + 1)
    }

    const answerObject = {
      question: questions[number-1].question,
      answer,
      correct,
      correctAnswer: questions[number-1].correct_answer,
    };
    setUserAnswers((prev) => [...prev, answerObject])
  }

  const nextQuestion = () => {
    const nextQuestion = number + 1;
    if (nextQuestion > 10) {
      if (history) {
        setHistory([...history, {username: username, age: parseInt(query.age), score, date: new Date().toString()}])
      } else {
        setHistory([{username: username, age: parseInt(query.age), score, date: new Date().toString()}])
      }
      navigate(`/result/${username}/${score}`, { replace: true })
    } else {
      setNumber(nextQuestion);
    }
  }

  return (
    <div className='page'>
      {isLoading || !questions[number-1] ? (
        <LoadingAnimaton />
      ) : (
        <QuestionCard 
          questionNr={number}
          totalQuestions={10}
          question={questions[number-1].question}
          answers={questions[number-1].answers}
          userAnswer={userAnswers ? userAnswers[number-1] : undefined}
          correctAnswer={correctAnswer}
          callback={checkAnswer}
          nextQuestion={nextQuestion}
          score={score}
        />
      )}
    </div>
  )
}

export default QuizPage