import React from 'react'

function ChildComponent(props) {
  return (
    <div>
      <button onClick={() =>props.greetHendler('2 child')}>Greetparent</button>
    </div>
  )
}

export default ChildComponent