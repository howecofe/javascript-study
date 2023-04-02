// 7. 날짜 관련 함수들 Date
// UTC 기준 (협정 세계시, 1970년 1월 1일 UTC 자정과의 시간 차이를 밀리초 단위로 표기)
console.log(new Date());
console.log(new Date('Apr 2, 2023'));
console.log(new Date('2023-04-02T03:24:00'));

console.log(Date.now()); // 밀리초 단위
console.log(Date.parse('2023-04-02T03:24:00')); // 밀리초 단위

const now = new Date();
now.setFullYear(2024);
now.setMonth(10); // 0: 1월
console.log(now.getFullYear());
console.log(now.getDate()); // 0: 1일
console.log(now.getDay()); // 0: 일요일부터 1 ... 6: 토요일
console.log(now.getTime());
console.log(now);

console.log(now.toString());
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toISOString()); // ISO 8601 형식
console.log(now.toLocaleString('en-US'));
console.log(now.toLocaleString('ko-KR'));
