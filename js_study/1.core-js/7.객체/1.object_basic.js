
// 객체생성 : 객체 리터럴

var dog = {
    name: '뽀삐',
    kind: '진돗개',
    age: 3,
    injection:true,
    favorite:['산책', '개껌']
}; 

var cat = {
    name:'콩순이',
    kind: '블랙러시안',
    age: 2,
    injection: false,
    favortie: ['낮잠', '츄르', '캣타워']
};
//순차적인 규칙이 없으므로 key의 이름만 바뀌지 않는다면 순서는 바뀌어도 문제x

console.log(dog.name);
console.log(cat.age);


console.log(cat.favortie[0]);

dog.favorite.push('꼬리흔들기');
console.log(dog.favorite);

console.log(`=======================`);
//프로퍼티 참조 방법 2

console.log(dog.injection); // 참조방법 1  
console.log(dog['injection']);// 참조방법 2 객체명[객체key 입력시 string으로 해야함. '']

var x='age';
console.log(cat[x]);
console.log(cat['x']);


//프로퍼티 값 수정 방법
console.log(`=======================`);
// 강아지 나이를 5살로 수정

dog.age = 5;
console.log(dog.age);

dog.favorite[1] = '아이들';
console.log(dog.favorite);

console.log(`=======================`);
// 새로운 프로퍼티 동적 추가(실행중 추가)
cat.age = 5; // 수정이 된다.
cat.master = '김철수'; // 없는키를 쓰면 프로퍼티가 추가된다.

console.log(cat);
console.log(`=======================`);
// 새로운 프로퍼티 동적 제거
delete cat.master;
console.log(cat);

console.log(`=======================`);
// 빈 객체 만들기
var obj = {};
console.log(obj);
