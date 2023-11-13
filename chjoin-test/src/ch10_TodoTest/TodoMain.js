// 부모 : App, 자식 : TodoMain
// 자식 : TodoMain (베이스 컴포넌트)
// 전체 가운데 요소로 정렬 시켜주는 템플릿 :TodoBase
// 1)제목 2) 입력란:TodoInsert 3) 리스트 4) 리스트의 아이템 등.

import React, { useCallback, useRef, useState } from "react";
import styled from "styled-components";
// import { AiFillApple } from "react-icons/ai";
import TodoBase from "./TodoBase";
import TodoInsert from "./TodoInsert";

import TodoList from "./TodoList";
import { useCallback } from "react";

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

  //추가로 입력이 되는 todo 부분의 아이디를 id : 4부터 할당 할 예정.
  const nextId = useRef(4);

  // TodoMain -> TodoInsert 자식 컴포넌트에게, props로 함수를 전달하기.
  // onInsert 라는 함수는, onChange 함수와는 다르게,
  // 매번 새로운 함수를 생성함. 이유는 함수 안에 배열이 변경이 되어서,
  // todos 배열의 변경에 따라서 , 동작하게 만들기.
  const onInsert = useCallback(
    (text) => {
      const todo = {
        //  const nextId = useRef(4); 4부터 할당.
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos]
  );

  return (
    <Main_css>
      <TodoBase>
        {/* 위에서 만든 useCallback 함수를 자식 컴포넌트에게 전달하기. */}
        <TodoInsert onInsert={onInsert} />
        {/* 위에서 만든 임시 데이터 배열를 전달 : props 속성으로 전달 */}
        <TodoList todos={todos} />
      </TodoBase>
    </Main_css>
  );
};

export default TodoMain;
