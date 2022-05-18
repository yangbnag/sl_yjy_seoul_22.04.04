
/*
var x = +prompt('정수를 입력하세요.');
var i = 1;
var star='';
var n = '';

while(i<=x) {
    star += '*\n';
    i++;
}
alert(`${star}`);
*/


var x = 5//+prompt('양의 정수: ');

if (x > 0) {
    var star = '';
    var i = 1;
    while (i <= x) {
        star += '*\n';
        i++;
    }
    console.log(star);
}