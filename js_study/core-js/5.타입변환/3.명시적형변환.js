
//명시적 문자열 변환

var a = 10, b = 20;
var result = a + b

// var result = ''+ a + b; // 암묵적 형변환을 명시적 형변환에 이용.

// var result = String(a) + String(b); // 생성자 함수

var result = a.toString() + b.toString(); // 메서드를 사용

console.log(result);

//명시적 숫자 변환

var m = '10', n = `5.5`;

var result2 = m + n; // 문자 상태

var result2 = +m + +n; // 암묵적 형변환을 명시적 형변환에 이용.

var result2 = Number(m) + Number(n); // 생성자 함수 이용

var result2 = parseInt(m) + parseFloat(n); // parseInt, parseFloat 함수 이용
//parseInt = 정수변환 , parseFloat = 실수변환


console.log(result2);

//명시적 논리 변환

var logic = null;

// var result3=Boolean(logic); // Boolean 생성자 함수 사용

var result3 = !!logic; // !부정 논리 연산자를 두번 사용

console.log(result3);