/*
- Quiz. 
아래 요구사항에 맞는 코드를 작성하고 
브라우저에서 실행하여 테스트하세요.

- 요구사항
1. prompt 창을 띄워 사용자에게 숫자를 입력해 달라고 요청한 후, 
   입력받은 값들을 배열에 순차적으로 저장합니다.
   
2. '그만'이라고 입력하면 질문을 멈추고
   입력했던 숫자배열과 숫자의 총합(배열 요소의 합)을 계산하여 출력하세요.
*/

// 처음은 빈 배열로 시작.





alert(`숫자를 입력하세요.\n그만두려면\'그만\'이라고 입력하세요!`);
var numbers = []; // 입력받은 값들을 배열에 순차적으로 저장할 변수
var total = 0;

while (true) {

    var userNumber = prompt(`숫자를 입력하세요.`); // prompt 창을 띄워 사용자에게 숫자를 입력해 달라고 요청한 후,
    numbers.push(userNumber); // 입력한 숫자를 배열에 입력

    if (userNumber === '그만') {
        for (var i of numbers) { // 입력했던 배열들의 총합
            total += Number(numbers);
        }
        alert(`입력한 숫자목록 ${numbers} \n입력한 숫자 총합:${total}`);
    }

}


/*
- Quiz. 
아래 요구사항에 맞는 코드를 작성하고 
브라우저에서 실행하여 테스트하세요.
- 요구사항
1. prompt 창을 띄워 사용자에게 숫자를 입력해 달라고 요청한 후, 
   입력받은 값들을 배열에 순차적으로 저장합니다.
   
2. '그만'이라고 입력하면 질문을 멈추고
   입력했던 숫자배열과 숫자의 총합(배열 요소의 합)을 계산하여 출력하세요.
*/

//사용자의 입력숫자를 저장할 배열
/*
var numbers = [];

while (true) {
    var n = prompt('숫자를 입력하세요.\n그만 두려면 \'그만\'이라고 입력하세요.');
    if (n === '그만') break;

    numbers.push(+n);
}

//총합 계산
if (numbers.length > 0) {
    var total = 0;
    for (var num of numbers) {
        total += num;
    }
    alert(`입력한 숫자 목록 [${numbers}]\n입력한 숫자 총합: ${total}`);
}*/