//회원가입 창 처럼 만들기.
import React from "react";
import { useState } from "react";

const Join = () => {
  //useState 이용해서, 현재 상태값 , 세터 함수 정의하기.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // onChange, onClick , onKeyPress 등 확인.
  // input 입력된 값의 변경 유무를 확인.
  const onChangeEmail = (e) => setEmail(e.target.value);

  // 추가 패스워드 변경 부분, 해당 뷰에 나타내기 테스트. -> 나중에 데이터 전달
  // 통신 라이브러리 사용함, axios 사용할 예정. 파이어베이스를 연동부분. 할예정.
  const onChangePassword = (e) => setPassword(e.target.value);

  // 클릭 이벤트 발생시 값을 확인.
  const onClick = () => {
    alert("email: " + email + ", password : " + password);
    setEmail("");
    setPassword("");
  };

  // 키보드에서 엔터 키 입력시, 클릭 이벤트 호출 연결 확인.
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <div>
      <h1>이벤트 확인 중. </h1>
      <h2>이메일 : {email}</h2>
      <h2>패스워드 : {password}</h2>
      <input
        type="text"
        name="email"
        placeholder="이메일 입력해주세요."
        value={email}
        onChange={onChangeEmail}
        onKeyPress={onKeyPress}
      />
      <br />
      <input
        type="text"
        name="password"
        placeholder="패스워드를 입력해주세요."
        value={password}
        onChange={onChangePassword}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default Join;
