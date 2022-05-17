
var userName = '양재영';
console.log(`${userName}님 안녕 하세요!`);

var userName = '양민령';
console.log(`${userName}님 안녕 하세요!`);

var userName = '양유정';
console.log(`${userName}님 안녕 하세요!`);

function callUserName(userName) {
    if(typeof userName === 'number') {
        console.log(`숫자로 된 이름 입니다.`);
        return;
    } 

    console.log(`${userName}님 안녕하세요!`);
}

callUserName('양재영');
callUserName(1);
