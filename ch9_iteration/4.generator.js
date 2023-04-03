// 4. 제너레이터란? 값 생성기!

// const multiple = {
//     [Symbol.iterator]() {
//       const max = 10;
//       let num = 0;
//       return {
//         next() {
//           return { value: num++ * 2, done: num > max };
//         },
//       };
//     },
//   };

function* multipleGenerator() {
  try {
    for (let i = 0; i < 10; i++) {
      console.log(i);
      yield i ** 2; // next() 호출 시까지 기다렸다가, next() 호출하면 반복
    }
  } catch (error) {
    console.log(error);
  }
}

const multiple = multipleGenerator();
let next = multiple.next();
console.log(next.value, next.done);

// multiple.return(); // generator가 끝남.
multiple.throw('Error!');

next = multiple.next();
console.log(next.value, next.done);
