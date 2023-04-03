// 3. Nullish Coalescing Operator 널체크 하는 깔끔한 법
// ES11 (ECMAScript 2020)
// ?? : null, undefined
// || : falshy한 경우 설정 (할당)

let num = 0;
console.log(num || '-1'); // -1 why? 0이 falshy 하니까.
console.log(num ?? '-1'); // 0, null, undefined인 경우에 -1 출력
