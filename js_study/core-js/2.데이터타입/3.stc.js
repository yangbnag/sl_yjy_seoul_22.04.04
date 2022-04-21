
//논리 타입 (boolean)
var logic = 10 >5;
console.log(typeof logic);

var x = true; //True (x)
var y = false; //False (x)

var m ='true' // string

//undefined 타입 -> 값 : undefinde
//변수를 선언만 하고 초기화 하지 않은 경우

var fruit = '';
console.log(fruit);

//null 타입 > 값 : null
//개발자가 의도를 가지고 값이 아예 없음을 표현

var apple = '사과'; // 변수는 살리고 싶으나 값은 비우고 싶을 때
apple = null;

var money = 50000;
money = null;

console.log(apple, money);
