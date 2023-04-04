// 1. 자바스크립트 실행 순서 (콜스택)
// 자바스크립트는 기본적으로 동기적 실행
function a() {
  for (let i = 0; i < 1000000000; i++) {}
  return 1;
}

function b() {
  return a() + 1;
}

function c() {
  return b() + 1;
}

console.log('시작했다!');
const result = c();
console.log(result);
