import React from 'react';
import Example from './Example';

function Question(props) {
  // Define the color based on the difficulty level
  let color;
  switch (props.difficulty.toLowerCase()) {
    case 'easy':
      color = 'green';
      break;
    case 'medium':
      color = 'yellow';
      break;
    case 'hard':
      color = 'red';
      break;
    default:
      color = 'black';
  }

  return (
    <div className="mt-8 border-2">
      <p>{props.title}</p>
      {/* Apply inline style for text color */}
      <p style={{ color }}>{props.difficulty}</p>
      <div>{props.body}</div>
      {props.examples.map((example) => (
        <Example key={example.id} id={example.id} input={example.input} output={example.output} explanation={example.explanation} />
      ))}
    </div>
  );
}

export default Question;


// import React from 'react'
// import Example from './Example';
// function Question(props) {

//   let color;
//   switch (props.difficulty.toLowerCase()) {
//     case 'easy':
//       color = 'green';
//       break;
//     case 'medium':
//       color = 'yellow';
//       break;
//     case 'hard':
//       color = 'red';
//       break;
//     default:
//       color = 'black';
//   }
//   return (
//     <div className=" mt-8  border-2">
//     <p>{props.title}</p>
//     <p style={color?color:black}>{props.difficulty}</p>
//     <div>{props.body}</div>
//     {/* <img> // optional for image compatibilty */}
//     {/* <Example id={1} input={`"leEeetcode"`} output={`"leetcode"`} explanation={`In the first step, either you choose i = 1 or i = 2, both will result "leEeetcode" to be reduced to "leetcode".`}/>
//     <Example id={1} input={`"leEeetcode"`} output={`"leetcode"`} explanation={`In the first step, either you choose i = 1 or i = 2, both will result "leEeetcode" to be reduced to "leetcode".`}/>
//     <Example id={1} input={`"leEeetcode"`} output={`"leetcode"`} explanation={`In the first step, either you choose i = 1 or i = 2, both will result "leEeetcode" to be reduced to "leetcode". Hard coded data subject to change from DB`}/>
//     </div> */}
//     {props.examples.map((example) =>{
//       return (
//         <Example key={example.id} id={example.id} input={example.input} output={example.output} explanation={example.explanation}/>
//       )
//     })}
//     </div>
//   )
// }

// export default Question