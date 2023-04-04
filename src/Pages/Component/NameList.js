import React from 'react'
import Person from './Person'

function NameList() {
    const names  = ['vishal', 'mitul','gopal','vishal']
    const persons = [
        {
            id: 1,
            name: 'vishal',
            age: 29,
            skill: 'React HTML'
        },
        {
            id: 2,
            name: 'mitul',
            age: 30,
            skill: 'power electric'
        },
        {
            id: 3,
            name: 'gopal',
            age: 26,
            skill: 'vivil eng'
        },
    ]
    const nameList = names.map((name, index ) => (
        <h2 key={index} >{index}{name}</h2>  )) 

  return (
    <div>
        {nameList}
    </div>
  )
}

export default NameList