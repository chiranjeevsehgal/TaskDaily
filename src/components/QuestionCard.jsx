import { useState } from 'react';

import { ArrowDown } from 'lucide-react';
import React from 'react';

export default function QuestionCard({ question, options, correctAnswer, image }) {
  const [isRadioSelected, setIsRadioSelected] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [radioDisabled, setRadioDisabled] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  
  const handleRadioChange = () => {
    setIsRadioSelected(true);
  };
  
  const handleButtonClick = () => {
    setShowAnswer(true);
    setButtonDisabled(true);
    setRadioDisabled(true);

  };

  return (
    <div className='flex justify-center'>
    <div className='flex flex-col items-center mt-8 max-w-2xl rounded-xl border-4'>
      <div className='flex flex-col w-full'>
      
      <div className='flex bg-gray-200 rounded-lg p-3 text-black'>
        <p>Question1</p>
      </div>
      
      <div className='mt-8'>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className='mt-4'>
        
        <div className='flex flex-row gap-x-2'>
        <input type="radio" id="option1" name="option" value="a" className='mt-1' onChange={handleRadioChange} disabled={radioDisabled}/>
        <label htmlFor="option1" className="cursor-pointer mx-1">{'a) Option 1'}</label>
        </div>
        <div className='flex flex-row gap-x-2'>
        <input type="radio" id="option2" name="option" value="b" className='mt-1'  onChange={handleRadioChange} disabled={radioDisabled}/>
        <label htmlFor="option2" className="cursor-pointer mx-1">{'b) Option 2'}</label>
        </div>
        <div className='flex flex-row gap-x-2'>
        <input type="radio" id="option3" name="option" value="c" className='mt-1'  onChange={handleRadioChange} disabled={radioDisabled}/>
        <label htmlFor="option3" className="cursor-pointer mx-1">{'c) Option 3'}</label>
        </div>
        <div className='flex flex-row gap-x-2'>
        <input type="radio" id="option4" name="option" value="d" className='mt-1'  onChange={handleRadioChange} disabled={radioDisabled}/>
        <label htmlFor="option4" className="cursor-pointer mx-1">{'d) Option 4'}</label>
        </div>
        
      </div>

      <div className='flex flex-row'>
        <button onClick={handleButtonClick}  disabled={buttonDisabled} className={`flex bg-gray-200 py-2 px-6 rounded-md mt-6 items-end ${buttonDisabled ? '' : 'hover:bg-gray-500'} ${isRadioSelected ? '' : 'pointer-events-none opacity-50'}`}>Submit <ArrowDown className='w-4 ml-2' /></button>
      </div>

      {showAnswer && (
        <div className='flex flex-col mt-4'>
          <p>Answer:</p>
          <p>a: Option 1</p>
        </div>
      )}

      {/* <div className='flex flex-col mt-4'>
        <p>Answer:</p>
        <p>a: Option 1</p>
      </div> */}
      
      </div>
    </div> 
    </div>
  )
};

