import "./index.css";

function App() {
  const step = 1;
  const count = 1;
  return (
    <div className="center-box">
      <h1>Hello Challenge</h1>
      <div>
        <button>-</button>
        Step: {step}
        <button>+</button>
      </div>

      <div>
        <button>-</button>
        Count: {count}
        <button>+</button>
      </div>
    </div>
  );
}

export default App;
