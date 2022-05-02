// 객체의 반복문 for in

var phone = {
    company: '삼성',
    color: '펄 화이트',
    model: '갤럭시 S21',
    price: 1200000
};

var i = '';
for (var prop in phone) { // 키만 출력 된다.
    i+=(`${prop}:${phone[prop]}\n`);
    // prop 변수의 타입은 string 객체명.string 은 출력이 안되고, 변수 사용시[]를 사용해야 한다.
                              // []안에 변수명 넣는다.
}
console.log(i); 

// 객체 내부의 특정키의 존재여부 확인
var haskey = 'color' in phone; // key를 반드시 '' 안에 써서 string 타입으로 사용.
console.log(haskey);

var color = 'color' // 일때 
var haskey1 = color in phone; // 은 맞는 문법이다.
console.log(haskey1);

var haskey = 'memory' in phone;
console.log(haskey);

phone.memory = '16G';
var haskey = 'memory' in phone;
console.log(haskey);

