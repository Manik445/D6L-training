import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import First from './components/First';
import Second from './components/Second';
import Third from './components/Third';
import Fourth from './components/Fourth';
import Taskk from './components/Taskk';
import Task2 from './components/Task2';
import Person from './components/task1/Person';
import Greetings from './components/task1/Greetings';
import Form from './components/task2/Form';
import Main from './components/taks3/Main';
import Dashboard from './components/taks3/Dashboard';
import Home from './components/taks3/Home';
import Buttonnavigate from './components/taks3/Buttonnavigate';
import About from './components/taks3/About';

function App() {
  return (
    <div className="App">
      <First name="Manik Gupta" profession="Associate Software developer"/> 

      {/* multiple components rendering  */}
      {/* <Second/>  */}
      {/* <Third/>    */}
      {/* <Fourth/>   */}

    {/* todo application in Taskk uncomment to see it */}
      {/* <Taskk/>  */}

    {/* dark Mode Feature  */}
      {/* <Task2/> */}

      {/* task1 : Assignment on React Functional Component using State and Props  */}
      {/* <Person name="Manik"/> */}  
      {/* <Greetings /> */}


      {/* taks2 : Assignment on Form Handling using Functional Component */}
      {/* <Form/>    */}

      {/* Taks3 : Assignment on React Routing using Functional Component */}
      {/* <Main/> */}

      {/* <Router>
      <div>
        <ul>
          <li>
            <Link to='/dashboard'>Dashboard</Link> 
          </li>
        </ul>
        <Routes>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
        </Routes>
      </div>
    </Router> */}
  
    {/* routes using usenavigate  */}
    <Router>
      <Routes>
        <Route path="/" element={<Buttonnavigate />} />
        <Route path='/home' element={<Home/>} /> 
        <Route path='/about' element={<About/>} /> 

      </Routes>
    </Router>
 
    


    </div>
  );
}

export default App;
