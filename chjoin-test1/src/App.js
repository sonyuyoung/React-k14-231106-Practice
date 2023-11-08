import "./App.css";
import { Button, Space, DatePicker, version } from "antd";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// 자식 컴포넌트요소
import Join from "./component/Join";
import Main from "./component/Main";

{
  /* antd 튜토리얼 샘플 가져오기 테스트 */
}
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 메인으로 사용할 주소 */}
        <Route index element={<Main />} />
        {/* 메인에서 추가했던 join */}
        <Route path="join" element={<Join />}></Route>
        {/* 주소: http://localhost:3000/join-> 이동할 컴포넌트 element={<Join />} : 진짜 Join.js */}
      </Routes>

      <div className="App">
        <header className="App-header">
          {/* antd 튜토리얼 샘플 가져오기 테스트 */}

          <Space>
            <DatePicker />
            <Button type="primary">Primary Button</Button>
          </Space>

          <Join />
        </header>
      </div>
    </BrowserRouter>
  );
}
export default App;
