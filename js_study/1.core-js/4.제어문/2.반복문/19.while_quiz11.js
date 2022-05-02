/*
quiz11
몇개의 *을 출력할까요? 12
*****
*****
**

*/

var n = 12 ;
var i = 1 ;
var memory ='';

while(i <= n) {

    memory += '*';

     if (i % 5 === 0) {
        memory += '\n'; }
          
    i++;
}

console.log(memory);

/* // var n = +prompt('몇 개의 *를 출력할까요?');

var n = 12;
var i = 1;
var result = '';
while (i <= n) {
    result += '*';
    if (i % 5 === 0) {
        result += '\n';
    }
    i++;
}
// alert(result);
console.log(result);
*/


