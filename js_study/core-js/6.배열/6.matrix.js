


// 2차원 배열 - 배열의 요소가 또다시 배열인 경우
var arr1 = [1,2,3];
var arr2 = [4,5,6];
var arr3 = [7,8,9];

var arr2d = [arr1, arr2, arr3, [10,11,12]]; // arr2d의 인덱스 수는 3 이다. (배열안에 들어있는 배열들이 요소가 된다.)

console.log(arr2d.length);

console.log('==============================');
console.log(arr2d[1]);
console.log(arr2d[3]);
console.log('==============================');

// arr1[2]인 3을 2차원 배열에서 접근하고 싶을때는 

console.log(arr2d[0][2]);
console.log(arr2d[3][0]);
console.log('==============================');

// 8을 88로 수정 하고 싶을 때는

arr2d[2][1] = 88;
console.log(arr2d);

console.log('==============================');

// 4, 5, 6 을 100, 200, 300 으로 수정 하고 싶을 때는
arr2d[1] = [100,200,300];
console.log(arr2d[1]);




console.log('==============================');
arr2d.splice(0,1);
console.log(arr2d);

console.log('==============================');
arr2d[1].splice(1,1);
console.log(arr2d);

console.log('==============================');
arr2d[2].push(999);
console.log(arr2d);

console.log('==============================');

var result = arr2d[0] * arr2d[2]; // 곱하기는 숫자에서 수행 됨. (배열은 배열 타입.)
console.log(result);

var result2 = arr2d[0][1] * arr2d[2][0]; // 숫자 곱하기 숫자는 가능하다.
console.log(result2);

// arr2d[1][1].pop(); // pop은 배열에서만 가능하다. 
arr2d[2].pop();
console.log(arr2d);

arr2d.pop(); // 10,11,12가 들어있는 배열 전부를 삭제
console.log(arr2d);

console.log('==================================');

var arr2d_2 = [
    ['a', 'b', 'c'],
    ['가', '나', '다'],
    ['D', 'E', 'F']
];

for(var arr of arr2d_2){ // 3 바퀴 (배열의 length 만큼 돈다.)
    for (var s of arr) { // 3 바퀴 (배열의 length 만큼 돈다.)
        console.log(s); // 9 바퀴 돈다.
    }
}

// 2차원 배열 안에 있는 모든 내용을 출력하기 위해서는 중첩 루프가 작성된다.