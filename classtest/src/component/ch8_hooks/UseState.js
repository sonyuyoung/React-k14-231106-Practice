import React from "react";
import { useState } from "react";
import { Button } from "antd";
import styled from "styled-components";

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
  /* background-color: blanchedalmond; */
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

const UseState = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeNickName = (e) => {
    setNickname(e.target.value);
  };
  const [count, setCount] = useState(0);

  return (
    <Wrapper>
      <div>
        <Container>
          <div>
            {/* 입력창인데, 값을 입력시, onChange 이벤트 핸들러 동작해서, 결과 뷰에 반영 */}
            <input value={name} onChange={onChangeName} /> <br />
            <input value={nickname} onChange={onChangeNickName} />
          </div>
          {/* 결과 뷰 출력 */}
          <div>
            <h1>
              이름: <b>{name}</b>
            </h1>
          </div>
          <div>
            <h1>
              닉네임: <b>{nickname}</b>
            </h1>
            <div>
              <p>Count: {count}</p>
              <button onClick={() => setCount(count + 1)}>Increment</button>
            </div>
          </div>
        </Container>
      </div>
    </Wrapper>
  );
};

export default UseState;
