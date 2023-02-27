import "./App.css";
import { useState } from "react";

function App() {
  const [displayNumber, setDisplayNumber] = useState(0);
  const [firstNumber, setFirstNumber] = useState(0);

  const onNumberClick = (e) => {
    if (displayNumber === 0) {
      setDisplayNumber(e.target.innerHTML);
    } else {
      setDisplayNumber(`${displayNumber}${e.target.innerHTML}`);
    }
  };

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
          <div className="button" onClick={(e) => onNumberClick(e)}>
            7
          </div>
          <div className="button" onClick={(e) => onNumberClick(e)}>
            8
          </div>
          <div className="button" onClick={(e) => onNumberClick(e)}>
            9
          </div>
          <div className="button">x</div>
          <div className="button" onClick={(e) => onNumberClick(e)}>
            4
          </div>
          <div className="button" onClick={(e) => onNumberClick(e)}>
            5
          </div>
          <div className="button" onClick={(e) => onNumberClick(e)}>
            6
          </div>
          <div className="button">-</div>
          <div className="button" onClick={(e) => onNumberClick(e)}>
            1
          </div>
          <div className="button" onClick={(e) => onNumberClick(e)}>
            2
          </div>
          <div className="button" onClick={(e) => onNumberClick(e)}>
            3
          </div>
          <div className="button">+</div>
          <div className="button zero" onClick={(e) => onNumberClick(e)}>
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
