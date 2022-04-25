/* 몇개의 *를 표시할까요? 33.
몇 개마다 줄 바꿈할까요? 5.

*****
*****
*****
*****
*****
*****
***/

var w = 5;
var a = 33;
var star =''; // 별 저장


for (var j=0; j<(a/w); j++) { // 

for (var i = 0; i< w; i++){
star += '*';
}
star += '\n';
}



console.log(star);

/* 정답
//총 별의 숫자
var starNum = 33;
//줄바꿈할 별의 개수
var width = 5;
var star = '';

//총 줄 수 구하기
var line = parseInt(starNum / width);

for (var i = 0; i < line; i++) {
    for(var j = 0; j < width; j++) {
        star += '*';
    }
    star += '\n';
}

//남은 별의 개수 구하기
var rest = starNum % width;

if (rest > 0) {
    for (var k = 0; k < rest; k++) {
        star += '*';
    }
}
console.log(star); */