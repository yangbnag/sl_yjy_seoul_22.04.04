
var x = 5 ;
var i = 1;
var total = '';

while(i<=x) {
    if(i % 2 === 1) total += '+';
    else total += '-';
    i++;
}
console.log(total);





/*var x = +prompt('양의 정수: ');

if (x > 0) {
    var mark = '';
    var i = 1;
    while (i <= x) {
        if (i % 2 == 1) mark += '+';
        else mark += '-';
        i++;
    }
    alert(mark);
}*/