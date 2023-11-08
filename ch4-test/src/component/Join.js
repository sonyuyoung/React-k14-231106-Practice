//회원가입 창 처럼 만들기.
import React from "react";
import { useState } from "react";

const Join = () => {
  //useState 이용해서, 현재 상태값 , 세터 함수 정의하기.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (e) => setEmail(e.target.value);

  // 클릭이벤트 발생시 값을 확인
  const onClick = () => {
    alert("email : " + email + ",password : " + password);
  };

  //키보드에서 엔터키 입력시 클릭이벤트 호출연결확인
  const onKeyPress = (e) => {
    if (e.key == "Enter") {
      onClick();
    }
  };

  return (
    <div>
      <h4>이벤트확인중</h4>
      <input
        type="text"
        name="email"
        placeholder="이메일입력해주세요"
        value={email}
        onChange={onChangeEmail}
        onKeyPress={onKeyPress}
      ></input>
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default Join;
