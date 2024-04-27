import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate(); 

    const handlenavigate = ()=>{
        navigate('/home')
    }
  return (
    <div>  
      <h1>About</h1>
        <button onClick={handlenavigate}>To Home</button>
    </div>
  )
}

export default About