/*
    Q6)
    1. 1개의 정수 n을 전달받아 n의 약수들을 출력하고 
    약수의 개수를 리턴하는 함수 calcDivisor를 정의하세요.
    2. 약수의 출력은 함수 내부에서 이뤄져야 합니다.

    - 호출 예시 : calcDivisor(10);

    10의 약수: 1 2 5 10
    10의 약수의 개수: 4개
    
    
*/

function calcDivisor(n1) {
var nums=[];

for (i=1; i<=n1; i++) {
    if((n1%i)===0) {
        n = parseInt(n1/i);
        nums.push(n);
    }
}

return (`${n1}의 약수 : ${nums.reverse()}\n10의 약수의 개수:${nums.length}개`);
}


inputNum = +prompt('1개의 정수를 입력하세요.');

alert(calcDivisor(inputNum));

/*
result = calcDivisor(10);
console.log(result);*/

// ===================== ↓ 정답 =========== //

/*

function calcDivisor(num) {
    var divisorArr = []; //약수 저장 배열
    for (var i = 1; i <= num; i++) {
        if (num % i === 0) {
            divisorArr.push(i);
        }
    }
    console.log(`${num}의 약수: [${divisorArr}]`);
    return divisorArr.length;
}

var count = calcDivisor(10);
console.log(`약수의 개수: ${count}개`);
*/