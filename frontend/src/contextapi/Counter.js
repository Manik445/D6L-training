import React from 'react'
import { useContext } from 'react'
import { CountConext } from '../context/Countercontext'

const Counter = () => {
    // acessing the states inside context 
    const CounterState = useContext(CountConext); 
  return (
    <div>
        <button onClick={()=>CounterState.setCount(CounterState.count+1)}>Increase</button>
        <button onClick={()=>CounterState.setCount(CounterState.count-1)}>Decrease</button>
    </div>
  )
}

export default Counter   