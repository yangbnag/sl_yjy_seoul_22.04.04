/* quiz02
n개의 정수를 전달받아 그 중 최소값을 반환하는 함수 min을 정의하고

사용자에게 반복해서 숫자들을 입력받은 후 
min을 호출하여 최소값을 출력하세요.

입력을 그만둘때는 '그만'이라고 입력하도록
코드를 작성하세요
*/

//함수부
function min(numbers = []) {
    var minNum = numbers[0];
    for (var n = 0; n < numbers.length; n++) {

        if (minNum > numbers[n + 1]) {
            minNum = numbers[n + 1]
        }
    }
    return minNum;
}

var nums = [];
// 실행부
while (true) {
    var inputNum = prompt(`n개의 정수를 입력하세요.`);
    if (inputNum === '그만') break;
    nums.push(+inputNum);
}


var result = min(nums);
alert(result);



//ex) 1, 2, 3, 4 을 입력 받았을 때 최소 값인 1을 출력해야한다.
//1.함수를 만들때 매개변수를 배열 만들어 입력을 받는다.
//2.입력 받은 인수를 비교한다.
//3.입력 받은 인수중 가장 작은 숫자를 출력한다.
//4.그만이라고 입력하기 전까지 계속 반복 한다.

// ===================== ↓ 정답 =========== //

/*function min(numbers) {
    var minNum = numbers[0];
    for (var n of numbers) {
        if (n < minNum) {
            minNum = n;
        }
    }
    return minNum;
}

var nums = [];

while (true) {
    var inputMsg = prompt('숫자를 입력: ');
    if (inputMsg === '그만') break;
    nums.push(+inputMsg);
}

var result = min(nums);
alert(result);
*/