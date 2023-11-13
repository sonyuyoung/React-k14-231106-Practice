import React from "react";

// https://react-icons.github.io/react-icons/search?q=checkbox
// https://react-icons.github.io/react-icons/search?q=remove
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
} from "react-icons/md";

// css 파일을 분리해서 작업하지만,
// 해당 컴포넌트 내부에서 한번에 css 작업을 같이 하는 경우가 많음.
import styled from "styled-components";

//조건부 렌더링 쉽게 이용하기 위한 도구 가져오기.
// yarn add classnames : 이미 설치 했음.
//     "classnames": "^2.3.2",
import cn from "classnames";

// 작업 순서
// 1) TodoListItemCss , 2)CheckboxCss 3) TextCss 4)RemoveCss

// 컴포넌트 내부에, 각 요소에 css 작업 해보기.

const TodoListItemCss = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  /* 짝수 번째 자식 요소의 배경색 지정  & : 현재 본인 요소, div */
  &:nth-child(even) {
    background: #f8f9fa;
  }
  &.checked {
    svg {
      color: #22b8cf;
    }
    .text {
      color: #adb5bd;
      text-decoration: line-through;
    }
  }
`;
const CheckboxCss = styled.div`
  cursor: pointer;
  /* 차지 할수 있는 영역 모두 차지 ,  */
  flex: 1;
  display: flex;
  align-items: center;
  svg {
    font-size: 1.5rem;
  }
`;
const TextCss = styled.div`
  margin-left: 1.5rem;
  flex: 1;
`;
const RemoveCss = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #ff6b6b;
  cursor: pointer;
  &:hover {
    color: #ff8787;
  }
`;

// 부모 컴포넌트 TodoList 로 부터 전달 받은 속성
// <TodoListItem todo={todo} key={todo.id} />
// todo = {id:1, text="내용", checked : true}
const TodoListItem = ({ todo }) => {
  // const text = todo.text
  // const checked = todo.checked
  const { text, checked } = todo;
  return (
    // 부모로 부터 받은 더미 데이터를 사용하면 됨.
    // 전달.
    // 1) TodoMain -> TodoList -> TodoListItem : 더미데이터가 전달중, props로

    // 조건부 렌더링 하기.
    // 도구를 사용하기.  classnames 모듈이 이용해서, 쉽게 조건부 렌더링 하기.
    //
    <TodoListItemCss>
      {/* cn 이용하면, checkbox라는 속성이  checked 의 속성에 의해서 
      true 이면 , className에 등록이 되고, 
      false 이면 , className에 등록이 안됨,  */}
      <CheckboxCss className={cn("checkbox", { checked })}>
        {/* 체크박스의 상태를 표시하는 checked 변수를 기준으로, 
        조건이 true : MdCheckBox 를 사용하고 
        조건이 false : MdCheckBoxOutlineBlank 를 사용하기 */}

        {/* 조건부 렌더링 cn 이용해서 하기.  */}
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}

        {/* 조건이 true : MdCheckBox 를 사용하고  */}
        {/* 더미데이터 내용중 text 가져오기 */}
        {/* <TextCss>샘플 할일</TextCss> */}
        <TextCss>{text}</TextCss>
      </CheckboxCss>
      <RemoveCss>
        <MdRemoveCircleOutline />
      </RemoveCss>
    </TodoListItemCss>
  );
};

export default TodoListItem;
