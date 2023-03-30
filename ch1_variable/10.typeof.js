// 10. 타입 확인 법 (typeof)
// typeof: 데이터 타입을 확인하는 연산자
// 값을 타입문자열로 반환

// JS: dynamic, weakly typed programming language!
// 자바스크립트에도 타입이 있다! 다만 타입이 동적으로 결정된다.
// == 어떤 값을 할당하느냐에 따라 타입이 달라진다.
let variable;
console.log(typeof variable);

variable = '';
console.log(typeof variable);

variable = 123; // <- 할당된 값에 따라 타입이 결정됨!
console.log(typeof variable);

variable = {};
console.log(typeof variable);

variable = function () {};
console.log(typeof variable);

variable = Symbol();
console.log(typeof variable);

console.log(typeof 123);
console.log(typeof '123');
