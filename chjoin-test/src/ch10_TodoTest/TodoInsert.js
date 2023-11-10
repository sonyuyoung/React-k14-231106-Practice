import { Button } from "antd";
import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import styled from "styled-components";

// 아이콘 가지고 올 이름
// io IoMdAddCircleOutline
// css
// 1.FormCss
// 2. FormInputCss
// 3. FormButtonCss
const FormCss = styled.form`
  display: flex;
  background: white;
`;
const FormInputCss = styled.input`
  background: none;
  outline: none;
  border: none;
  padding: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.5;
  color: navy;
  &::placeholder {
    color: black;
  }
  flex: 1;
`;
const FormButtonCss = styled.button`
  background: none;
  outline: none;
  border: none;
  background: red;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.1s background ease-in;
  &:hover {
    background: blue;
  }
`;

const TodoInsert = () => {
  return (
    <FormCss>
      <FormInputCss placeholder="Todo 입력해주세요" />
      <FormButtonCss type="primary">
        <IoMdAddCircleOutline />
      </FormButtonCss>
    </FormCss>
  );
};

export default TodoInsert;
