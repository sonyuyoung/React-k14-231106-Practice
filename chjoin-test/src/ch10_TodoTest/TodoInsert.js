import { Button } from "antd";
import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";

// 아이콘 가지고 올 이름
// io IoMdAddCircleOutline
// css

const TodoInsert = () => {
  return (
    <form>
      <input placeholder="Todo 입력해주세요" />
      <Button type="primary">
        <IoMdAddCircleOutline />
      </Button>
    </form>
  );
};

export default TodoInsert;
