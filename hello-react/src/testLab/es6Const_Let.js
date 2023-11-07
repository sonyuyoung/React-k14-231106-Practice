// es6 ,const , let 비교해보기

function test() {
  var a = "hello";
  if (true) {
    var a = "hi";
    console.log(a); // hi -- 같은 블럭이니까
  }
  console.log(a); //
}

function test2() {
  let a = "hello";
  if (true) {
    let a = "hi";
    console.log(a); // hi -- 같은 블럭이니까
  }
  console.log(a); //
}

test();
test2();
