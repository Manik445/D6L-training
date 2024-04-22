import React from 'react'

const Button = ({onClick , label='clicked'}) => {
  return (
    <div>
        <button onClick={onClick} data-testid="btn">
            {label}
        </button>
    </div>
  )
}

export default Button