import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate(); 

    const handleclick = ()=>{
        navigate('/about')
} 

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleclick}>To About </button>
    </div>
  )
}

export default Home  