import React from 'react'
import Example from './Example';
function Question() {
  return (
    <div className=" mt-8  border-2">
    <p>Title</p>
    <p>easy</p>
    <div>Question block</div>
    {/* <img> // optional for image compatibilty */}
    <Example/>
    </div>
  )
}

export default Question