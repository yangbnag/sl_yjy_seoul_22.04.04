/* [ 난이도를 설정하세요~~~!]
1.[상(기회 3번) | 2. 중 (기회 6번) | 3. 하 (기회 10번)]

1
[ 1 ~ 50 사이의 무작위 숫자를 3번 안에 맞춰보세요 !!!]

>> 25
UP!!!
기회가 2번 남았습니다.

>>35
UP!!!
기회가 1번 남았습니다.

>>45
Down!!!
기회가 0번 남았습니다.
기회를 모두 소진했습니다. GAME OVER!!*/

// 1~50 사이의 무작위 숫자를 제시
// 무작위 제시된 숫자와 사용자가 숫자를 입력
// 입력된 숫자가 다를 경우 up or down 표시
// 맞추면 딩동댕 메시지와 함께 종료
// 5번 안에 맞춰야 한다.
// 사용자에게 몇번의 기회가 남았는지 알려준다.
// 5번을 모두 입력하면 기회가 0번 남았습니다.
// 기회를 모두 소진했습니다. GAME OVER!!*/
// 정답을 맞추면 몇번만에 맞췄는지 알려준다.

// *추가된 조건
// 난이도를 입력받고 난이도에 따른 기회를 부여 1.3번, 2. 6번, 3. 10번

alert('[UP & DOWN 게임 1 ~ 50사이의 숫자를 맞춰보세요]');
alert(' 5번 안에 맞춰보세요 ! '); // 무작위 숫자

var secret = Math.floor(Math.random() * 50) + 1; // 무작위 숫자

var level = +prompt(`/* [ 난이도를 설정하세요~~~!]\n
1.[상(기회 3번) | 2. 중 (기회 6번) | 3. 하 (기회 10번)]`);

var INIT_COUNT;

if (level === 1) {
    alert('난이도 상을 선택했습니다. 3번만에 맞추시면 됩니다! 파이팅!!');
    INIT_COUNT = 3;
} else if (level===2) {
    alert('난이도 중을 선택했습니다. 6번만에 맞추시면 됩니다! 파이팅!!')
    INIT_COUNT = 6;
}else {
    alert('난이도 하를 선택했습니다. 10번만에 맞추시면 됩니다! 파이팅!!')
    INIT_COUNT=10;
}

var ContDown = INIT_COUNT; //초기 입력 기회

//최소값, 최대값
var min = 1, max = 100 ;


while (true) {
    var answer = +prompt(`숫자를 입력하세요.${min}~${max} ${secret}`) // 입력창
    ContDown--; // 숫자 입력시 카운트 감소

    // 사용자가 제대로 범위안의 값을 썼는가/
    if(answer<min || answer>max){
        alert('범위안의 값을 입력하세요!');
        continue;
    }

    if (secret === answer) {
        alert(`딩동댕~~!!! ${INIT_COUNT-ContDown}번 만에 맞추셨습니다.`); // 정답을 맞추면 몇번만에 맞췄는지 알려준다.
        break; // 반복문 종료
    } else if (secret > answer) {
        alert(`UP!!`);
        min=answer;
    } else {
        alert(`DOWN!!`);
        max-answer;
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