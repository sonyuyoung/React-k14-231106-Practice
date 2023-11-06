// js import 키워드를 사용하는데,
// 탈 웹브라우저, 즉, 로컬에서, 자바스크립트 이용한다.
// node -> 리액트 프로젝트 생성 -> 그 프로젝트 내에서, 특정 기능(npm ) 설치 가능.
import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  // JSX 문법 모양 소개
  // return 이라는 키워드 아래에, html 태그들이 사용이 되고 있음.
  return React.createElement(
    "div",
    null,
    "Hello",
    React.createElement("b", null, "react")
  );
}

export default App;
