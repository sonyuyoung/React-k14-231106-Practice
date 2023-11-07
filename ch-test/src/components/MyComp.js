//rsc
import React from "react";

// 자식 컴포넌트
// 부모 컴포넌트로 부터 전달받는 props 라는 속성을 이용하는 입장.
// 부모: App.js
const MyComp = (props) => {
  return (
    <div>
      <h1>테스트 props 객체 안에 속성들중에 Name만 받아오기,{props.name}</h1>
      <h1>
        테스트 props 객체 안에 속성들중에 password 받아오기,{props.password}
      </h1>
      <h2>
        테스트 props 객체 안에 속성들중에 child 받아오기 ,{props.children}
      </h2>
    </div>
  );
};
// 타입의 기본값 정하기
MyComp.defaultProps = {
  name: "기본이름",
  password: "기본 1234",
};

export default MyComp;
