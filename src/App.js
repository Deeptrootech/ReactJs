import "./App.css";
import UseStateHook from "./components/UseStateHook";
import UseEffectHook from "./components/UseEffectHook";
import ArrayCRUD from "./components/ArrayCRUD";
import CompMountUnmount from "./components/CompMountUnmount";
import UseRefHook from "./components/UseRefHook";
import UseContextHook from "./components/UseContextHook";
import FetchDataAPI from "./components/FetchDataAPI";
import ParentComponent from "./components/CallBackHook/ParentComponent";
import UseMemo from "./components/UseMemo";
import UpdateDOMTitleOne from "./components/CustomHooks/UpdateDOMTitleOne";
import UpdateDOMTitleTwo from "./components/CustomHooks/UpdateDOMTitleTwo";
import CounterOne from "./components/CustomHooks/CounterOne";
import CounterTwo from "./components/CustomHooks/CounterTwo";
import ParentOne from "./components/Optimization/ParentOne";
import ChildOne from "./components/Optimization/ChildOne";
import ParentTwo from "./components/Optimization/Memo/ParentTwo";
import ParentThree from "./components/Optimization/IncorrectOptimization/parentThree";

function App() {
  return (
    <div className='App'>
      {/* <UseStateHook /> */}
      {/* <UseEffectHook /> */}
      {/* <ArrayCRUD /> */}
      {/* <CompMountUnmount /> */}
      {/* <UseRefHook /> */}
      {/* <UseContextHook /> */}
      {/* <FetchDataAPI /> */}
      {/* <ParentComponent /> */}
      {/* <UseMemo /> */}
      {/* <UpdateDOMTitleOne /> */}
      {/* <UpdateDOMTitleTwo /> */}
      {/* <CounterOne /> */}
      {/* <CounterTwo /> */}
      {/* <ParentOne>
        <ChildOne />
      </ParentOne> */}
      {/* <ParentTwo /> */}
      <ParentThree />
    </div>
  );
}

export default App;
