//state test 컴포넌트
//클래스형 컴포넌트 구조먼저
//가볍기
//구현부는 거의 동일
//rcc
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/test.css";

// 기본적으로 props를 전달하기위해
// 부모 클래스인 Componet 초기화를 함께 진행ls
class Count extends Component {
  constructor(props) {
    super(props);
    // state 초기값 설정
    this.state = {
      number: 0,
      anotherNumber: 0,
    };
  }
  render() {
    const { number, anotherNumber } = this.state;
    return (
      <div>
        <h1> {number} </h1>
        <h2>다른 숫자 : {anotherNumber}</h2>

        <button
          class="btn btn-primary"
          onClick={() => {
            this.setState({ number: number + 1 });
            // this.setState({ number: this.state.number + 1 });
            // 한번 클릭 씩 , 값이 2개가 증가하도록 설정.
            // 안되는 문제점 확인. (동작여부.)
            // 바로 반영이 안되는 문제점.
            // 해결책으로 , 객체 대신에 여기에 함수로 대체함.
            // this.setState({ number: this.state.number + 1 });
            // 해결책
            this.setState(
              (prevState) => {
                return {
                  number: prevState.number + 1,
                };
                //state 값 변경 후, 특정 함수 호출 하기.
              },
              () => {
                console.log("state 값 변경후 , 함수 호출했어요.");
              }
            );
          }}
        >
          +1
        </button>

        <button
          class="btn btn-success"
          onClick={() => {
            this.setState({ number: number - 1 });
          }}
        >
          {" "}
          -1{" "}
        </button>
      </div>
    );
  }
}

export default Count;
