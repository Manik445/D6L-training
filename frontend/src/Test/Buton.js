import React from 'react'

const Buton = ({onClick , label='Click me'}) => {
  return (
    <div>
        <button onClick={onClick} data-testid="button">
            {label}
        </button>
    </div>
  )
}

export default Buton