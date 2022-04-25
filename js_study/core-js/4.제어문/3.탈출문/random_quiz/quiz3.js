/* [ 난이도를 설정하세요~~~!]
1.[상(기회 3번) | 2. 중 (기회 6번) | 하 (기회 10번)]

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

var randomNumber = Math.floor(Math.random() * 50) + 1;
var level = +prompt(`난이도를 설정하세요!\n 1.[상(기회 3번) | 2. 중 (기회 6번) | 3.하 (기회 10번)]`);

if (level === 3) {
    var count = 10;
    while (true) {
        var inputNumber = +prompt('1~50 사이의 무작위 숫자를 10번 안에 맞춰보세요.!!');
        count--;

        if (count === 0) {
            alert(`기회가 ${count} 번 남았습니다. \n 기회를 모두 소진했습니다. GAME OVER!!`);
            break;

        } else if (inputNumber > randomNumber) {
            alert(`Down!!! \n 기회가${count}번 남았습니다.`);
        } else if (inputNumber < randomNumber) {
            alert(`Up!!! \n 기회가${count}번 남았습니다.`);
        } else {

            alert(`딩동댕~~!!! ${count}번 만에 맞추셨습니다.`);
            break;
        }


    }
} else if (level === 2) {
    var count = 5;
    while (true) {
        var inputNumber = +prompt('1~50 사이의 무작위 숫자를 5번 안에 맞춰보세요.!!');
        count--;

        if (count === 0) {
            alert(`기회가 ${count} 번 남았습니다. \n 기회를 모두 소진했습니다. GAME OVER!!`);
            break;

        } else if (inputNumber > randomNumber) {
            alert(`Down!!! \n 기회가${count}번 남았습니다.`);
        } else if (inputNumber < randomNumber) {
            alert(`Up!!! \n 기회가${count}번 남았습니다.`);
        } else {

            alert(`딩동댕~~!!! ${count}번 만에 맞추셨습니다.`);
            break;
        }


    }
} else {
    var count = 3;
    while (true) {
        var inputNumber = +prompt('1~50 사이의 무작위 숫자를 3번 안에 맞춰보세요.!!');
        count--;

        if (count === 0) {
            alert(`기회가 ${count} 번 남았습니다. \n 기회를 모두 소진했습니다. GAME OVER!!`);
            break;

        } else if (inputNumber > randomNumber) {
            alert(`Down!!! \n 기회가${count}번 남았습니다.`);
        } else if (inputNumber < randomNumber) {
            alert(`Up!!! \n 기회가${count}번 남았습니다.`);
        } else {

            alert(`딩동댕~~!!! ${count}번 만에 맞추셨습니다.`);
            break;
        }


    }
}


/*
    - 1 ~ 100 사의 랜덤한 숫자 하나가 정답으로 주어진다.
    - 사용자는 숫자 하나를 입력할 수 있어야한다.
    - 시스템은 입력한 숫자를 판단하여 up인지 down인지 
      정답인지 알려주어야 한다.
    - 만약 정답을 맞추지 못하면 지속해서 반복입력을 받고
      결과를 알려주어야 한다.
    - 정답을 맞추면 맞췄다는 메시지와 함께 프로그램을 중단한다.

    - 사용자는 5번 안에 정답을 맞춰야 하며 5번의 입력기회가
      모두 소진될때까지 맞추지 못하면 게임은 종료된다.

    - 사용자는 게임 시작 초기에 난이도를 설정할 수 있다
    - 난이도는 상, 중, 하 난이도가 존재하며 숫자를 통해
       난이도를 선택한다. 
    - 난이도별 INIT_COUNT가 다르게 설정된다.


    --> 필요한 데이터: 랜덤정답데이터, 사용자입력숫자데이터
                     , 입력기회횟수데이터
*/

/*

alert('[UP & DOWN 게임 1 ~ 100사이의 숫자를 맞춰보세요]');
alert(' 5번 안에 맞춰보세요 ! ');

//랜덤 정답데이터
var secret = Math.floor(Math.random() * 100) + 1;
// console.log(secret);

var level = +prompt('난이도를 선택하세요!\n# [1. 상(3번의 기회) | 2. 중(6번의 기회) | 3. 하(10번의 기회)]');

var INIT_COUNT; //초기 입력 기회

//난이도별 초기 입력횟수 설정
if (level === 1) {
    alert('난이도 상을 선택했습니다. 3번만에 맞추시면 됩니다! 파이팅!!');
    INIT_COUNT = 3;
} else if (level === 2) {
    alert('난이도 중을 선택했습니다. 6번만에 맞추시면 됩니다! 파이팅!!');
    INIT_COUNT = 6;
} else if (level === 3) {
    alert('난이도 하를 선택했습니다. 10번만에 맞추시면 됩니다! 파이팅!!');
    INIT_COUNT = 10;
} else {
    alert('난이도를 잘못 선택했습니다. 난이도 상으로 자동시작합니다.');
    INIT_COUNT = 3;
}


var countDown = INIT_COUNT; //차감될 입력 기회횟수

//최소값 최대값
var min = 1, max = 100;

while (true) {

    //사용자 입력데이터
    var answer = +prompt(`숫자를 입력하세요! [${min} ~ ${max}]`);

    // 사용자가 제대로 범위안의 값을 썻는가??
    if (answer <= min || answer >= max) {
        alert('범위 안의 값을 입력하세요!');
        continue;
    }

    countDown--; //입력횟수 차감

    //입력값 검증
    if (secret === answer) {
        alert(`정답입니다! ${INIT_COUNT - countDown}번만에 맞추셨습니다.`);
        break;
    } else if (secret < answer) {
        alert('DOWN!!');
        max = answer;
    } else {
        alert('UP!!');
        min = answer;
    }

    //게임 종료 추가조건
    if (countDown <= 0) {
        alert(`GAME OVER! ~~~ 정답은 ${secret}입니다.`);
        break;
    } else {
        alert(`${countDown}번의 기회가 남았습니다.`);
    }
} */