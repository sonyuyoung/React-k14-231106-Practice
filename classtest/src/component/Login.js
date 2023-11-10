import "bootstrap/dist/css/bootstrap.min.css";
//회원가입 창 처럼 만들기.
import React from "react";
import { Button } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// import { Component } from "react";
// import { useNavigate } from "react-router-dom";
// import { Button } from "antd";

// const MainTitleTextCss = styled.p`
//   font-size: 30px;
// `;
// const MainTextCss = styled.p`
//   font-size: 20px;
//   font-weight: bold;
//   background-color: red;
//   text-align: center;
// `;
//Wrapper 라고 해서 블록 부분 설정.
const Wrapper = styled.div`
  padding: 20px;
  width: calc(100% - 40px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "NexonLv1Gothic";
  margin-top: 50px;
`;
//로그인폼
const LgF = styled.div`
  width: 70%;
  margin: 0 auto;
`;
// Container 만들기.
const Container = styled.div`
  width: 100%;
  max-width: 720px;
  margin-left: 20px;
  // & : 현재 태그
  // div 태그 하위의 자식 태그를 마지막 자식 태그를 제외하고
  // 각 요소의 마진 바텀을 16 px 씩 간격을 주겠다.
  & {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;
const Join = () => {
  const navigate = useNavigate();
  //useState 이용해서, 현재 상태값 , 세터 함수 정의하기.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (e) => setEmail(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);
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
      <Wrapper>
        <h1 className="sign"> Login</h1>
        <Container>
          <form>
            <LgF>
              <input
                class="form-control"
                type="text"
                name="email"
                placeholder="이메일 입력해주세요."
                value={email}
                onChange={onChangeEmail}
                onKeyPress={onKeyPress}
              />
              <input
                class="form-control"
                type="password"
                name="password"
                placeholder="비밀번호 입력해주세요."
                value={password}
                onChange={onChangePassword}
                onKeyPress={onKeyPress}
              />

              <Button type="primary" onClick={onClick}>
                Sign in
              </Button>

              <Button
                type="primary"
                danger
                class="button2"
                title="회원가입 이동"
                onClick={() => {
                  navigate("/join1");
                }}
              >
                Sign Up
              </Button>
            </LgF>
          </form>
        </Container>
      </Wrapper>
    </div>
  );
};
export default Join;
