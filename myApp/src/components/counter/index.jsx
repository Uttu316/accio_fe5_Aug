import { useState } from "react";
import "./counter.css";

const Counter = () => {
  // let value = 0
  const [x, setX] = useState(0);

  const onAdd = (e) => {
    // value = value + 1;
    setX(x + 1); // async
    setX(x + 1);
    setX(x + 1);
    setX(x + 1);
    console.log(x);
  };
  const onMinus = (e) => {
    // value = value - 1;
    // setX(x - 1);
    setX((currx) => currx - 1);
    setX((currx) => currx - 1);
    setX((currx) => currx - 1);
    setX((currx) => currx - 1);
    setX((currx) => currx - 1);
    console.log(x);
  };

  return (
    <div className="counter_wrapper">
      <h1 className="counter_heading">Counter</h1>
      <h2 className="counter_value">{x}</h2>
      <div className="counter_actions">
        <button onClick={onAdd}>Add</button>
        <button onClick={onMinus}>Minus</button>
      </div>
    </div>
  );
};
export default Counter;
