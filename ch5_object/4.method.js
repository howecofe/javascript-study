// 4. 객체 안의 함수
const apple = {
  name: 'apple',
  display: function () {
    console.log(`${this.name}: 🍎`); // 객체 안에서 자신에게 접근할 때 this 사용
  },
};

apple.display();
