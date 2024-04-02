// Quiz.js
import React, { useState } from 'react';
import styles from './Dental.module.css';

const Quiz = ({ setQuizScore }) => {
  // Questions and answers for the quiz
  const questions = [
    {
      questionText: 'What is the primary function of incisors?',
      answerOptions: [
        { answerText: 'Grinding', isCorrect: false },
        { answerText: 'Cutting', isCorrect: true },
      ],
    },
    {
      questionText: 'Which tooth type is located at the back of the mouth?',
      answerOptions: [
        { answerText: 'Canines', isCorrect: false },
        { answerText: 'Molars', isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
      setQuizScore(score + 1); // Update the overall score in the parent component
    }
  };

  return (
    <div className={styles.quizSection}>
      <h2>Quiz</h2>
      {showScore ? (
        <div>
          <p>You scored {score} out of {questions.length}</p>
          <button onClick={() => window.location.reload(false)}>Restart Quiz</button>
        </div>
      ) : (
        <>
          <div className={styles.questionSection}>
            <div className={styles.questionCount}>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className={styles.questionText}>{questions[currentQuestion].questionText}</div>
          </div>
          <div className={styles.answerSection}>
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button
                key={index}
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
