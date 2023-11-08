import PropTypes from "prop-types";
import React, { Component } from "react";

//rcc +tab

class MyCompPublicFuntion extends Component {
  render() {
    // 한방에 꺼내오겠음 (비구조화 할당문법)
    const { name, password, children } = this.props;
    return (
      <div>
        <h1>테스트 props 객체 안에 속성들중에 Name만 받아오기,{name}</h1>
        <h1>테스트 props 객체 안에 속성들중에 password 받아오기,{password}</h1>
        <h2>테스트 props 객체 안에 속성들중에 child 받아오기 ,{children}</h2>
      </div>
    );
  }
}
// props 기본값 정하기
MyCompPublicFuntion.defaultProps = {
  //   name: "기본이름",
  password: "기본 1234",
};
// props 타입 확인
// arry , arrayOf
MyCompPublicFuntion.propTypes = {
  name: PropTypes.string.isRequired,
  password: PropTypes.string,
};
export default MyCompPublicFuntion;
