import "./App.css";
import { useState } from "react";
import Increment from "./components/increment/Increment";
import Decrement from "./components/decrement/Decrement";
import useC from "./components/Hookcustom/Hookcustom";

function App() {
  // const [count, setCount] = useState(0);
  // const [countDecrease, setCountDecrease]=useState(0)
   let pc = useC('+')
   let nc = useC('-')

  return (
    <div className="App">
      <h1>count is {pc} </h1>
      {/* <Increment setCount= {setCount} /> */}
      <div>
        <h1>count is {nc} </h1>
        {/* <Decrement setCountDecrease= {setCountDecrease}/> */}
      </div>
    </div>
  );
}

export default App;
