
var num1 = +prompt('2개의 정수를 입력하세요.');
var num2 = +prompt('2개의 정수를 입력하세요.');

var gap = (num1-num2);

if (gap >0){
alert(`두 값의 차이는 ${gap}입니다.`)}
else{
alert (`두 값의 차이는 ${gap*-1}입니다.`)}


/*
var a = +prompt('정수 A');
var b = +prompt('정수 B');

//풀이1

//두 값의 차이를 구한다.
var diff = a - b;
if (a < b) {
    diff = -diff;
}


//풀이 2
var diff = (a > b) ? a - b : b - a;

alert(`두 값의 차이는 ${diff}입니다.`);
*/