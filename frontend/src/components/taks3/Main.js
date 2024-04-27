import React from 'react'
import { Route, Link, BrowserRouter, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'


const Main = () => {
  return (
    <BrowserRouter>
    <div>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
        </ul>
        <Routes>
    <Route exact path='/' component={Home}/>
    <Route exact path='/about' component={About}/>
    </Routes>
    </div>   
    </BrowserRouter>
  )  
}  

export default Main