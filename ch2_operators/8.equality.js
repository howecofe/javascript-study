// 8. 동등 비교 관계 연산자 (Equality operators)
// == 값이 같음
// != 값이 다름
// === 값과 타입이 둘다 같음
// !=== 값과 타입이 다름
console.log(2 == 2);
console.log(2 != 2);
console.log(2 != 3);
console.log(2 == 3);
console.log(2 == '2'); // true 타입은 달라도 값이 같음
console.log(2 === '2'); // false 타입이 다름
console.log(true == 1); // true
console.log(true === 1); // false
console.log(false == 0); // true
console.log(false === 0); // false
console.clear();

const obj1 = {
  name: 'js',
};

const obj2 = {
  name: 'js',
};

console.log(obj1 == obj2); // false 참조값(메모리 주소)이 다름
console.log(obj1 === obj2); // false 타입은 같아도 값이 다름
console.log(obj1.name == obj2.name); // true
console.log(obj1.name === obj2.name); // true

let obj3 = obj2; // 동일한 참조값(메모리 주소)
console.log(obj3 == obj2); // true
console.log(obj3 === obj2); // true
