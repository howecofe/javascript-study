// 3. 필드
// 접근제어자 - 캡슐화(내부의 데이터를 외부에서 변경할 수 없도록 은닉)
// private(#), public(default), protected
class Fruit {
  #name;
  #emoji;
  #type = '과일';
  constructor(name, emoji) {
    this.#name = name;
    this.#emoji = emoji;
  }
  #display = () => {
    console.log(`${this.#name}: ${this.#emoji}`);
  };
}

const apple = new Fruit('apple', '🍎');
// apple.#name = '오렌지'; // #field는 외부에서 접근이 불가능
console.log(apple); // #filed 정보가 출력되지 않음
