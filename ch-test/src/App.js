import logo from "./logo.svg";
import "./App.css";
import FuncComponentTest from "./components/funccomponenttest";
import ClassComponentTest from "./components/ClassComponentTest";
import Test from "./components/Test";
import MyComp from "./components/MyComp";
import MyCompPublicFuntion from "./components/MyCompPublicFuntion";
import Count from "./components/Count";
import MyCount from "./components/MyCount";
import MySay from "./components/MySay";

// 부모임니다
function App() {
  return (
    <>
      <MySay></MySay>
      <FuncComponentTest />
      <ClassComponentTest />
      <Test />
      {/*자식 컴포넌트엣게 props 라는 속성객체를 이용해서 이름을 전달할거임  */}
      {/* <MyComp name="영이" password="1234" /> */}
      {/* 기본값 전달하기 부모컴포넌트에서 props 설정이 없을때   */}
      {/* <MyComp /> */}
      {/* <MyComp> 여기값이 자식 속성임</MyComp> */}
      {/* <MyComp name="영이" password="12345678">
        영이 어린이
      </MyComp> */}
      {/* props 타입 확인하기  */}
      {/* <MyComp name={"1111"} password="12345678">
        영이 어린이
      </MyComp> */}

      {/* <MyCompPublicFuntion password="12345678">
        MyCompPublicFuntion
      </MyCompPublicFuntion> */}
      {/* <Count /> */}
      <MyCount></MyCount>
    </>
  );
}

export default App;
