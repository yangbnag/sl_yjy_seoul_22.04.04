
// 1. 변수의 중복선언 허용
var x = 10;
var x = 100;
console.log(x);

// 2. 블록레벨 스코프 지원x
var y = '안녕';
if (true) {
    var y = '잘가'; // 전역변수
}

console.log(y);

for (var i=0; i<3; i++)
{

}
console.log(`i : ${i}`);

// 3. 변수 호이스팅

f = 100;
console.log(f); // f 변수를 선언하지 않았으나 참조된다.

var f;