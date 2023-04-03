// 1. 이터러블 살펴보기
// Iterable하다는 건! 순회가 가능하다는 거지!
// [Symbol.iterator](): Iterator;
// 심볼정의를 가진 객체나, 특정한 함수가 Iterator를 리턴한다는 것은
// 순회 가능한 객체이다 라는 걸 알 수 있음
// 순회가 가능하면 무엇을 할 수 있나? for..of, spread
const array = [1, 2, 3];
for (const item of array) {
  console.log(item);
}
// object는 Iterator 가지고 있지 않음 = iteration 규격사항을 따르지 않음.
// TypeError: obj is not iterable. 대신 in 연산자 사용 가능.
const obj = { 0: 1, 1: 2 };
for (const item in obj) {
  // for..in: key를 출력
  console.log(item);
}

for (const item of array.values()) {
  console.log(item);
}

for (const item of array.keys()) {
  console.log(item);
}

for (const item of array.entries()) {
  console.log(item);
}

console.clear();

// 이터러블 자세히 뜯어보기 🔍
const iterator = array.values();
// console.log(iterator.next()); // { value: 1, done: false } value: 값, done: 반복이 끝났는지 여부 (마지막 값인지)
// console.log(iterator.next().value); // 2
// console.log(iterator.next().value); // 3
// console.log(iterator.next().value); // undefined
// console.log(iterator.next().done); // true

while (true) {
  const item = iterator.next();
  if (item.done) break;
  console.log(item.value);
}
