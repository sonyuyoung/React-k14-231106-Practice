import logo from "./logo.svg";
import "./App.css";
import { Button, Space, DatePicker, version } from "antd";
// 페이지 이동을 위한 설정 1
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Main />} />

          <Route path="/mainBook" element={<MainBooks />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
