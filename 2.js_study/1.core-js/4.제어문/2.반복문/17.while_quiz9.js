/*
quiz09
입력된 정수 이하의 모든 홀수를
가로로 출력
alert은 한번만 작동

정수 15 
1 3 5 7 9 11 13 15
*/

var mainNum = 15 ;
var i = 1 ;
var memory ='';

while(i <= 15) {
    
    if (i % 2 === 1)
    {
        memory += `${i}\t` ;
    } 

    i++;
}

console.log(memory);

/* var num = +prompt('정수값: ');
var i = 1;
var message = '';
while (i <= num) {
    if (i % 2 === 1) {
        message += i + ' ';
    }
    i++;
}
alert(message); */
