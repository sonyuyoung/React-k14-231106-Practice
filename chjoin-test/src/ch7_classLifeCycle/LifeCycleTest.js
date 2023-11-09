// 클래스형 컴포넌트
//rcc
import React, { Component } from "react";

class LifeCycleTest extends Component {
  // 클래스형 컴포넌트에 사용되는 초깃값 세팅 모양.
  // 함수형 컴포넌트 비교
  // 생명주기를 알아보기 위한 예제코드
  // 리액트 다루는 기술 저자 , 김민준, velopert 검색하시면,
  // 관련 문서 엄청 많고, 정리도 매우 깔끔 , 추천.!
  // const [ number, setNumber] = useState(0)
  state = {
    number: 0,
    color: null,
  };
  // useRef 처럼, 특정의 태그 요소에 접근하기 위한 도구로 사용.
  // 예) 웹, document.getElementById
  // 예) 앱, findByViewId ,
  // 메서드 이름이 틀릴수 있음.
  myRef = null;

  //생성자 호출, 생명주기 1번째
  constructor(props) {
    // 클래스가 혼자 동작 못하고, 반드시 누군가 부모를 상속받아야함.
    // 부모를 초기화 해주기
    super(props);
    console.log("constructor 호출");
  }

  // 생명주기 2번째, getDerivedStateFromProps
  // 마운트 호출, 업데이트 호출. -> 변경시 비교를 함.
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("2번째 호출 : getDerivedStateFromProps");
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }

  //4번째 호출 : 마운트가 완료되었요.
  componentDidMount() {
    console.log("4번째 호출 : 마운트가 완료되었요. ");
  }

  //업데이트 변경을 할까요?
  shouldComponentUpdate(nextProps, nextState) {
    console.log("2번째 호출 : shouldComponentUpdate 호출. ");
  }

  // 업데이트 완료가 되었다.
  componentDidUpdate() {
    console.log("5번째 호출 : 업데이트가 완료되었요. ");
  }

  //3번째 호출 : 마운트 트리, 화면에 그려주는 역할 함수.
  render() {
    return <div></div>;
  }
}

export default LifeCycleTest;
