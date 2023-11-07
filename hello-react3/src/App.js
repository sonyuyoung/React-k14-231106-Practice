import logo from "./logo.svg";
import "./App.css";
import { Fragment } from "react";

function App() {
  const name = "React Testing";

  return (
    <div className="bg">
      <div className="App">{name}</div>
      <div className="App2">{name + 1}</div>
    </div>
  );
}

export default App;
