import { useState } from "react";
import "./index.css";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);

  // function handleIncreaseStep() {
  //   setStep((s) => (s += 1));
  // }
  // function handleReduceStep() {
  //   setStep((s) => s - 1);
  // }

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
          <input
            type="range"
            min={1}
            max={10}
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
          />
          <span style={{ fontSize: "25px", fontWeight: "bold" }}>{step}</span>
        </div>
        {/* <div>
          <button onClick={handleReduceStep}>-</button>
          <strong style={{ fontSize: 25, marginLeft: 10, marginRight: 10 }}>
            Step: {step}
          </strong>
          <button onClick={handleIncreaseStep}>+</button>
        </div> */}
        <div>
          <button onClick={handleReduceCount}>-</button>
          {/* <strong style={{ fontSize: 25, marginLeft: 10, marginRight: 10 }}>
            Count: {count}
          </strong> */}
          <input
            type="text"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          />
          <button onClick={handleIncreaseCount}>+</button>
        </div>

        <p>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} day(s) from today is `
            : `${Math.abs(count)} days ago was `}
          {date.toDateString()}
        </p>
      </div>
    </div>
  );
}

export default App;
