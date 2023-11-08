import logo from "./logo.svg";
import "./App.css";
// 자식 컴포넌트 요소
import Join from "./component/Join";
import Main from "./component/Main";
import { Button, Space, DatePicker, version } from "antd";
// 페이지 이동을 위한 설정 1
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyCount from "./component/MyCount";
import RefPracticeScrollTest from "./ch_5_component/RefPracticeScrollTest";
import DataListKeyAddDelTest from "./ch6_component/DataListKeyAddDelTest";

function App() {
  return (
    // 페이지 이동을 위한 설정 2. 전체 요소를
    //BrowserRouter 로 감싸기.
    // 구성요소는 Routes -> Route 로 구성할 예정.
    <BrowserRouter>
      <Routes>
        {/* 메인으로 사용할(index->주소에서 : / ) 페이지를 App 또는 Main.js 로 해도 됨 */}
        <Route index element={<Main />} />
        {/* 주소: http://localhost:3000/join -> 해당 페이지 안내 : element={<이동할 컴포넌트>} */}
        <Route path="join" element={<Join />} />

        <Route path="scrollRefTest" element={<RefPracticeScrollTest />} />
        <Route path="mycount" element={<MyCount />}></Route>
        <Route path="listKeyDataAddDel" element={<DataListKeyAddDelTest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
