/*
 콘솔창에 배열의 요소들을 순회하여
---
월요일
화요일
...
일요일
---
을 출력하세요 (for-of문, for문 둘다 만들어보세요.)
*/
/*

var dayOfWeeks = ['월', '화', '수', '목', '금', '토', '일'];
var goodDay='';
/*
for(var f of dayOfWeeks){
    goodDay += (`${f}요일\n`);
}
console.log(goodDay);
 */
/*
for(var i=0; i < dayOfWeeks.length; i++) {
    goodDay += (`${dayOfWeeks[i]}요일\n`);
}

console.log(goodDay);
*/
/*
console.log(`===============================================`);
/* 배열의 요소들을 순회하여
- 짜장면과 짬뽕과 볶음밥과 마라탕과 탕수육!!
이라는 문장을 완성해서 출력 하세요.
*/

var foods =['짜장면', '짬뽕', '볶음밥', '마라탕', '탕수육'];
var china ='';

for(var i=0; i<foods.length; i++){
    if(i<(foods.length-1))
    china += (`${foods[i]}과 \t`);
    else{
        china += (`${foods[i]}!!`);
    }
}
console.log(china);



/*
    콘솔창에 배열의 요소들을 순회하여
    -----
    월요일
    화요일
    ...
    일요일
    -----
    을 출력하세요 (for-of문, for문 둘다 만들어보세요)
*/

/*

var dayOfWeeks = ['월', '화', '수', '목', '금', '토', '일'];

for (var i = 0; i < dayOfWeeks.length; i++) {
    console.log(`${dayOfWeeks[i]}요일`);
}
console.log('===========================');

for (var day of dayOfWeeks) {
    console.log(`${day}요일`);
}
console.log('===========================');


/*
    배열의 요소들을 순회하여

    - 짜장면과 짬뽕과 볶음밥과 마라탕과 탕수육!!

     이라는 문장을 완성해서 출력하세요.
*/
/*

var foods = ['짜장면', '짬뽕', '볶음밥', '마라탕', '탕수육'];

var message = '';
for (var i = 0; i < foods.length; i++) {
    if (i === foods.length - 1) {
        message += `${foods[i]}!!`;
    } else {
        message += `${foods[i]}과 `;
    }
}
console.log(message);
*/