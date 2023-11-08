// Main 임시페이지
import React from "react";
// yarn add react-router-dom
// npm install eact-router-dom
// 라우팅 모듈 도구 설치
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
const main = () => {
  const navigate = useNavigate;

  return (
    <div>
      <h1>메인 화면입니다.</h1>
      {/* join 컴포넌트로 이동하는 버튼 하나 추가 */}
      <Button title="회원가입 이동" onClick={navigate("/join")} />
    </div>
  );
};

export default main;
