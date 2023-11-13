// 부모 : App, 자식 : TodoMain
// 자식 : TodoMain (베이스 컴포넌트)
// 전체 가운데 요소로 정렬 시켜주는 템플릿 :TodoBase
// 1)제목 2) 입력란:TodoInsert 3) 리스트 4) 리스트의 아이템 등.

import React, { useState } from "react";
import styled from "styled-components";
// import { AiFillApple } from "react-icons/ai";
import TodoBase from "./TodoBase";
import TodoInsert from "./TodoInsert";

import TodoList from "./TodoList";

const Main_css = styled.div`
  margin: 0;
  padding: 0;
  //회색, 배경색은 나중에 본인이 좋아하는 색으로 변경.
  background: #e9ecef;
`;

// Todo 만들기 준비 메인 <AiFillApple />
const TodoMain = () => {
  //샘플 더미 데이터를 임시 배열에 만들어서, 전달. props 테스트
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "더미 데이터 요소 1번입니다.",
      checked: true,
    },
    {
      id: 2,
      text: "더미 데이터 요소 2번입니다.",
      checked: false,
    },
    {
      id: 3,
      text: "더미 데이터 요소 3번입니다.",
      checked: true,
    },
  ]);

  return (
    <Main_css>
      <TodoBase>
        <TodoInsert />
        {/* 위에서 만든 임시 데이터 배열를 전달 : props 속성으로 전달 */}
        <TodoList todos={todos} />
      </TodoBase>
    </Main_css>
  );
};

export default TodoMain;
