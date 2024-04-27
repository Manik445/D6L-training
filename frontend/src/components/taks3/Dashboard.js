import React from 'react';
import {
    Routes,
    Route,
    Link,
} from "react-router-dom";
import About from './About';
import Home from './Home';

const Dashboard = () => {
  return (
    <div>
        <ul>
            <li>
                <Link to='/home'>Home</Link> 
            </li>
            <li>   
                <Link to='/about'>About</Link>
            </li>
        </ul>
        <Routes>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
        </Routes>
    </div>
  );
}

export default Dashboard;
