/* 몇개의 *를 표시할까요? 33.
몇 개마다 줄 바꿈할까요? 5.
*****
*****
*****
*****
*****
*****
***/

//별 5개씩 6줄 // //나머지 별들 1줄

//6줄은 첫번째 반복문

var height = 5 ;
var starNum = 33 ;
var star = '';

var line = parseInt(starNum/height) ;
var rest = (starNum%height);

for(i=0; i<line; i++) {
    {
        for(j=0; j < height; j++)
        {
            star += '*';
        }
    }

    star += '\n';
}

if(rest>0) {
    for(k=0; k<rest; k++)
    star += '*';
}

console.log(star);