// js import 키워드를 사용하는데,
// 탈 웹브라우저 , 로컬에서 자바스크립트를 이용한다 .
// node - > 리액트 프로젝트생성 ->그 프로젝트내에서 특정기능(npm)설치가능
// 외부 모듈도 가져온다던디...
import logo from "./logo.svg";
import "./App.css";

function App() {
  // JSX 문법의 모양 소개
  // return dkfodp html 태그들이 사용되고 있다
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
