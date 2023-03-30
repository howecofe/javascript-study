// 6. null, undefined 타입
let variable;
console.log(variable); // undefined : 값이 정의되지 않은 상태 (메모리상에 X)

variable = null;
console.log(variable); // null : 명시적으로 값이 null(값이 비어있음) (메모리상에 null이라는 object로 올라감)

let activateItem; // 아직 활성화된 아이템이 있는지 없는지 모르는 상태!
activateItem = null; // 활성화된 아이템이 없는 상태!

console.log(typeof 123); // number
console.log(typeof undefined); // undefined
console.log(typeof null); // object
