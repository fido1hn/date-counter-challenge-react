import "./index.css";

function App() {
  const step = 1;
  const count = 1;
  return (
    <div className="center-box">
      <div className="vertical-box">
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

        <p>30 days from today: </p>
      </div>
    </div>
  );
}

export default App;
