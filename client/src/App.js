import "./App.css";
import { useState } from "react";

function App() {
  const [displayNumber, setDisplayNumber] = useState(0);

  return (
    <div className="App">
      <div className="calculatorContainer">
        <div className="displayContainer">
          <div className="displayNumber">{displayNumber}</div>
        </div>
        <div className="buttonGrid">
          <div className="button" onClick={() => setDisplayNumber(0)}>
            AC
          </div>
          <div className="button">+/-</div>
          <div className="button">%</div>
          <div className="button">÷</div>
          <div
            className="button"
            onClick={(e) => setDisplayNumber(`${displayNumber}7`)}
          >
            7
          </div>
          <div
            className="button"
            onClick={(e) => setDisplayNumber(`${displayNumber}8`)}
          >
            8
          </div>
          <div
            className="button"
            onClick={(e) => setDisplayNumber(`${displayNumber}9`)}
          >
            9
          </div>
          <div className="button">x</div>
          <div
            className="button"
            onClick={(e) => setDisplayNumber(`${displayNumber}4`)}
          >
            4
          </div>
          <div
            className="button"
            onClick={(e) => setDisplayNumber(`${displayNumber}5`)}
          >
            5
          </div>
          <div
            className="button"
            onClick={(e) => setDisplayNumber(`${displayNumber}6`)}
          >
            6
          </div>
          <div className="button">-</div>
          <div
            className="button"
            onClick={(e) => setDisplayNumber(`${displayNumber}1`)}
          >
            1
          </div>
          <div
            className="button"
            onClick={(e) => setDisplayNumber(`${displayNumber}2`)}
          >
            2
          </div>
          <div
            className="button"
            onClick={(e) => setDisplayNumber(`${displayNumber}3`)}
          >
            3
          </div>
          <div className="button">+</div>
          <div
            className="button zero"
            onClick={(e) => setDisplayNumber(`${displayNumber}0`)}
          >
            0
          </div>
          <div className="button">.</div>
          <div className="button">=</div>
        </div>
      </div>
    </div>
  );
}

export default App;
