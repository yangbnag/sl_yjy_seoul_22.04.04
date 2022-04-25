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