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

var secret = Math.floor(Math.random() * 50) + 1; // 무작위 숫자
// console.log(secret);





while (true) {
    alert('1~50 사이의 무작위 숫자를 맞춰보세요!!');
    var answer = +prompt(`숫자를 입력하세요. ${secret}`)

    if (secret === answer) {
        alert('딩동댕~~!!!');
        break;
    } else if (secret > answer) {
        alert('UP!!');
    } else {
        alert('DOWN!!');
    }
}