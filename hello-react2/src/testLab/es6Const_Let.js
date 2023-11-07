// es6 , const, let  비교해보기.
// 문제점 제시.
function test() {
  var a = "hello";
  if (true) {
    var a = "hi";
    console.log(a); // a가 뭐가 출력될까.? hi
  }
  console.log(a); // a가 뭐가 출력될까.? hi
}

function test2() {
  let a = "hello";
  if (true) {
    let a = "hi";
    console.log(a); // a가 뭐가 출력될까.? hi
  }
  console.log(a); // a가 뭐가 출력될까.? hello
}

// 함수 사용하기.
//test();
test2();
