import React, { useState } from 'react';
import styles from './Dental.module.css';

const Quiz = ({ setQuizScore }) => {
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
  const [quizStarted, setQuizStarted] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(null));

  const handleAnswerOptionClick = (index, isCorrect) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = { isCorrect, index };
    setSelectedAnswers(newAnswers);
  };

  const handleSubmitQuiz = () => {
    const finalScore = selectedAnswers.reduce((acc, answer) => acc + (answer?.isCorrect ? 1 : 0), 0);
    setScore(finalScore);
    setShowScore(true);
    if (typeof setQuizScore === 'function') {
      setQuizScore(finalScore);
    }
  };

  return (
    <div className={styles.quizSection}>
      {!quizStarted ? (
        <button onClick={() => setQuizStarted(true)}>Start Quiz</button>
      ) : (
        <>
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
                    className={selectedAnswers[currentQuestion]?.index === index ? styles.active : ''}
                    onClick={() => handleAnswerOptionClick(index, answerOption.isCorrect)}
                  >
                    {answerOption.answerText}
                  </button>
                ))}
              </div>
              {currentQuestion < questions.length - 1 ? (
                <button onClick={() => setCurrentQuestion(currentQuestion + 1)}>Next Question</button>
              ) : (
                <button onClick={handleSubmitQuiz}>Submit Quiz</button>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Quiz;
