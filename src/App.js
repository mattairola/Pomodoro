import React from "react";
import "./App.css";
import Pomodoro from "./pomodoro/Pomodoro";
import { useState, useEffect } from "react";

function App() {
  const [pomodoro, setPomodoro] = useState({
    all: [],
    visible: [],
  });

  useEffect(() => {
    const url = `${process.env.REACT_APP_API_BASE_URL}/pomodoro`;
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setPomodoro({
          all: response,
          visible: response,
        });
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header container">
        <h1>Pomodoro Timer</h1>
      </header>
      <div className="container">
        <Pomodoro pomodoro={pomodoro} setPomodoro={setPomodoro} />
      </div>
    </div>
  );
}

export default App;
