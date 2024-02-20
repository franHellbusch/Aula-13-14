import { useEffect, useState } from "react";
import "./Counter.css";

// props
function Counter(props) {
  // useState
  const [count, setCount] = useState(props.initialState);

  console.log("cambio el estado");
  useEffect(() => {
    console.log("entro al effect");
  }, []);

  const sumar = () => {
    setCount(count + 1);
  };

  const restar = () => {
    setCount(count - 1);
  };

  // ciclos de vida del componente
  // 1. montaje componentMount
  // 2. modificado componentUpdated
  // 3. desmontar componentUnmount

  return (
    <div className='counter'>
      <button onClick={restar}>-</button>
      <span>{count}</span>
      <button onClick={sumar}>+</button>
    </div>
  );
}

export default Counter;
