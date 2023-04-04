export let count = 0;
// export default : 모듈에서 하나만 노출할 때 사용
// export default function increase() {
//   count++;
//   console.log(count);
// }

export function increase() {
  count++;
  console.log(count);
}

export function getCount() {
  return count;
}
