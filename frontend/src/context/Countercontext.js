import React, { useState } from 'react'
// creating new context 
import { createContext } from 'react'

export const CountConext = createContext(0); 

// creating provider for count context 

export const CounterProvider = (props) =>{
    // defining state in context for count
        const [count , setCount] = useState(0); 
    return (
        <CountConext.Provider value={{count , setCount}}>
            {props.children}
        </CountConext.Provider>
    )
}