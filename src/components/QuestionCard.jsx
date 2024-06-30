import React from 'react'
import { motion } from 'framer-motion';

const QuestionCard = ({
  question, 
  answers, 
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
  correctAnswer,
  nextQuestion,
  score,
}) => {
  return (
    <motion.div className='question-card'
      initial={{x:"100vw"}}
      animate={{x:0}}
      transition={{type:"spring", when:"beforeChildren"}}
      exit={{x:"-100vw"}}
    >
      <div className='question-header'>
        <p className='question-number'>Question: {questionNr} / {totalQuestions}</p>
        <p className='score'>{score}</p>
      </div>
      <motion.p className='question' dangerouslySetInnerHTML={{__html: question}} 
        initial={{x:"-100vw"}}
        animate={{x:0}}
        transition={{delay:0.5}}
      />
      <motion.div className='answers'
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:1}}
      >
        {answers.map((answer, i) => {
          return <div key={i}>
            <button disabled={!!userAnswer} value={answer} onClick={callback}
                className={`answer-btn 
                  ${answer===correctAnswer && "correct"}
                  ${userAnswer?.answer===answer &&  userAnswer?.answer!==correctAnswer && "wrong"}
                `}>
              <span dangerouslySetInnerHTML={{__html: answer}} />
            </button>
          </div>
        })}
      </motion.div>
      {userAnswer && <motion.button className="next-btn" onClick={nextQuestion}
        initial={{x:"-80vw"}}
        animate={{x:0, rotate:[0, 60, -60, 0]}}
        transition={{type:"spring", duration:0.2}}
      >
        {questionNr === totalQuestions ? 'Finish' : 'Next Question'}
      </motion.button>}
    </motion.div>
  )
}
export default QuestionCard