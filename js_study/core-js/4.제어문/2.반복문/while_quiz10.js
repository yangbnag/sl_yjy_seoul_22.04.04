/*
quiz10
n의 값 : 3
1의 제곱은 1
2의 제곱은 4
3의 제곱은 9
*/

var n = 5 ;
var i = 1 ;
var memory ='';

while(i <= n) {
    memory += `${i}의 제곱은 ${i*i}  \n` 
          
    i++;
}

console.log(memory);



/*var n = +prompt('정수값: ');
var i = 1;
var message = '';
while (i <= n) {
    message += `${i}의 제곱은 ${i ** 2}\n`;
    i++;
}
alert(message);*/
