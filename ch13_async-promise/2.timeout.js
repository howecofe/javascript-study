// 2. 콜백 비동기 사용해 보기
function execute() {
  console.log('1');
  setTimeout(() => {
    console.log('2');
  }, 2000);
  console.log('3');
}
execute();
