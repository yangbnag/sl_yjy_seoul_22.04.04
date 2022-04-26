
// 문자 타입으로 암묵적 변환
var ex1 = 10+'20' // 암묵적 형변환 10이 문자로 변환
console.log(typeof ex1);
console.log(ex1);

var ex2 = '' + 300; 
console.log(typeof ex2); // 300이 문자로 변환

var ex3 = false + '';

console.log(`ex3 type : ${typeof ex3}`); // 논리값이 문자로 변환

/* 다른 type + 문자를 하면 다른 type이 문자로 변환 됨.*/

var ex4 = 'hello' + 10 + 20 ; // hello1020
var ex5 = 'hello' + (10 + 20) ; // hello30
console.log(`ex4 type : ${typeof ex4}`); // 숫자타입의 문자변환

// 숫자타입으로 암묵적 변환

var ex6 = 10-'7';
console.log(`ex6 : ${ex6}`); // 문자 7의 숫자변환

var ex7 = 50*'3';
console.log(`ex7 : ${ex7}`); // 문자 3의 숫자변환

var ex7_1 = '50'*'3';
console.log(`ex7 : ${ex7_1}`); // 문자 50과 3의 숫자변환

console.log('========================================'); //+prompt 가 숫자로 입력받는 원리
console.log(+'');
console.log(+'100');
console.log(+true);
console.log(+false); 
console.log(+null); 

