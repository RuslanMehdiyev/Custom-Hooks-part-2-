import { useState } from "react";

function useStateWithHistory(initialState = 0) {
  const [value, setInitialValue] = useState(initialState);
  const [history, setHistory] = useState([initialState]);
  const [indexOfValue, setIndexOfValue] = useState(0);

  function setValue(newValue) {
    setInitialValue(newValue);
    setHistory([...history, +newValue]);
    // console.log(history[indexOfValue]);
    setIndexOfValue(history.length);
  }

  function goBack() {
    // console.log(indexOfValue);
    if (indexOfValue <= 0) {
      return;
    }
    setIndexOfValue((prev) => prev - 1);
    setInitialValue(history[indexOfValue]);
  }

  function goForward() {
    // console.log(indexOfValue);
    if (indexOfValue >= history.length - 1) {
      return;
    }
    setIndexOfValue((prev) => prev + 1);
    setInitialValue(history[indexOfValue]);
  }

  return [value, setValue, history, goBack, goForward];
}

export default useStateWithHistory;
