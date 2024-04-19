import React from 'react';
import { useEffect, useState } from 'react';

export default function QuestionCard(props) {
  
  const [selectedOption, setSelectedOption] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);


  const correctAnswerText = props.options[props.correctAnswer];
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setShowAnswer(false); 
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setIsCorrect(selectedOption === correctAnswerText); 
    setShowAnswer(true);
  };




  return (
    <div className='flex justify-center mb-12 w-screen' >
    <div className='flex flex-col items-center mt-8 w-6/12 rounded-xl border-4'>
      <div className='flex flex-col w-full'>
        
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="mb-4">
            <h4 className="text-lg font-semibold text-blue-800">Question {props.number}</h4>
          </div>
          <div className="mb-4">
            <p className="text-gray-700 text-base">{props.question}</p>
            {props.image && <img src={props.image} alt={`Illustration for question ${props.number}`} className="my-3 rounded" />}
          </div>
          <div>
            <form onSubmit={handleFormSubmit}>
              {props.options.map((option, index) => (
                <label key={index} className={`block w-full text-left px-4 py-2 mt-2 border rounded-lg cursor-pointer 
                  ${showAnswer ? (index === parseInt(props.correctAnswer) ? 'border-green-500 bg-green-100' : 
                  (selectedOption === option && !isCorrect ? 'border-red-500 bg-red-100' : '')) : 'hover:bg-green-300'}`}>
                  <input
                    type="radio"
                    value={option}
                    onChange={handleOptionChange}
                    checked={selectedOption === option}
                    className="mr-2"
                    disabled={showAnswer} 
                  />
                  {option}
                </label>
              ))}
              <div className='flex flex-row mt-2 mb-6 justify-end mr-8'>
                <button type="submit" disabled={!selectedOption || showAnswer} className={`flex bg-gray-200 py-2 px-6 rounded-md mt-6 items-center justify-center hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${(!selectedOption || showAnswer) ? 'pointer-events-none opacity-50' : ''}`}>
                  Submit <span className='w-4 ml-2'>▼</span> 
                </button>
              </div>
            </form>
          </div>

          {showAnswer && (
            <div className='flex flex-col mt-4 mb-4'>
              <p>Answer:</p>
              <p>{isCorrect ? "Correct Answer" : "Wrong Answer"}</p>
              <p>Correct Answer: {correctAnswerText}</p>
              <p>Description: {props.explanation}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>

  )
};

