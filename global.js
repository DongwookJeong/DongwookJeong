// let a = {
//   b: 'hello'
//   // ? 지역변수처럼 취급
// }

// console.log(a.b);


// ////////////////////////////////////////////////////////////////


// var a = "hello";
// let b = "bye";

// console.log(a);
// console.log(b);

// var a = "저리가";
// b = 1234;
// console.log(a);
// console.log(b);

// const d = "hand cream";
// console.log(d);
// d = "bu";
// console.log(d);
// // ? var를 사용하면 에러가 나지를 않아서 획일화시킨다.
// var는 '재선언'이 가능하다.
// > 에러를 안내는 방식 채택
// > 최초에는 굳이 에러를 내지 않아도 됐기 때문
// > 설계할때 의도하고 만든 선언 방식
// let "재선언" 불가능 = 개발자들을 위해서 만들어짐

// var, let의 공통점 : 재할당은 가능하다.
// 재선언과 재할당은 구분할것

// 변할 것은 지역변수로 활용
// 활용할 것 const "변하지 않게 사용"
// 전역 : 어디서든지 사용할 것 const
// for()간단하게 임시로 사용 : let을 쓴다.

// 변수 : variable
// 상수 : Constant
// 무조건 상수 : 우리가 작성하는 것들은 사람이 결정했기 때문에
// 변수 사용 빈도 체감 98%