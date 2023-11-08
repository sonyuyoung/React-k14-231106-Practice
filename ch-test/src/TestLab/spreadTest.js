//state 에서 업데이트시 주의사항
const obj1 = { a: 1, b: 2, c: 3 };
const nextObj1 = { ...obj1, d: 4 };
for (const nextObj1 in obj1) {
  console.log("복사본의값 :" + nextObj1.d);
}

// ... spread 연산자를 이용해서 , 사본 만들기
// 복사본을 만들어서 d값 덮어쓰기

const array = [
  { id: 1, value: true },
  { id: 2, value: true },
  { id: 3, value: true },
];
//내장함수 concat ,filter , map
let nextArr = array.concat({ id: 4, value: false });
nextArr.filter((item) => item.id !== 2);

// filter , (item) => item.id !== 2 . 2값 제거
// 배열에서 각 요소를 하나씩 꺼내서 item 에 담아서 확인
// item id 2제거 ?
let nextArr2 = nextArr.filter((item) => item.id !== 2);
//map item.id === 1 -> 이면 value 값 false 값 변경.
let nextArr3 = nextArr.map((item) =>
  item.id === 1 ? { ...item, value: false } : item
);

// 출력 걸어두기.
for (let i = 0; i < nextArr.length; i++) {
  console.log(
    "concat확인.nextArr:",
    nextArr[i] + "key: " + nextArr[i].id + " , value: " + nextArr[i].value
  );
}
console.log("==============================");
// 출력 걸어두기.
for (let i = 0; i < nextArr2.length; i++) {
  console.log(
    "filter확인 . nextArr2: " +
      nextArr2[i] +
      "key: " +
      nextArr2[i].id +
      " , value: " +
      nextArr2[i].value
  );
}

console.log("==============================");
// 출력 걸어두기2
for (let i = 0; i < nextArr3.length; i++) {
  console.log(
    "map 확인. nextArr3: " +
      nextArr3[i] +
      "key: " +
      nextArr3[i].id +
      " , value: " +
      nextArr3[i].value
  );
}
