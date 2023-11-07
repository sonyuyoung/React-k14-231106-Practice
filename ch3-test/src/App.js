import logo from "./logo.svg";
import "./App.css";
import React, { Fragment } from "react";
import Test from "./Component/Test";
import FuncTest1 from "./Component/FuncTest1";
import ClassTest from "./Component/ClassTest";
import Test33 from "./Component/Test33";
import MyComp from "./Component/MyComp";

// 부모 컴포넌트
function App() {
  return (
    <>
      {/* 자식 컴포넌트 출력 해보기 테스트 */}
      {/* 함수형, 클래스형 컴포넌트의 이름의 첫 시작 대문자로 해야 인식. */}
      <Test />
      <FuncTest1 />
      <ClassTest />
      <Test33 />

      {/* 자식 컴포넌트에게 props 라는 속성 객체를 이용해서 이름을 전달하기 */}
      {/* <MyComp name="이상용" password="1234" /> */}

      {/* 부모 컴포넌트에서 props 설정이 없을 때, 기본값 사용하기 */}
      {/* <MyComp /> */}

      {/* 자식 컴포넌트에게 children 라는 속성으로 전달하기.  */}
      {/* <MyComp>여기 값이 children 속성임. </MyComp> */}

      <MyComp name="이상용" password="12345678">
        이상용 어린이
      </MyComp>
    </>
  );
}

export default App;
