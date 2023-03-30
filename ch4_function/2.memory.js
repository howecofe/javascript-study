// 2. 함수와 메모리
function add(a, b) {
  console.log(a);
  console.log(b);
  return a + b;
}
const sum = add; // 함수의 메모리 주소 복사

console.log(sum(1, 2));
console.log(add(1, 2));
