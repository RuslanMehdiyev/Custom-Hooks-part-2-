import { useEffect, useState } from "react";
import "./App.css";
import useFetch from "./hooks/useFetch";
import useLocalStorage from "./hooks/useLocalStorage";
import useStateWithHistory from "./hooks/useStateWithHistory";

function App() {
  //Custom useLocalStorage hook
  const [data, setData] = useLocalStorage("name", "Ruslan");

  useEffect(() => {
    console.log(data);
  }, [data]);

  //Custom useFetch hook
  const [responseJson, isLoading, error] = useFetch(
    "https://northwind.vercel.app/api/products"
  );

  //Custom useStateWithHistory hook

  const [value, setValue, history, goBack, goForward] = useStateWithHistory(0);

  return (
    <div className="App">
      <button onClick={() => setData("Ruslan")}>Set</button>
      <hr />
      <div>
        {isLoading && <p>Loading...</p>}
        {responseJson && <h3>Response length: {responseJson.length}</h3>}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
      <hr />
      <div>
        <h1>Value is: {value}</h1>
        <h2>
          History:{" "}
          {history.map((e, key) => (
            <span key={key}>{e} </span>
          ))}
        </h2>
        <button
          onClick={() => {
            setValue(value + 1);
          }}
        >
          +1
        </button>
        <div>
          <button onClick={goBack}>Go back value</button>
          <button onClick={goForward}>Go forward value</button>
        </div>
      </div>
    </div>
  );
}

export default App;
