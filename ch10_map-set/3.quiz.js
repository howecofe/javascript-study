// 3. 퀴즈
// 1) 주어진 배열에서 중복을 제거하라.
const fruits = ['🍌', '🍎', '🍇', '🍌', '🍎', '🍑'];
// 결과: ['🍌', '🍎', '🍇', '🍑']
function removeDuplication(array) {
  return [...new Set(array)];
}
console.log(removeDuplication(fruits));

// 2) 주어진 두 세트의 공통된 아이템만 담고 있는 세트 만들어라.
const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([1, 2, 3]);

const result = new Set(set1, set2);
function findIntersection(set1, set2) {
  return new Set([...set1].filter((item) => set2.has(item)));
}
console.log(findIntersection(set1, set2));
