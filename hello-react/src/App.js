import logo from "./logo.svg";
import "./App.css";
import { Fragment } from "react";

// function App() {
//   return (
//     <div>
//       <h1>동작잘함!</h1>
//     </div>
//   );
// }

// export default App;

// function App() {
//   return (
//     <>
//       <div>
//         <h1>동작잘함!!!!!!</h1>
//       </div>
//     </>
//   );
// }

// export default App;

// function App() {
//   const name = "유영";
//   return (
//     <>
//       <div>
//         <h3>{name}</h3>
//         <h1>동작잘함!!!!!!</h1>
//       </div>
//     </>
//   );
// }

// export default App;

// if 대신에 jsx dptj whrjsqn dustkswk dldyd
// const : 상수처럼 사용 안드로이드 val
// let : 변수처럼 사용 ,  안드로이드 val
// function App() {
//   const name = "유영";
//   //{조건식 ?(참일때):(거짓일때)}
//   return <div>{name === "유영2" ? <h2> 유영이 맞넹@_@</h2> : null}</div>;
// }

// export default App;
// function App() {
//   const name = "유영";
//   //{조건식 ?(참일때):(거짓일때)}
//   return <div>{name === "유영2" && <h2> 유영이 맞넹@_@</h2>}</div>;
// }

// export default App;
// function App() {
//   const number = 0;
//   return <div>{number && <h2> 유영이 맞넹@_@</h2>}</div>;
// }

// export default App;

//undefined 렌더링 안하기위해. 대책 : or(||) 연산자를 이용해서 체크
//앞은 null 이고 뒤에는 값이있기 때문에 값 출력
//null 체크성 으로 사용
// function App() {
//   const name = undefined;
//   return name || "값이 undefined 인니다 ";
// }

// export default App;

//인라인 스타일링 기본
// function App() {
//   const style = {
//     backgroundColor: "blue",
//     color: "yellow",
//     fontSize: "90px",
//   };
//   return <div style={style}>name</div>;
// }

// export default App;

// function App() {
//   return (
//     <div
//       style={{
//         backgroundColor: "pink",
//         color: "white",
//         fontSize: "90px",
//       }}
//     >
//       name
//       <div className="reactTest"></div>
//     </div>
//   );
// }

// export default App;

function App() {
  return (
    <div>
      {/* JSX 에서 기본주석 */}
      {/* ide : 통합개발툴 c+/ */}
      {/* // 이런주석 그대로 표기  
      /*  /*이런주석도 그대로 표기  */}
      <from>
        이름 : <br />
      </from>
    </div>
  );
}

export default App;
