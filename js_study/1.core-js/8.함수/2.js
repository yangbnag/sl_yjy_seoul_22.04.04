function makeLine() {
    console.log('===============================');
}

makeLine();

//원의 넓이를 구해야 함. : pi * r ** 2
var pi = 3.14159265;

// 반지름이 5인 원의 넓이
var circle1 = pi * 5 ** 2;

//반지름이 17인 원의 넓이

var circle2 = pi * 17 ** 2;

// 원의 넓이를 구해주는 함수 정의

function clacAreaCircle(r) {
    return pi * r ** 2;
}

var result1 = clacAreaCircle(2);
console.log(result1);
var result2 = clacAreaCircle(5);
console.log(result2);


makeLine();

// 입력한 숫자의 약수를 구하는 함수
var solutionNum = 0;

function calculator(x) {
    for (i = 1; i < x; i++) {

        if (x % i === 0) {
            solutionNum += +i;
        }
    }
}

console.log(calculator(5));