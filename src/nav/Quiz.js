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
    {
      questionText: 'What is the main difference between child and adult teeth?',
      answerOptions: [
        { answerText: 'Size', isCorrect: true },
        { answerText: 'Shape', isCorrect: false },
        { answerText: 'Color', isCorrect: false },
        { answerText: 'Texture', isCorrect: false },
      ],
    },
    {
      questionText: 'At what age do children typically start losing their primary (baby) teeth?',
      answerOptions: [
        { answerText: '4-6 years old', isCorrect: true },
        { answerText: '6-8 years old', isCorrect: false },
        { answerText: '8-10 years old', isCorrect: false },
        { answerText: '10-12 years old', isCorrect: false },
      ],
    },
    {
      questionText: 'How many primary teeth does a child usually have?',
      answerOptions: [
        { answerText: '20', isCorrect: true },
        { answerText: '24', isCorrect: false },
        { answerText: '28', isCorrect: false },
        { answerText: '32', isCorrect: false },
      ],
    },
    {
      questionText: 'Which type of teeth are commonly known as "fangs" or "eye teeth"?',
      answerOptions: [
        { answerText: 'Incisors', isCorrect: false },
        { answerText: 'Canines', isCorrect: true },
        { answerText: 'Premolars', isCorrect: false },
        { answerText: 'Molars', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the term for the process of adult teeth replacing primary teeth?',
      answerOptions: [
        { answerText: 'Teething', isCorrect: false },
        { answerText: 'Eruption', isCorrect: true },
        { answerText: 'Exfoliation', isCorrect: false },
        { answerText: 'Regeneration', isCorrect: false },
      ],
    },
    {
      questionText: 'Which type of teeth are primarily used for tearing and ripping food?',
      answerOptions: [
        { answerText: 'Incisors', isCorrect: false },
        { answerText: 'Canines', isCorrect: true },
        { answerText: 'Premolars', isCorrect: false },
        { answerText: 'Molars', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the name of the hard tissue that covers the crown of a tooth?',
      answerOptions: [
        { answerText: 'Pulp', isCorrect: false },
        { answerText: 'Enamel', isCorrect: true },
        { answerText: 'Dentin', isCorrect: false },
        { answerText: 'Cementum', isCorrect: false },
      ],
    },
    {
      questionText: 'Which teeth are typically the first to emerge in a child\'s mouth?',
      answerOptions: [
        { answerText: 'Central incisors', isCorrect: true },
        { answerText: 'Lateral incisors', isCorrect: false },
        { answerText: 'First molars', isCorrect: false },
        { answerText: 'Canines', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the main function of molars?',
      answerOptions: [
        { answerText: 'Cutting', isCorrect: false },
        { answerText: 'Grinding', isCorrect: true },
        { answerText: 'Tearing', isCorrect: false },
        { answerText: 'Holding', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the total number of permanent teeth in the adult human mouth?',
      answerOptions: [
        { answerText: '20', isCorrect: false },
        { answerText: '24', isCorrect: false },
        { answerText: '28', isCorrect: false },
        { answerText: '32', isCorrect: true },
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
