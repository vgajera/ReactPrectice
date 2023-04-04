import React from 'react'

function FunctionClick() {

   function clickHendler() {
        console.log('bitt')
    }
  return (
    <button onClick={clickHendler}>Click</button>
  )
}

export default FunctionClick