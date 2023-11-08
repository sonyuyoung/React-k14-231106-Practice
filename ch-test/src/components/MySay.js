// rsc, 함수형 컴포넌트 템플릿 바로생성
import React, { useState } from "react";
//useState 로 함수형 컴포넌트에서 상태값 변경 연습해보기
const MySay = () => {
  //회원가입, username 입력받아서 , username 확인하기
  // const [상태값,세터함수]= useState('')->반환을 배열형식으로 한다.
  const [username, setUserName] = useState("syy");
  const [password, setPassword] = useState("1234");

  // 색깔추가
  const [color, setColor] = useState("red");

  //이벤트핸들러 onClick 클릭시 이벤트 발생
  const onClickUsername = () => setUserName("Username 더미값");
  const onClickPassword = () => setPassword("password 더미값");
  return (
    <div>
      <h1 style={{ color }}> {username} 님 환영합니다.</h1>
      <h1>
        {username} 님 패스워트 확인태스트 : {password}.{""}
      </h1>
      <button onClick={onClickUsername}>username 확인하기</button>
      <button onClick={onClickPassword}>password 확인하기</button>
      <br />
      <button style={{ color: "red" }} onClick={() => setColor("red")}>
        빨간색꾸미기
      </button>
      <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
        파란색꾸미기
      </button>
    </div>
  );
};
export default MySay;
