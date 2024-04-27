import React from 'react'
import Person from './Person'
import Count from './Count'

const Greetings = () => {
  return (
    <div>
    <div><h1>Greetings From </h1> <Person name="Manik"/> </div>
    <h1>Count component</h1>
    <Count/>
    </div>
    
    
  )
}

export default Greetings 