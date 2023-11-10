import logo from "./logo.svg";
import "./App.css";
import Join from "./component/Join";
import Login from "./component/Login";
import Main1 from "./component/Main1";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UseState from "./component/ch8_hooks/UseState";
import UseEffect from "./component/ch8_hooks/UseEffect";
import CountUseReducer from "./component/ch8_hooks/CountUseReducer";
import InfoUseReducer from "./component/ch8_hooks/InfoUseReducer";
import AverageUserMemo from "./component/ch8_hooks/AverageUserMemo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 메인으로 사용할(index->주소에서 : / ) 페이지를 App 또는 Main.js 로 해도 됨 */}
        <Route index element={<Main1 />} />
        {/* 주소: http://localhost:3000/join -> 해당 페이지 안내 : element={<이동할 컴포넌트>} */}
        <Route path="join1" element={<Join />} />
        <Route path="login1" element={<Login />} />
        <Route path="useStateTest" element={<UseState />} />
        <Route path="useEffectTest" element={<UseEffect />} />
        <Route path="useReducerTest" element={<CountUseReducer />} />
        <Route path="useInfoReducerTest" element={<InfoUseReducer />} />
        <Route path="averageUserMemo" element={<AverageUserMemo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
