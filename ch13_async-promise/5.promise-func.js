// 5. 프로미스 함수들
function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`);
}

function getChicken() {
  return Promise.reject(new Error('치킨을 가지고 올 수 없음!'));
  //   return Promise.resolve(`🪴 => 🐔`);
}

fetchEgg('🐔') //
  .then((egg) => console.log(egg));

getChicken()
  .catch((error) => {
    console.log(error.name);
    return '🐔';
  })
  .then((chicken) => fetchEgg(chicken))
  .then((egg) => fryEgg(egg))
  .then((friedEgg) => console.log(friedEgg));

// 더 깔끔하게 리팩토링
getChicken()
  .catch(() => '🐔')
  .then(fetchEgg)
  .then(fryEgg)
  .then(console.log);
