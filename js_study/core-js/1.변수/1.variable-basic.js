// 프로그램 내에서 사용할 데이터를 저장해 놓고 쓰고 싶어요.

//1. 변수를 선언(만든다)
var result;

//2. 변수의 초기화(initialize : 값을 저장)
result = 10 + 20; //코딩에서 '=' 은 equal이 아닌 대입 assignment

//  result에 저장된 값을 화면에 보여줘라
console.log(result); //console.log() 는 출력 함수

// 3. 변수의 값 수정(변경)
result = 50;
console.log(result);

// 4. 변수에 변수값을 저장
result = result * 2;
console.log(result);

console.log(result + 10); //110을 출력하지만 변하진 않음
console.log(result);

// 변수는 선언과 초기화를 동시에 할 수 있음
var number = 70;

// 변수 끼리의 연산도 가능
console.log(result - number);

number = result - 20;
console.log(number);

// 문자열을 저장할 때는 따옴표(홑, 겹따옴표 둘다 가능)
var friend_name : '고길동' ;