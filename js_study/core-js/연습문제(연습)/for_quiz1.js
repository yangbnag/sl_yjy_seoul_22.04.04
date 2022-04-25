/* 옆으로 긴 직사각형을 그립니다.
한변(1) : 7 
한변(2) : 3
*

* * * * * * *
* * * * * * *
* * * * * * */

//첫번째 반복문 (줄만들기) 작은 숫자
// 두번째 반목문 (별만들기) 큰 숫자

var width = 3;
var height = 7;
var star = '';

if (height>width) {
    var t = height ;
    height = width ; 
    width = t;
}

for (i=0; i<height; i++)
{
    for(j=0; j<width; j++) {
        star +=`* `;
    }
    
    star += '\n';
}

console.log(star);