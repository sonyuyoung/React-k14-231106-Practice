import logo from "./logo.svg";
import "./App.css";
import FuncComponentTest from "./components/funccomponenttest";
import ClassComponentTest from "./components/ClassComponentTest";
import Test from "./components/Test";
import MyComp from "./components/MyComp";
// 부모임니다
function App() {
  return (
    <>
      <FuncComponentTest />
      <ClassComponentTest />
      <Test />
      {/*자식 컴포넌트엣게 props 라는 속성객체를 이용해서 이름을 전달할거임  */}
      {/* <MyComp name="영이" password="1234" /> */}
      {/* 기본값 전달하기 부모컴포넌트에서 props 설정이 없을때   */}
      {/* <MyComp /> */}
      <MyComp> 여기값이 자식 속성임</MyComp>
    </>
  );
}

export default App;
