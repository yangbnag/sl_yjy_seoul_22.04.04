

var x = +prompt('숫자를 입력하세요.');
var n = x;
var total = '';

if (x = 0) {
    alert(`양의정수:0`);

} else if (x < 0) {
    alert(`양의정수: ${x}`);

} else {

    while (n > 0) {
        total += '*'
        n--;
    }
    alert(`양의정수: ${x}\n ${total}`);
}

/*
var x = +prompt('양의 정수: ');

if (x > 0) {
    var star = '';
    var i = 1;
    while (i <= x) {
        star += '*';
        i++;
    }
    console.log(star);
}*/