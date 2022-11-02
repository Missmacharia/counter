import "./App.css";
import { useState } from "react";
import Increment from "./components/increment/Increment";
import Decrement from "./components/decrement/Decrement";

function App() {
  const [count, setCount] = useState(0);
  const [countDecrease, setCountDecrease]=useState(0)
  return (
    <div className="App">
      <h1>count is {count} </h1>
      <Increment count={count} setCount= {setCount} />
      <div>
        <h1>count is {countDecrease} </h1>
        <Decrement count={countDecrease} setCountDecrease= {setCountDecrease}/>
      </div>
    </div>
  );
}

export default App;
