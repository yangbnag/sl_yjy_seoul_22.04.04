

//x ~ y 까지의 누적합 : total
/* quiz 01
var x = +prompt('1.정수를 입력하세요.') ;
var y = +prompt('2.정수를 입력하세요.');
var total = 0 ;
var count = 0 ;

if (x > y) {
    var t ;
    t = x;
    x = y;
    y = t;}

while(x <= y){
    if( x <=y ) {
        count++;
    }
    total += x;
    x++;    
}

alert(`${x-count} ~ ${y}까지의 누적합: ${total}`);
*/


var x = +prompt('첫번째 숫자: ');
var y = +prompt('두번째 숫자: ');

var total = 0;
var n = x;

if (x > y) {
    var t ;
    t = x;
    x = y;
    y = t;
}
while (n <= y) {
    total += n;
    n++
}


console.log(`${x} ~ ${y}까지의 누적합: ${total}`); 