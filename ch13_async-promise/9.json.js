// 9. JSON 이란?
// JSON : JavaScript Object Notation
// 서버와 클라이언트(브라우저, 모바일) 간의 HTTP 통신을 위한 오브젝트 형태의 텍스트 포맷
// stringfy(object): JSON
// parse(JSON): object
const greta = {
  name: 'greta',
  age: 20,
  eat: () => {
    console.log('eat');
  },
};

// 직렬화 Serializing: 객체를 문자열로 변환
const json = JSON.stringify(greta); // object -> json 변환
console.log(greta);
console.log(json); // eat 함수는 json에 포함 X. json에 포함되는 데이터는 객체의 프로퍼티, 상태 데이터만 포함.

// 역직렬화 Deserializing: 문자열 데이터를 자바스크립트 객체로 변환
const obj = JSON.parse(json); // json -> object 변환
console.log(obj);
