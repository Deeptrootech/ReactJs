import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/ClassClick'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'

function App() {
  return (
    <div className="App">
      {/* <Greet greetname="Namaste !"/> */}


      {/* <Welcome  name="Class_Deep_Welcome">
        <p>I'm children</p>
      </Welcome> */}


      {/* <Hello name="Deep">
        <p>Hello from props children</p>
      </Hello> */}


      {/* <Hello name="Rahul">
        <button>Submit</button>
      </Hello> */}


      {/* <Hello name="Pakshal"/> */}


      {/* <Message/> */}
      

      {/* <Counter/> */}


      {/* <FunctionClick/> */}


      {/* <ClassClick/> */}
      

      {/* <EventBind/> */}


      {/* <ParentComponent/> */}


      <UserGreeting/>
    </div>
  );
}

export default App;
