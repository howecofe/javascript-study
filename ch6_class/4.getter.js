// 4. 게터와 세터
// 접근자 프로퍼티 (Accessor Property)
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  // 속성의 한 부분이라 생각되는 함수에 get을 붙이면 속성에 접근하듯 호출 가능
  get fullName() {
    return `${this.lastName} ${this.firstName}`;
  }

  set fullName(value) {
    console.log('set', value);
  }
}

const student = new Student('greta', 'lee');
student.firstName = 'anna';
console.log(student.firstName);
console.log(student.fullName);
student.fullName = '김철수';
