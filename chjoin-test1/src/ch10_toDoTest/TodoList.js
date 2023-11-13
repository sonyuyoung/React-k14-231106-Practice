import React from "react";
import styled from "styled-components";
import TodoListItem from "./TodoListItem";

// 전체 리스트 부분만 css 작업. TodoListCss
const TodoListCss = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
`;

//<TodoList todos={todos} />
// (main)부모에서전달한 props 자식에서 가져오기
//   <TodoList todos={todos} onRemove={onRemove} />
// 마운트 후엔 계속 업데이트 - 생명주기
// 컨텍스트 api -> 저장 ? 공간 ?

const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <TodoListCss>
      {/* 전달받은 props사용하기  map 이라는 내장함수를 사용하여 
       Todolist 부모 컴포넌트에 다시 , 자식컴포넌트인 todoitem에게 props로 전달중  todo 속성과 , key 속성 
       부분 스캐너 ?  : 목록요소가 출력시 반드시 keya 명시 */}
      {todos.map((todo) => (
        //TodoMain -> TodoList -> TotoListItem 에게 지우는 기능의 함수를 전달onRemove={onRemove}
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </TodoListCss>
  );
};
// 추가
export default React.memo(TodoList);
