import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter((prev) => prev + 1);
  const decrement = () => setCounter((prev) => -1);
  return (
    <>
      <div>Current Count: {counter}</div>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
    </>
  );
}
