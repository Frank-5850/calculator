import "./App.css";
import { useState } from "react";

function App() {
  const [displayNumber, setDisplayNumber] = useState(0);
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [operation, setOperation] = useState(null);

  const onNumberClick = (e) => {
    if (displayNumber === 0) {
      setDisplayNumber(e.target.innerHTML);
    } else {
      setDisplayNumber(`${displayNumber}${e.target.innerHTML}`);
    }
  };

  const onOperationClick = (e) => {
    switch (e.target.innerHTML) {
      case "x":
        setFirstNumber(parseInt(displayNumber));
        setDisplayNumber(0);
        setOperation("x");
        break;
      case "÷":
        setFirstNumber(parseInt(displayNumber));
        setDisplayNumber(0);
        setOperation("÷");
        break;
      case "-":
        setFirstNumber(parseInt(displayNumber));
        setDisplayNumber(0);
        setOperation("-");
        break;
      case "+":
        setFirstNumber(parseInt(displayNumber));
        setDisplayNumber(0);
        setOperation("+");
        break;

      default:
        console.log("error");
        break;
    }
  };

  const performCalculation = () => {
    let result;
    switch (operation) {
      case "x":
        result = firstNumber * parseInt(displayNumber);
        setDisplayNumber(result);
        break;
      case "÷":
        result = firstNumber / parseInt(displayNumber);
        setDisplayNumber(result);
        break;
      case "-":
        result = firstNumber - parseInt(displayNumber);
        setDisplayNumber(result);
        break;
      case "+":
        result = firstNumber + parseInt(displayNumber);
        setDisplayNumber(result);
        break;
      default:
        console.log("error");
        break;
    }
  };

  const resetCalculator = () => {
    setDisplayNumber(0);
    setFirstNumber(0);
    setSecondNumber(0);
  };

  return (
    <div className="App">
      <div className="calculatorContainer">
        <div className="displayContainer">
          <div className="displayNumber">{displayNumber}</div>
        </div>
        <div className="buttonGrid">
          <div className="button" onClick={() => resetCalculator()}>
            AC
          </div>
          <div className="button">+/-</div>
          <div className="button" onClick={(e) => onOperationClick(e)}>
            %
          </div>
          <div className="button" onClick={(e) => onOperationClick(e)}>
            ÷
          </div>
          <div className="button" onClick={(e) => onNumberClick(e)}>
            7
          </div>
          <div className="button" onClick={(e) => onNumberClick(e)}>
            8
          </div>
          <div className="button" onClick={(e) => onNumberClick(e)}>
            9
          </div>
          <div className="button" onClick={(e) => onOperationClick(e)}>
            x
          </div>
          <div className="button" onClick={(e) => onNumberClick(e)}>
            4
          </div>
          <div className="button" onClick={(e) => onNumberClick(e)}>
            5
          </div>
          <div className="button" onClick={(e) => onNumberClick(e)}>
            6
          </div>
          <div className="button" onClick={(e) => onOperationClick(e)}>
            -
          </div>
          <div className="button" onClick={(e) => onNumberClick(e)}>
            1
          </div>
          <div className="button" onClick={(e) => onNumberClick(e)}>
            2
          </div>
          <div className="button" onClick={(e) => onNumberClick(e)}>
            3
          </div>
          <div className="button" onClick={(e) => onOperationClick(e)}>
            +
          </div>
          <div className="button zero" onClick={(e) => onNumberClick(e)}>
            0
          </div>
          <div className="button">.</div>
          <div className="button" onClick={() => performCalculation()}>
            =
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
