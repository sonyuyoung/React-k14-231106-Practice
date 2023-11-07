import logo from "./logo.svg";
import "./App.css";
import React, { Fragment } from "react";
import Test from "./Component/Test";
import FuncTest1 from "./Component/FuncTest1";
import ClassTest from "./Component/ClassTest";

function App() {
  return (
    <div>
      <Test />
      <FuncTest1 />
      <ClassTest />
    </div>
  );
}

export default App;
