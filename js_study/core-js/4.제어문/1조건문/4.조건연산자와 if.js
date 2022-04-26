var money = 5000;
// 돈이 5천원 이상이면 '김치찌개' 저장 아니면 '라면' 저장

/*
var food;

if (money>=5000) {
    food = '김치찌개';
}else {
    food = '라면';
}*/

// 위와 아래는 같은 결과를 나타내는 코드이다. 위는 if 아래는 조건 연산자이다.
// 조건연산자가 가독성이 더 좋고 간략해 보인다.

// var food = (money>=5000) ? '김치찌개' : '라면';




// 5천원 넘으면 '김치찌개', 3천원넘으면 '라면', 그 밑이면 '굶음'

var food = (money >= 5000) ? '김치찌개' : // 1항 
    (money >= 3000) ? '라면' : '굶음'; // 2항 

    console.log(food);


var food ;
if (money>=5000) {
    food = '김치찌개'
}else if (money>=3000) {
    food = '라면';
}else {
    food = '굶음';
}

// 위의 2코드는 같은 결과를 내는 조건연산자와 if문 이다. 
// 조건이 많아져서 조건연산자가 보기 불편해졌다.