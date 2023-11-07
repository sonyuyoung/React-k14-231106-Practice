// rsc , 함수형 컴포넌트 템플릿 바로 생성

import React, { useState } from "react";
// useState 로, 함수형 컴포넌트에서, 상태값 변경 연습해보기.

const MySay = () => {
  //회원가입 , username 입력 받아서, username 확인 하기.
  // const [상태값,세터함수] = useState('')-> 반환 배열 형식.
  const [username, setUserName] = useState("lsy");
  const [password, setPassword] = useState("1234");
  // 이벤트 핸들러 추가. onClick , 클릭시 이벤트 발생.
  const onClickUsername = () => setUserName("username 더미값");
  const onClickPassword = () => setPassword("password 더미값");
  return (
    <div>
      <h1>{username} 님 환영합니다.</h1>
      <h1>
        {username} 님 패스워드 확인 테스트: {password}{" "}
      </h1>
      <button onClick={onClickUsername}>username 확인하기</button>
      <button onClick={onClickPassword}>password 확인하기</button>
    </div>
  );
};

export default MySay;
