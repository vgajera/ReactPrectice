import React from 'react'

function ChildComponent(props) {
  return (
    <div>
      <button className='btn btn-brand btn-sm' onClick={() =>props.greetHendler('2 child')}>Greetparent</button>
    </div>
  )
}

export default ChildComponent