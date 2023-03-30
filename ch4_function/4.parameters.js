// 4. 인자
// 매개변수의 기본값은 무조건 undefined
// 매개변수의 정보는 함수 내부에서 접근 가능한 arguments 객체에 저장
// 매개변수 기본값 Default Parameter a = 1, b = 1 처럼 지정

// 파라미터 기본값 전달
function add(a = 1, b = 1) {
  console.log(a);
  console.log(b);
  console.log(arguments);
  console.log(arguments[0]);
  return a + b;
}
add();

// Rest 매개변수 Rest Parameters
// 인자의 수가 정해져있지 않을 때 배열로 받음.
function sum(a, b, ...numbers) {
  console.log(a);
  console.log(b);
  console.log(numbers);
}
sum(1, 2, 3, 4, 5, 6, 7, 8);
