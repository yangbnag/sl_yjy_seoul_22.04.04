//indexOf(), slice(), reverse(), concat(), splice(), includes()


// var idx = foods.indexOf('볶음밥')


//indexof(element) : 배열 요소의 인덱스틑 알려줌.
//ex) 볶음밥이 몇번째 인덱스에 있니? 6개 정도면 카운트 해서 3번째라고 할수 있지만
//  배열 인덱스가 많이 있으면 세기가 힘들다. 그럴때 사용

//응용
/*
var idx=0;
for(var f of foods){
    if(f ==='닭꼬치') {
        break;
    }
    idx++
}
console.log(`찾은 인덱스: ${idx}`);
*/

// slice() : 배열을 부분 추출하여 사본 배열로 반환

var foods = [`김말이`, '닭꼬치', '어묵', '볶음밥', '짜장면', '짬뽕']
console.log('==================================');
//indexOf(), slice(), reverse(), concat(), splice(), includes()


// var idx = foods.indexOf('볶음밥')


//indexof(element) : 배열 요소의 인덱스틑 알려줌.
//ex) 볶음밥이 몇번째 인덱스에 있니? 6개 정도면 카운트 해서 3번째라고 할수 있지만
//  배열 인덱스가 많이 있으면 세기가 힘들다. 그럴때 사용

//응용
/*
var idx=0;
for(var f of foods){
    if(f ==='닭꼬치') {
        break;
    }
    idx++
}
console.log(`찾은 인덱스: ${idx}`);
*/

// slice() : 배열을 부분 추출하여 사본 배열로 반환

var foods = [`김말이`, '닭꼬치', '어묵', '볶음밥', '짜장면', '짬뽕']
var copyFoods = foods.slice(2,5);
console.log(foods);
console.log(copyFoods);

// 3번부터 끝까지 추출
var copyFoods2 = foods.slice(3);
console.log(copyFoods2);

// 배열 전체복사 (처음부터 끝까지)
var copyFoods3 = foods.slice();
console.log(copyFoods2);

var nums = [10, 20, 30, 40, 50]

console.log('===========================');

// 사본 생성시 주의 사항 (변수는 원본의 주소를 공유/ slice는 원본의 데이터를 그대로 복사)
var numbers = [10, 20,30];
var numbers2 = numbers.slice();

numbers2[1] = 999;
numbers[0] = 777;

console.log(`원본: [${numbers}]`);
console.log(`사본: [${numbers2}]`);

console.log('===========================');


var nums = [10, 20, 30, 40, 50]
//reverse() : 배열을 역순으로 재배치, 원본이 변화함.
// 원본 변환를 하지 않는 경우
var numsCopy = nums.slice();
numsCopy.reverse(); 

console.log(nums);
console.log(numsCopy);



console.log('==================================');


//concat() : 배열 2개를 결합한 사본을 가져옴. / 앞에 쓴 배열이 앞으로 온다. / 

var arr1 = [50, 70 ,100];
var arr2 = [9, 5, 1, 10, 20];

var concatCopy = arr1.concat(arr2, arr1, arr1); // 배열 아이템들을 여러게 써도 된다.
console.log(concatCopy);
console.log(arr1);
console.log(arr2);

console.log('==================================');


//includes(element) : 배열에 특정 요소가 있는지 여부 확인. 논리값으로 반환.

var foods = [`김말이`, '닭꼬치', '어묵', '볶음밥', '짜장면', '짬뽕']
var result = foods.includes('닭꼬치');
console.log(`요소 탐색 여부: ${result}`);

var result2 = foods.includes('짜장면') ? '^ ^' : 'ㅜ ㅜ';
console.log(`요소 탐색 여부: ${result2}`);

if(foods.includes('짬뽕')) {
    console.log('잘 먹겠습니다.');
}else{
    console.log('ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ');
}

console.log('=======================');

//splice() : 배열의 요소를 제거 / 원본삭제
var pets = ['멍멍이', '야옹이', '짹짹이', '고란이'];

console.log(pets);

pets.splice(1,2); // 몇 번째 인덱스 부터 몇개를 지울건지를 () 안에 써줘야 한다.

console.log(pets);

pets.splice(0,1,'어흥이') ; // 0번 인덱스로부터 1개를 삭제하고 그 자리에 어흥이 삽입.
console.log(pets);

pets.splice(1,0,'징징이') ; // 인덱스를 지우지 않고 가운데 삽입.
console.log(pets);

// 맨뒤에 꽥꽥이를 삽입 할 때는 

pets.push('꽥꽥이');
console.log(pets);

//delete 카운터를 작성하지 않으면 시작부터 끝까지 삭제.
pets.splice(2);
console.log(pets);
