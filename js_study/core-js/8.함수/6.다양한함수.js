// 함수 정의부

// 함수 정의 기본
function add(n1, n2) {
    return n1 + n2;
}

// 함수 정의 기본2
//함수 리터럴(함수를 값으로 표현)
var sub = function (n1,n2) {
    return n1 - n2;
};

var plus = add;

function removeBoardArticleWithReplyText() {};
var rb = removeBoardArticleWithReplyText;
rb()

// 화살표 함수(ES6+)
function multiply(n1,n2) {
    return n1 * n2;
}

var multiply = function (n1,n2) {
    return n1 * n2;
};
// 함수의 내용물이 return문 딱 하나일경우 return 생략 가능.
var multiply = (n1,n2) => n1*n2;

var sayNickName = function(nick){
    console.log(`${nick}님 안녕~~`);
    return nick + '메롱~';
}

var sayNickName =(nick) =>{
    console.log(`${nick}님 안녕~~`);
    return nick + '메롱~';
}

var hello = function() {
    console.log('hello!!!!');
}

var hello = () => {
    console.log('hello!!!!');
}

//만약에 함수의 코드가 한문장이라면 중괄호 생략가능
var hello = () => console.log('hello!!!!');

// 정수 1개를 전달하면 해당 정수의 제곱값을 리턴하는
// 화살표함수 sqrt를 작성해보세요.

var sqrt = function(n1) {
    return n1 **2;
}

var sqrt = (n1) => n1**2;

// 중첩함수
function outer(){
    console.log('outer call!');

    function inner() {
        console.log('inner call!');
    }
    inner();
    inner();
}

// 재귀함수(Recursive)
function countdown(n) {
    if (n<0) {
        return;
    }
    console.log(`${n}!!`);
    countdown(n-1);
}

//기사 기출문제
function compute(num) {
    if(num <=1 ) return num;

    return compute(num-1) + compute(num - 3);
}

var r = compute(4); // r = ?

/* 풀이
compute(4) ->  return compute(3) + compute(1)
compute(3) ->  return compute(2) + compute(0)
compute(2) ->  return compute(1) + compute(-1)
compute(1) ->  return 1;
compute(0) ->  return 0;
compute(-1) -> return -1;

----------------------------------------

compute(4) ->  return 0 + 1 = 1
compute(3) ->  return 0 + 0 = 0
compute(2) ->  return 1 + -1 = 0
compute(1) ->  return 1;
compute(0) ->  return 0;
compute(-1) -> return -1;
*/

//=================================
// 코드 실행부


//즉시 실행 함수

(function () {
    var a = 10,
        b = 20;
    console.log(a + b);

    console.log(`============================`);

    console.log(typeof sub);

    console.log(sub(10,3));

    console.log(plus(10,20));

    hello();
    hello();
    hello();

    console.log(sqrt(10));
    sqrt(4);

    console.log(`============================`);

    outer();
    console.log(`============================`);

    countdown(5);


    //inner(); // outer함수의 전용함수
})(); // 익명함수


console.log(`============================`);

