function makeLine() {
    console.log('========================================');
}

//return은 함수의 탈출문
function add(n1, n2) {
    console.log(`${n1} + ${n2} = ${n1+n2}`)
    return n1 + n2; // return 밑에 있는 코드는 실행되지 않는다.
}

function multi(n1, n2) {
    console.log(`${n1} x ${n2} = ${n1*n2}`)
}

function callName(nickName) {
    //금지어 리스트
    var prohibits = ['바보', '멍청이', '도라이'];
    if (prohibits.includes(nickName)) {
        console.log('나쁜말 닉네임은 안돼요!');
        return; // 함수 강제종료
    }
    console.log(`${nickName}님 안녕하세요!`);
}

function foo() {
    var n = 1;
    while (n < 5) {
        if (n === 2) {
            return; // return으로 강제 종료 시킬때. (함수안에 반복문에서는 함수에서 쓰는 return 탈출문 사용 가능.)
        } // end while
        console.log(`${n}!!`);
        n++
        console.log('반복문 끝!!');
    }
}
// end function foo

//================================================//


// 함수 호출부
// return값이 없는 함수는 변수에 저장하면 안됨.

var r1 = add(10, 20); // 결과 값을 가지고 왔다. /(return) 사용 
var r2 = multi(3, 5); // 결과 값을 가지고 온 것이 아니고 연산 후 출력만 했을뿐. [결과 값이 없다.]

console.log(`r1:${r1}, r2:${r2}`);

makeLine()

var r3 = multi(add(2, 4), add(5, 1));
// 실행 순서는 안쪽 부터 2+4 = 6, 5+1 = 6
// multi(6,6);
// 출력은 되지만 r3는 값이 없다. 저장 되지 않음.

console.log(`r3 : ${r3}`);

var r4 = add(multi(3, 2), add(4, add(6, 3)));

//실행 순서 6+3 -> 3*2 -> 4+ (6+3) -> 연산결과는 6이지만 multi 함수는 return이 없으므로 undefined + 13
console.log(`r4 : ${r4}`);

//return 값이 없는 함수는 다른 함수의 인수로 사용 할수 없음.

//==================================================//

callName('아가딸기겅듀'); // nickName에 비속어를 쓰지 못하게 막아주고 싶을때.
callName('바보');

foo();
//=======================================================//
makeLine();
// 함수의 리턴값은 언제나 하나!
// 2개의 정수를 전달받아서 +-*/ 4가지 값을 
// 리턴 받고 싶다!?

/* function operateAll(n1,n2){
        var arr =[n1+n2, n1-n2, n1*n2, n1/n2];
        return arr;
    }

   var resultList = operateAll(10,5);
   console.log(resultList[1]);
   console.log(resultList[2]);
   console.log(resultList[3]);
*/

function operateAll(n1, n2) {
    var obj = {
        plus: n1 + n2, 
        minus:n1 - n2, 
        multi:n1 * n2, 
        divide:n1 / n2
    }
     obj;
}

/*
function operateAll(n1, n2) {
    return {
        plus: add(n1 + n2), 
        minus:n1 - n2, 
        multi:n1 * n2, 
        divide:n1 / n2
    }
   
     
}*/

var resultList = operateAll(10, 5);
console.log(resultList.minus);
console.log(resultList.multi);
console.log(resultList.plus);

