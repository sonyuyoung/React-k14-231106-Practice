//화살표 함수와 일반 함수 차이점 확인해보기
//setTimeout

//두번째 매개변수에는 : 특정시간이 들어감
// 첫매개변수에는
// 특정 시간후에 콜백 함수가 동작한다 , ms 3000ms : 3초
setTimeout(() => {
  console.log("화살표함수테스트 setTimeout");
}, 3000);

setTimeout(function test() {
  console.log("일반함수테스트 setTimeout");
}, 2000);

//차이점 : 일반/화살표 가리키는 this의 영향권 .

function testDog() {
  this.name = "멍멍이";
  return {
    name: "멍멍이2",
    sound: function () {
      console.log(this.name + " 멍멍!"); //출력 멍멍이2멍멍!
    },
  };
}
// 실행테스트
// const testdog = new testDog();
// testdog.sound();

// 결론 : 일반함수는 this 의영향권이 자신이 종속된(속해있는) 객체를 가리킴

// 화살표 함수
// testDog2
function testDog2() {
  this.name = "멍멍이";
  return {
    name: "멍멍이2",
    sound: () => console.log(this.name + " 멍멍!"), //멍멍이 멍멍!
  };
}
// 실행테스트
const testdog2 = new testDog2();
testdog2.sound();
// 화살표 함수는 this 의영향권이(전체함수에) 종속된 인스턴스(?)를 가르킴
