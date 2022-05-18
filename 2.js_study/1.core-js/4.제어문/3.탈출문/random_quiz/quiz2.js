/*1. 2. 5번 제한 for break

1~50 사이의 무작위 숫자를 5번 안에 맞춰보세요.!!
>>25

UP!!! 
기회가 4번 남았습니다.
>>30

UP!!!
기회가 3번 남았습니다.
>>40

UP!!!
기회가 2번 남았습니다.
>>45

UP!!!
기회가 1번 남았습니다.
>>49

UP!!!
기회가 0번 남았습니다.
기회를 모두 소진했습니다. GAME OVER!!*/


/*1. 무한루프
1~50 사이의 무작위 숫자를 맞춰보세요 !!! 
>> 25
up!!!

>>30
down!!!

>>26
up!!!

>>27
딩동댕~~!!!*/

// 1~50 사이의 무작위 숫자를 제시
// 무작위 제시된 숫자와 사용자가 숫자를 입력
// 입력된 숫자가 다를 경우 up or down 표시
// 맞추면 딩동댕 메시지와 함께 종료

// * 추가조건
// 5번 안에 맞춰야 한다.
// 사용자에게 몇번의 기회가 남았는지 알려준다.
// 5번을 모두 입력하면 기회가 0번 남았습니다.
// 기회를 모두 소진했습니다. GAME OVER!!*/
// 정답을 맞추면 몇번만에 맞췄는지 알려준다.

// console.log(secret);
// var countDown = 5; // 5번의 기회 안됨
// var countDown = initCount; // count 초기화 변수 안됨


alert('[UP & DOWN 게임 1 ~ 50사이의 숫자를 맞춰보세요]');
alert(' 5번 안에 맞춰보세요 ! '); // 무작위 숫자

var ContDown = 5;
var INIT_COUNT = ContDown; //초기 입력 기회

var secret = Math.floor(Math.random() * 50) + 1; // 무작위 숫자
while (true) {
    var answer = +prompt(`숫자를 입력하세요. ${secret}`) // 입력창
    ContDown--; // 숫자 입력시 카운트 감소

    if (secret === answer) {
        alert(`딩동댕~~!!! ${INIT_COUNT-ContDown}번 만에 맞추셨습니다.`); // 정답을 맞추면 몇번만에 맞췄는지 알려준다.
        break; // 반복문 종료
    } else if (secret > answer) {
        alert(`UP!!`);
    } else {
        alert(`DOWN!!`);
    }


    // 게임 종료 추가조건
    if (ContDown <= 0) {
        alert(`기회를 모두 소진했습니다. GAME OVER!! 정답은${secret} 입니다.`);
        break;
    } // 5번을 모두 입력하면 기회가 0번 남았습니다.
    // 기회를 모두 소진했습니다. GAME OVER!!*/
    else {
        alert(`${ContDown}번의 기회가 남았습니다.`);
    } // 사용자에게 몇번의 기회가 남았는지 알려준다.
    
}