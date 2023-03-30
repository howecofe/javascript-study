// 3. 퀴즈!
let num = 2;
// 문제: num의 숫자가 짝수이면 👍, 홀수라면 👎을 출력하도록
// 1) if 사용
if (num % 2 === 0) {
  console.log('👍');
} else {
  console.log('👎');
}

// 2) ternary 사용
let emoji = num % 2 === 0 ? '👍' : '👎';
console.log(emoji);
