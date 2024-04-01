import { useState } from 'react';

import { ArrowDown } from 'lucide-react';
import React from 'react';

export default function QuestionCard({number, question, options, correctAnswer, image }) {
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
    <div className='flex justify-center mb-12'>
    <div className='flex flex-col items-center mt-8 w-6/12 rounded-xl border-4'>
      <div className='flex flex-col w-full'>
      
      <div className='flex bg-gray-200 rounded-lg p-3 text-black'>
        <p>Question {number}</p>
      </div>
      
      <div className='mt-4 px-6 gap-y-4'>
      <div className=''>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </div>
        
        <div className='flex flex-row gap-x-2 hover:bg-green-100 cursor-pointer p-1'>
        <input type="radio" id={`option${number}a`} name="option" value={`${number}a`} className='mt-1' onChange={handleRadioChange} disabled={radioDisabled}/>
        <label htmlFor={`option${number}a`} className="cursor-pointer mx-1 w-full">{'a) Option 1'}</label>
        </div>
        <div className='flex flex-row gap-x-2 hover:bg-green-100 cursor-pointer p-1'>
        <input type="radio" id={`option${number}b`} name="option" value={`${number}b`} className='mt-1'  onChange={handleRadioChange} disabled={radioDisabled}/>
        <label htmlFor={`option${number}b`} className="cursor-pointer mx-1 w-full">{'b) Option 2'}</label>
        </div>
        <div className='flex flex-row gap-x-2 hover:bg-green-100 cursor-pointer p-1'>
        <input type="radio" id={`option${number}c`} name="option" value={`${number}c`} className='mt-1'  onChange={handleRadioChange} disabled={radioDisabled}/>
        <label htmlFor={`option${number}c`} className="cursor-pointer mx-1 w-full">{'c) Option 3'}</label>
        </div>
        <div className='flex flex-row gap-x-2 hover:bg-green-100 cursor-pointer p-1'>
        <input type="radio" id={`option${number}d`} name="option" value={`${number}d`} className='mt-1'  onChange={handleRadioChange} disabled={radioDisabled}/>
        <label htmlFor={`option${number}d`} className="cursor-pointer mx-1 w-full">{'d) Option 4'}</label>
        </div>

      <div className='flex flex-row mt-2 mb-6 justify-end mr-8'>
        <button onClick={handleButtonClick}  disabled={buttonDisabled} className={`flex bg-gray-200 py-2 px-6 rounded-md mt-6 items-end ${buttonDisabled ? '' : 'hover:bg-gray-500'} ${isRadioSelected ? '' : 'pointer-events-none opacity-50'}`}>Submit <ArrowDown className='w-4 ml-2' /></button>
      </div>  

      {showAnswer && (
        <div className='flex flex-col mt-4 mb-4'>
          <p>Answer:</p>
          <p>a: Option 1</p>
          <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      )}
      </div>

      

      

      {/* <div className='flex flex-col mt-4'>
        <p>Answer:</p>
        <p>a: Option 1</p>
      </div> */}
      
      </div>
    </div> 
    </div>
  )
};

