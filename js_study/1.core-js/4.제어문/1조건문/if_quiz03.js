
var num1 = +prompt('3개의 정수를 입력하세요.')
var num2 = +prompt('3개의 정수를 입력하세요.')
var num3 = +prompt('3개의 정수를 입력하세요.')

if ((num1<num2) && (num1 < num3)){
   alert(`최솟값은 ${num1} 입니다.`);
} else if ((num2<num1) && (num2 < num3)) {
   alert(`최솟값은 ${num2} 입니다.`);
}else {
   alert(`최솟값은 ${num3} 입니다.`);
}

/*var a = +prompt('정수 A');
var b = +prompt('정수 B');
var c = +prompt('정수 C');

//풀이 1

var min = a; //최소값 저장 변수
if (a < b) {
    if (a < c) {
        min = a;
    } else {
        min = c;
    }
} else {
    if (b < c) {
        min = b;
    } else {
        min = c;
    }
}*/

//풀이 2
/*var min = a;
if (b < min) min = b;
if (c < min) min = c;

alert(`최소값은 ${min}입니다.`);*/

