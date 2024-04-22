import React from 'react'
import App from '../App'
import {render , fireEvent} from '@testing-library/react'

import Buton from './Buton'

describe('Button Component' , ()=>{
    it('renders the button with the correct label !' , ()=>{
        const {getByTestId} = render(<Buton label="Click me" /> ) 
        const buttonElement = getByTestId('button')
        expect(buttonElement).toBeInTheDocument(); 
        expect(buttonElement).toHaveTextContent('Click me')
    }), 
    // jest is the testing framework develope by facebook 
    it('calls the function when clicked' , ()=>{
        const onClickMock = jest.fn(); 
        const {getByTestId} = render(<Buton label="Click me" onClick={onClickMock}/> ) 
        const buttonElement = getByTestId('button')
        
        fireEvent.click(buttonElement); 
        expect(onClickMock).toHaveBeenCalledTimes(1); 
    })  
})
