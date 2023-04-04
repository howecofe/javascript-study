// 4. 모듈
// import { increase as increase1 } from './counter.js';
// import { increase, getCount } from './counter.js';
import * as counter from './counter.js'; // 그룹화

// console.log(count);
counter.increase();
// console.log(count);
// count = -10;
// console.log(count);

counter.increase();
counter.increase();
const count = counter.getCount();
console.log(count);
