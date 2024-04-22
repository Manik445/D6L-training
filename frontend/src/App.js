import './App.css';
import First from './components/First';
import Second from './components/Second';
import Third from './components/Third';
import Fourth from './components/Fourth';
import Taskk from './components/Taskk';
import Task2 from './components/Task2';

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
      <Task2/>
    </div>
  );
}

export default App;
