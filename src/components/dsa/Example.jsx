import React from 'react'

function Example(props) {
  return (
    <div className=" mt-8 border-2">
        <p>Example {props.id}</p>
        <div>
            <p>input:{props.input}</p>
            <p>output:{props.output}</p>
            <p>Explanation:{props.explanation}</p>

        </div>

    </div>
  )
}

export default Example