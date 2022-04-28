
function makeLine() {
    console.log(`============================================================`);
}

// 원의 넓이를 구해야 함. : pi * r ** 2
var pi = 3.14159265;

// 반지름이 5인 원의넓이
var circle1 = pi * 5 ** 2;

// ~~~ 200줄 코드 ~~~

// 반지름이 17인 원의 넓이
var circle2 = pi * 17 * 2; // 실수로 제곱을 곱하기를 넣을 수도 있다.

// 원의 넓이를 구해주는 함수 정의

function calcAreaCircle(r) {
       return pi * r **2 ;
}

var result1 = calcAreaCircle(5);
console.log(result1);

var result1 = calcAreaCircle(17);
console.log(result1);