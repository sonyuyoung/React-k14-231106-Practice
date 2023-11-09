// useMemo,
// : 메모 뭔가를 기록하는데, 컴포넌트 내부에서 발생하는 연산 최적화하는 방법.
// 예) 오래 걸리는 연산을 메모 했다가, 나중에 다시 재사용하고, 변경이 발생하면
// 그 때 다시 업데이트를 한다.
// 예) 평균을 구하는 내용으로
// 메모
// 내장함수 ,concat, filter, map, 이어서 reduce , 새로운 배열을 생성.
// 정의
// 배열.reduce(콜백 함수, 초깃값)
// 만약, 초깃값을 생략시, 배열의 첫번재 요소를 사용.

// 예)
// array = [1,2,3,4,5]
// array.reduce((a,b) => a+b,0)
// 의 결과값은 -> 15
// a : 누산기,(누적된값)
// a : 0 , b : 1 => 1
// a : 1 , b : 2 => 3
// a : 3 , b : 3 => 6
// a : 6 , b : 4 => 10
// a : 10 , b : 5 => 15
import { Button } from "antd";
import React, { useState } from "react";

//샘플 함수 : 특정 연산하는 과정을 샘플로 만들고,
// useMemo 사용하기 전과 후의 과정을 보기.
const doAverage = (numbers) => {
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const AverageUseMemoTest = () => {
  // 숫자들을 담을 임시배열
  const [list, setList] = useState([]);
  // 숫자 타입 문자열, 연산시 정수로 변환 필요.
  const [number, setNumber] = useState("");

  // 이벤트 핸들러 추가
  const onChange = (e) => {
    setNumber(e.targer.value);
  };

  // 숫자 추가하기.
  const onInsert = (e) => {
    // 문자열 -> 정수 변환 -> 리스트에 추가해서 => 새로운 배열 생성.
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
  };

  return (
    <div>
      <input value={number} onChange={onChange} />
      <Button onClick={onInsert}>등록하기 </Button>
      {/* 리액트 리스트 출력시, 키가 의무적으로 설정 주의하기. */}
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      {/* 연산의 결과  */}
      <div>평균값 : {doAverage(list)}</div>
    </div>
  );
};

export default AverageUseMemoTest;
