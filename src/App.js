import { useRef, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const increaseCountState = () => {
    setCount((count) => count + 1);
    // 랜더링 됨
  };

  const increaseCountRef = () => {
    countRef.current = countRef.current + 1;
    // 랜더링 안됨
  };

  return (
    <div>
      <p>State: {count}</p>
      <p>Ref: {countRef.current}</p>
      <button onClick={increaseCountState}>State Up</button>
      <button onClick={increaseCountRef}>Ref Up</button>
    </div>
  );
}

export default App;
