import React from 'react'
import { useNavigate } from 'react-router-dom'

const Buttonnavigate = () => {
    const navigate = useNavigate(); 

    const handlenavigate = ()=>{
        navigate('/home')
    }
  return (
    <div>
        <button onClick={handlenavigate}>To Home</button>
    </div>
  )
}

export default Buttonnavigate