/* 옆으로 긴 직사각형을 그립니다.
한변(1) : 7 
한변(2) : 3
*

* * * * * * *
* * * * * * *
* * * * * * */

var height = 3;
var width = 7;
var star =''; // 별 저장

for (var j=0; j<height; j++) { // 

for (var i = 0; i< width; i++){
star += '*\t';
}
star += '\n';
}

console.log(star);

/* 정답 
//가로, 세로 길이
var width = 4;
var height = 5;
var star = '';

//가로 세로 보정
if (width < height) {
    var t = width;
    width = height;
    height = t;
}

for (var i = 0; i < height; i++) {
    for(var j = 0; j < width; j++) {
        star += '*  ';
    }
    star += '\n';
}
console.log(star); */