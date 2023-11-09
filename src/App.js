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
import NameList from './components/NameList'
import Stylesheet from './components/Stylesheet'
import Inline from './components/Inline'
import Form from './components/Form'
import './appStyle.css'
import style from './appStyle.module.css'

function App() {
  return (
    <div className="App">
      <h1 className='error'>Error</h1> {/* project scope */}
      <h1 className={style.success}>Success</h1> {/* module scope */}

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


      {/* <UserGreeting/> */}


      {/* <NameList/> */}


      {/* <Stylesheet IsPrimary={true}/> */}


      {/* <Inline/> */}

      <Form />
    </div>
  );
}

export default App;
