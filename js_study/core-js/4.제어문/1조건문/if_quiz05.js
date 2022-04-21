
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