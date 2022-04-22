
var num1 = +prompt('3개의 정수를 입력하세요.')
var num2 = +prompt('3개의 정수를 입력하세요.')
var num3 = +prompt('3개의 정수를 입력하세요.')

if ((num1===num2) && (num2 === num3)){
   alert('3개의 값이 모두 같습니다.');

} else if ((num1===num2) || (num2 === num3)) {
   alert('2개의 값이 같습니다.');}

   else if ((num1 === num3)) {
      alert('2개의 값이 같습니다.');
      }
else {
   alert(`모두 다릅니다.`);
}

/*var a = +prompt('정수 A');
var b = +prompt('정수 B');
var c = +prompt('정수 C');

if (a === b && b === c) {
    alert('3개 값이 모두 같습니다.');
} else if (a === b || b === c || c == a) {
    alert('2개 값이 같습니다.');
} else {
    alert('모두 다른 값입니다.');
}*/