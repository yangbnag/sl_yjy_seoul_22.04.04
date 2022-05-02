
// 1. 중복 선언을 허용하지 않음

let x = 10;
x = 100;
console.log(x);

//2. 블록레벨 스코프 지원
let y = '안녕';
if (true) {
    let y = '잘가'; // 전역변수
}

console.log(y);

/*
for (let i=0; i<3; i++)
{

}
console.log(`i : ${i}`); */

// 3. 변수 호이스팅을 일으키지 않음. (선언을 늦게 했을때)

z = 100;
console.log(z);

let z ;