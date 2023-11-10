import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// import styled from "styled-components";
// import { Component } from "react";
// import "../CSS/test.css";
// import styled from "styled-components";
// import { Component } from "react";

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
const Button1 = styled.div`
  width: 10%;
`;

const Main1 = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Wrapper>
        <h1>메인페이지</h1>

        <Button
          class="button1"
          title="회원가입 이동"
          onClick={() => {
            navigate("/login1");
          }}
        >
          Sign In
        </Button>
        <br />
        <Button
          class="button2"
          title="회원가입 이동"
          onClick={() => {
            navigate("/join1");
          }}
        >
          Sign Up
        </Button>
        <br></br>
        <Button
          class="useStateTest"
          title="useStateTest"
          onClick={() => {
            navigate("/useStateTest");
          }}
        >
          useStateTest 1번
        </Button>
        <br></br>
        <Button
          class="useEffectTest"
          title="useEffectTest"
          onClick={() => {
            navigate("/useEffectTest");
          }}
        >
          useEffectTest 1번
        </Button>
        <br />
        <Button
          class="useReducerTest"
          title="useReducerTest"
          onClick={() => {
            navigate("/useReducerTest");
          }}
        >
          useReducerTest 1번
        </Button>
        <br />
        <Button
          class="useInfoReducerTest"
          title="useInfoReducerTest"
          onClick={() => {
            navigate("/useInfoReducerTest");
          }}
        >
          useInfoReducerTest 2번
        </Button>
        <Button
          class="averageUserMemo"
          title="averageUserMemo"
          onClick={() => {
            navigate("/averageUserMemo");
          }}
        >
          useInfoReducerTest
        </Button>
      </Wrapper>
    </div>
  );
};

export default Main1;
