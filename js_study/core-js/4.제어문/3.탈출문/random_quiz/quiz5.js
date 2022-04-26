/*
- 1~100까지의 무작위 정수 2개의 출력 0
- 출력된 2개의 숫자는 더하기 연산후 그 결과는 시크릿 처리 0
- 사용자가 정답을 입력할수 있게 해줘야 함. 0
- 입력된 정답과 시크릿이 맞으면 정답입니다.를 출력 후 계속 실행/ 틀리면 틀렸어요 출력 후 계속실행.
- 0을 입력하면 게임을 종료 합니다.를 출력 후 종료.
- 문제를 맞출때마다 카운트를 해서 Q1. Q2. Q3. 로 문제 앞에 표시.
- 문제를 맞출때마다 새로운 무작위를 만들어서 문제 재출력.
*/
//추가
/* 게임을 종료하면 정답횟수 : 회, 틀린회수 : 회 를 출력 */
/* 더하기문제에서 x 와 - 도 랜덤으로 나오게끔 출력 */

alert(`~~~~~~~~~~ 재미있는 사칙연산 게임 ~~~~~~~~~~`);
alert(`[즐겁게 문제를 푸시다가 지겨우면 0을 누르세요~]`);

// * quiz의 넘버 카운트
var countnum = 1;
// 맞춘 회수와 틀린 회수
var answerCount = 0;
var wrongAnwser = 0;

while (true) {
    // quiz 출력
    // * 무작위 정수2개 출력 
    var rn1 = Math.floor(Math.random() * 100) + 1;
    var rn2 = Math.floor(Math.random() * 100) + 1;

    /* 더하기문제에서 x 와 - 도 랜덤으로 나오게끔 출력 */
    var rn3 = Math.floor(Math.random() * 3) + 1;
    var quiz;
    var secret;

    if (rn3 === 3) {
        quiz = '+';
        secret = rn1 + rn2; // * 문제의 정답 
    } else if (rn2 === 2) {
        quiz = '-';
        secret = rn1 - rn2; // * 문제의 정답
    } else {
        quiz = 'x';
        secret = rn1 * rn2; // * 문제의 정답 
    }
    
   
 
    // * 사용자가 볼수 있도록 문제 출력
    alert(`Q${countnum}. ${rn1} ${quiz} ${rn2} = ?? ${secret}`);

    //사용자 입력창

    var answer = +prompt(`Q${countnum}. ${rn1} + ${rn2} = ?? ${secret}`);
    if (answer === 0) {
        alert('게임을 종료합니다!');
        alert(`정답회수 :${answerCount} 틀린회수 :${wrongAnwser}`);
        break;
    }

    if (answer === secret) {
        alert('정답입니다.!');
        countnum++;
        answerCount++;


    } else {
        alert('틀렸어요~');
        countnum++;
        wrongAnwser++;

    }
}