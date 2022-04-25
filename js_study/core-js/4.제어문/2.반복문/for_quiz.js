/* 정사각형을 그립니다.
높이는 얼마 입니까? 3.
*

* * *
* * *
* * */

var height = 3;
var star =''; // 별 저장

for (var j=0; j<height; j++) { // 

for (var i = 0; i< height; i++){
star += '*\t';
}
star += '\n';
}

console.log(star);