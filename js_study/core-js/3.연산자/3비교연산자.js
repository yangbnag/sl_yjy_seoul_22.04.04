
var a = 5;
var b = '5';

console.log(a==b);

console.log(a!=b);

console.log(a===b); // === 의 비교연산자는 변수의 값과, 타입을 비교한 결과값을 나타낸다.

console.log(a!==b); // a와 b가 다른거 맞아?

/*
 ==, != 연산자는 암묵적으로 문자열 내부에 순수한 숫자가 있으면 자동으로 따옴표를 제거한 후 비교합니다.
 자바스크립트에서는 2개짜리 == , != 사용금지.
*/

console.log('=============================================================================');
// 두개짜리 비교연산자 사용하면 안되는 이유 예시↓
console.log('0'==='');
console.log(0==='');
console.log('0'===0);
console.log(false==='false');
console.log(false==='0');

console.log('=============================================================================');
// 숫자 대소비교
var z = 10;
console.log(z > 5);
console.log(z <= 10);

// 문자열 대소 비교
console.log('a'==='A'); // 대소문자는 다르다 false
console.log('안녕하세요'=== '안녕 하세요'); // 글자숫자가 다르다. false
console.log('a'<'A'); // 모든 문자에는 숫자가 부여되어 있다. (아스키코드부터 출발하는 문자배열 체계에 의해서....)
                      // A:65 , a:97 , 가 : 44032

console.log('가'<'바');
console.log('ace' < 'ade'); //97 99 < 97 100 에서 true 결과 산출 후 연산 정지
console.log('pineapple'<'zebra'); // ture 
console.log('pineapple'<'Zebra'); // flase 

// 영어 대문자 < 영어 소문자 < 한글
// 같은 형태면 사전에서 뒤에 나오는 단어일수록 크다.