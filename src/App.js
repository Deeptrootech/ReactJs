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
      <UseMemo />
    </div>
  );
}

export default App;
