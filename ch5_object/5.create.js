// 5. 생성자 함수

// const apple = {
//   name: 'apple',
//   display: function () {
//     console.log(`${this.name}: 🍎`); // 객체 안에서 자신에게 접근할 때 this 사용
//   },
// };

// const orange = {
//   name: 'orange',
//   display: function () {
//     console.log(`${this.name}: 🍊`); // 객체 안에서 자신에게 접근할 때 this 사용
//   },
// };

// 생성자 함수
function Fruit(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
  // return this; // 생략 가능
}

const apple = new Fruit('apple', '🍎');
const orange = new Fruit('orange', '🍊');

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(apple.emoji);
apple.display();
