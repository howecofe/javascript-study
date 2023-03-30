// 8. 불변성 (Immutability; unchangable)
// 함수 내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 정말 좋지 않다.
// 상태 변경이 필요한 경우에는, 새로운 상태를(오브젝트, 값) 만들어서 반환해야 함!!
// 원시값(단일값) - 값에 의한 복사
// 객체값 - 참조에 의한 복사 (메모리 주소)
function display(num) {
  num = 5; // ❌
  console.log(num);
}
const value = 4;
display(value);
console.log(value);

function displayObj(obj) {
  obj.name = 'Bob'; // ❌❌❌❌❌❌❌ 외부로부터 주어진 인자(오브젝트)를 내부에서 변경 ❌
  console.log(obj);
}
const greta = { name: 'Greta' };
displayObj(greta);
console.log(greta); // 값 Bob으로 변경됨

// 함수 이름부터 변경하는 느낌을 주도록!
function changeName(obj) {
  return { ...obj, name: 'Bob' }; // 반환할 때는 새로운 오브젝트 만들기!! 기존의 오브젝트 유지하면서 필요한 값만 변경
}
