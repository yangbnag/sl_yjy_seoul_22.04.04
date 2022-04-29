
//2개의 정수를 전달하면 그 합을 구해주는 함수
function add2(n1,n2) {
    return n1 + n2 ;
}

// add2 (10, 20, 30); // 3개를 더한 값이 필요하다면.

function add3(n1,n2,n3) {
    return n1+n2+n3;
}

// add3(10,20,30,40) // 4개를 더한 값이 필요하다면.
// 계속해서 함수를 만들어야 할까?

// -> n개의 정수를 전달하면 그 합을 구해주는 함수를 어떻게 만들까?
// 배열이나객체로 값을 출력할수 있다면 배열이나 객체로 값을 입력 받을수 있다.
function addAll(numbers=[]) {
    var total = 0;
    for (var n of numbers) {
        total += n;
    }
    return total;
}


//ES6+
// []로 없이 배열 값 입력 받기
function addAll2(...numbers2) // 매개변수 앞에 ... 을 입력.
{
    var total = 0;
    for (var n of numbers2) {
        total += n;
    }
    return total;
}


var result1 = addAll([10,20,]);
console.log(`r1: ${result1}`);

var result2 = addAll2(10,20,);  // []로 생략
console.log(`r2: ${result2}`);

// addAll 을 함수한테 배열식으로 만들어서 인수를 줘야함.
// addAll2 는 인수를 함수가 자동으로 배열식으로 묶어준다.