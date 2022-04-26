

/*console.log(pets);

// push() : 배열에 맨 끝에 데이터를 추가
pets.push('어흥이');
// push 안에 여러 요소를 넣어도 된다.
pets.push('징징이', '꽥꽥이');

console.log(pets);
console.log(pets.length);*/

/*
//pop() : 배열의 맨 끝 요소를 제거

for(var i=-1; i <= pets.length; i++)
{
    pets.pop();
}
console.log(pets);

// ↑ 풀이
// ↓ 정답
while(pets.lenth>0) {
    pets.pop();
}*/




// shift() : 배열의 맨 첫번째 요소 제거

var pets =['멍멍이', '야옹이', '짹짹이'];
var a = 1;

console.log(pets);

// unshift() : 배열의 맨 앞에 요소를 추가
pets.unshift('꿀꿀이');
pets.push(a);
console.log(pets);