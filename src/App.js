
import { useState } from 'react';

import CEButton from './components/CEButton';
import NumPad from './components/NumPad';
import Operators from './components/Operators';
import Display from './components/Display';

import logo from './logo.svg';
import './App.css';

function App() {
  const [displayState, setDisplayState] = useState("0");
  const [resetFlag, setResetFlag] = useState(true);
  const [operator, setOperator] = useState(null);
  const [firstNum, setFirstNum] = useState(null);
  const [secondNum, setSecondNum] = useState(null);

  const cal = () => {
    const result = eval(`${firstNum}${operator}${secondNum}`);
    setFirstNum(`${result}`);
    setDisplayState(`${result}`);
    setResetFlag(true);
  }

  return (
    <div className="wrapper">
      <div className="calculator">
        <div className="flex flex-row display-wrapper">
          <CEButton onClick={() => {
            setResetFlag(true);
            setDisplayState("0");
            setFirstNum(null);
            setSecondNum(null);
            setOperator(null);
          }}/>
          <Display val={displayState === "" ? "0" : displayState} />
        </div>
        <div className="flex flex-row">
          <NumPad
            onClick={(input) => {
              (resetFlag) ? setDisplayState(`${input}`) : setDisplayState(`${displayState}${input}`);
              (resetFlag) ? setSecondNum(`${input}`) : setSecondNum(`${secondNum}${input}`);
              setResetFlag(false);
            }}
            onCal={cal} />
          <Operators onClick={(newOperator) => {
            console.log(firstNum, operator, secondNum);
            if (operator === null || resetFlag) {
              setOperator(newOperator);
              setFirstNum(displayState);
              setResetFlag(true);
            } else {
              cal();
              setOperator(newOperator);
              setSecondNum(null);
            }
          }} />
        </div>
      </div>
    </div>
  );
}

export default App;
