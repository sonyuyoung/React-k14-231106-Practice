const obj1 = { a: 1, b: 2, c: 3 };
const nextObj1 = { ...obj1, d: 4 };
for (const key in obj1) {
  console.log("복사본의 값: " + nextObj1[key]);
}
// ... spread 연산자를 이용해서, 사본 만들기.
// 복사본을 만들어서 d값만 덮어쓰기.

console.log("==============================");
// 배열
const array = [
  { id: 1, value: true },
  { id: 2, value: true },
  { id: 3, value: true },
];

// 내장함수, concat, filter, map 소개.
let nextArr = array.concat({ id: 4, value: false });

// filter , (item) => item.id !== 2 . 2값 제거
let nextArr2 = nextArr.filter((item) => item.id !== 2);

//map item.id === 1 -> 이면 value 값 false 값 변경.
let nextArr3 = nextArr.map((item) =>
  item.id === 1 ? { ...item, value: false } : item
);

// 출력 걸어두기.
for (let i = 0; i < nextArr2.length; i++) {
  console.log(nextArr2[i]);
}

console.log("==============================");
// 출력 걸어두기2
for (let i = 0; i < nextArr3.length; i++) {
  console.log(nextArr3[i]);
}
