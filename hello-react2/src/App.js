// js import 키워드를 사용하는데,
// 탈 웹브라우저, 즉, 로컬에서, 자바스크립트 이용한다.
// node -> 리액트 프로젝트 생성 -> 그 프로젝트 내에서, 특정 기능(npm ) 설치 가능.
import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  // JSX 문법 모양 소개
  // return 이라는 키워드 아래에, html 태그들이 사용이 되고 있음.
  // return React.createElement(
  //   "div",
  //   null,
  //   "Hello",
  //   React.createElement("b", null, "react")
  // );

  // const name = "이상용";
  // return (
  //   <>
  //     <h1>hello React {name}</h1>
  //     <h2>동작 잘하나요?</h2>
  //   </>
  // );

  // if 대신에 jsx 에서 조건부 연산자 이용.
  // const : 상수처럼 사용, 안드로이드 val
  // let : 변수처럼 사용, 안드로이드 var
  const name = "이상용";
  // {조건식 ? (참 실행될 문장) : ( 거짓 실행될 문장)}
  return (
    <div>
      {name === "이상용2" ? <h1>이상용이 맞네</h1> : <h1>이상용이 아니네</h1>}
    </div>
  );
}

export default App;
