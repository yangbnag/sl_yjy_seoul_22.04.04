function makeLine() {
    console.log(`============================================================`);
}

// 매개변수(parameter)
// - 함수를 정의할 때 함수호출부에서 전달한 값을
//   받아서 저장하는 변수

function add(n1, n2) {
    console.log('함수 실행!!');
    return n1 + n2;
}

// 함수를 만든것만으로는 실행 되지 않는다.

// 함수를 호출
add(10, 20); // 연산만 되고 출력은 되지 않는다.

console.log(add(10, 20));

var number = add(20, 50); // var number = 70;
console.log(number);

makeLine()

// x ~ y 까지의 총합을 구해야 함.
// ex) 1 ~ 10 까지의 총합 : 55, 3~5 까지 : 12

function calcRangeTotal(x, y) { // x, y 는 매개변수(parameter)
    console.log(`x:${x}, y${y}`);
    var total = 0;
    for (var n = x; n <= y; n++) {
        total += n;
    }
    return total;
}

console.log(calcRangeTotal(1, 100));
// 인수 (argument) : 함수를 호출할 때 함수에게 전달하는 값

//1~10 까지의 총합
var r1 = calcRangeTotal(1, 10); // 1, 10인수 이고 x, y의 매개변수로 저장됨.
console.log(r1);

// 주의사항
var r2 = calcRangeTotal(); // 매개변수에 인수를 넣지 않고 함수를 호출 했을 때
console.log(r2); // 변수에 값이 없을 때 undefined이므로 결과값이 0이 된다.
makeLine()
var r2 = calcRangeTotal(1, 2, 3); // 매개변수에 인수를 더 넣을때
console.log(r2); // 앞에서 부터 변수에 인수를 대입하고 실행 / 남은 값은 별도 저장.

makeLine();


// 매개변수가 없는 함수
function rdd() {
    console.log('링딩동 링딩동 링디기링디기링딩동!!!');
}

for (var i = 0; i < 5; i++) {
    rdd();
}

// 매개변수의 기본값
// ES6
function sayHello(language = '한국어') {

    //ES5
    // language = language || '한국어';

    if (language === '한국어') {
        console.log('안녕하세요~');
    } else if (language === '영어') {
        console.log('hello~');
    } else if (language === '중국어') {
        console.log('따자하오~');
    } else {
        console.log('뭔지몰라~~');
    }
}
console.log('===========================');
sayHello();

// 매개변수가 없는 함수

function selectRandomPet() {
    var pets = ['멍멍이', '야옹이', '짹짹이', '어흥이', '두껍이']

    var rn = Math.floor(Math.random() * pets.length);
    return pets[rn];

}

console.log(`선택된 동물:${selectRandomPet()}`);