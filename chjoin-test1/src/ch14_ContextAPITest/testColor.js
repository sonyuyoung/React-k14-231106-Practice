// 전역으로 사용할 예제 속성추가
// 내보내기 하기
import { createContext } from "react";

// 속성 예시를 만들자!
// 키값은 color : 벨류는 blue
const ColorContext = createContext({ color: "blue" });
// 내보내기

export default ColorContext;
