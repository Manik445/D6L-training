import './App.css';
import First from './components/First';
import Second from './components/Second';
import Third from './components/Third';
import Fourth from './components/Fourth';
import Taskk from './components/Taskk';
import Task2 from './components/Task2';
import Person from './components/task1/Person';
import Greetings from './components/task1/Greetings';

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

      {/* task incudes in task1 folder in Person folder  */}
      {/* <Person name="Manik"/> */}  
      <Greetings />

    </div>
  );
}

export default App;
