// 외부 js 파일 로딩
// import {x,hello} from './park.js';

import * as k from './kim.mjs';
import * as p from './park.mjs';



// app.js 메인파일

const $box = document.querySelector('.box');
console.log($box);

$box.textContent = '안녕';

//////////////////

console.log(k.x);
console.log(p.x);

k.hello();
p.hello();