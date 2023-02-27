import "./App.css";
import { useState } from "react";

function App() {
  const [displayNumber, setDisplayNumber] = useState(0);
  const [firstNumber, setFirstNumber] = useState(0);
  const [operation, setOperation] = useState(null);
  const [currentOperationString, setCurrentOperationString] = useState(null);

  const onNumberClick = (e) => {
    if (displayNumber === 0) {
      setDisplayNumber(e.target.innerHTML);
    } else {
      setDisplayNumber(`${displayNumber}${e.target.innerHTML}`);
    }
  };

  const onOperationClick = (e) => {
    let int;
    if (typeof displayNumber === "string") {
      int = parseFloat(displayNumber);
    } else {
      int = displayNumber;
    }
    switch (e.target.innerHTML) {
      case "x":
        setFirstNumber(int);
        setDisplayNumber(0);
        setOperation("x");
        break;
      case "÷":
        setFirstNumber(int);
        setDisplayNumber(0);
        setOperation("÷");
        break;
      case "-":
        setFirstNumber(int);
        setDisplayNumber(0);
        setOperation("-");
        break;
      case "+":
        setFirstNumber(int);
        setDisplayNumber(0);
        setOperation("+");
        break;
      case "%":
        setDisplayNumber(int / 100);
        break;
      case ".":
        if (!displayNumber.includes(".")) {
          setDisplayNumber(`${displayNumber}.`);
        }
        break;
      default:
        console.log("error");
        break;
    }
  };

  const performCalculation = () => {
    let result;
    let int;
    if (typeof displayNumber === "string") {
      int = parseFloat(displayNumber);
    } else {
      int = displayNumber;
    }
    switch (operation) {
      case "x":
        result = firstNumber * int;
        setDisplayNumber(result);
        setCurrentOperationString(
          `${firstNumber} ${operation} ${displayNumber} =`
        );
        break;
      case "÷":
        result = firstNumber / int;
        setDisplayNumber(result);
        setCurrentOperationString(
          `${firstNumber} ${operation} ${displayNumber} =`
        );
        break;
      case "-":
        result = firstNumber - int;
        setDisplayNumber(result);
        setCurrentOperationString(
          `${firstNumber} ${operation} ${displayNumber} =`
        );
        break;
      case "+":
        result = firstNumber + int;
        setDisplayNumber(result);
        setCurrentOperationString(
          `${firstNumber} ${operation} ${displayNumber} =`
        );
        break;
      default:
        console.log("error");
        break;
    }
  };

  const resetCalculator = () => {
    setDisplayNumber(0);
    setFirstNumber(0);
    setOperation(null);
    setCurrentOperationString(null);
  };

  const setOpposite = () => {
    if (displayNumber > 0) {
      setDisplayNumber(`-${displayNumber}`);
    } else {
      setDisplayNumber(displayNumber * -1);
    }
  };

  return (
    <div className="App">
      <div className="calculatorContainer">
        <div className="displayContainer">
          <div className="currentOperation">{currentOperationString}</div>
          <div className="displayNumber">{displayNumber}</div>
        </div>
        <div className="buttonGrid">
          <div className="button" onClick={() => resetCalculator()}>
            AC
          </div>
          <div className="button" onClick={() => setOpposite()}>
            +/-
          </div>
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
          <div className="button" onClick={(e) => onOperationClick(e)}>
            .
          </div>
          <div className="button" onClick={() => performCalculation()}>
            =
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
