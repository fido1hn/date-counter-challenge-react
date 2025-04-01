import { useState } from "react";
import "./index.css";

function App() {
  let [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function handleIncreaseStep() {
    setStep((s) => (s += 1));
  }
  function handleReduceStep() {
    setStep((s) => s - 1);
  }

  function handleIncreaseCount() {
    setCount((s) => s + step);
  }
  function handleReduceCount() {
    setCount((s) => s - step);
  }

  return (
    <div className="center-box">
      <div className="vertical-box">
        <div>
          <button onClick={handleReduceStep}>-</button>
          Step: {step}
          <button onClick={handleIncreaseStep}>+</button>
        </div>
        <div>
          <button onClick={handleReduceCount}>-</button>
          Count: {count}
          <button onClick={handleIncreaseCount}>+</button>
        </div>

        <p>{count} days from today: </p>
      </div>
    </div>
  );
}

export default App;
