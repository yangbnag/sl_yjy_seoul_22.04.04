/*
    Q5)
    n개의 정수와 탐색할 정수를 전달받아 
    탐색할 정수가 n개 중에 있다면 
    몇개 있는지 반환하고, 각각 몇번 인덱스에
    있는지 아래 그림과 같이 출력하세요.
    
*/

function search(arr = [], targetNum) {
    if (arr.includes(targetNum)) {
        var count = 0;
        for (var i=0; i < arr.length; i++) {
            if (arr[i] === targetNum)
                count++;
        }
        var idxNum = [];
        for (var i=0; i < arr.length; i++) {
            if (arr[i] === targetNum)
                idxNum.push(i)
        }
        
    }    

    return (`${targetNum}은 ${count}개 있습니다.\n ${idxNum}`)
}


nums = [1,5,1,7,1];

result = search(nums,1);
console.log(result);



/*
function findNumberCount(arr, targetNum) {
    var idxArr = []; //인덱스위치들을 저장할 배열
    for (var i=0; i< arr.length; i++) {
        if (arr[i] === targetNum) {
            idxArr.push(i);
        }
    }
    return idxArr;
}

// 배열의 개수를 알려주는 함수
function count(arr) {
    return arr.length;
}

var numbers = [9, 9, 10, 33, 9, 44, 9, 44, 11, 9];

var idxArray = findNumberCount(numbers, 9);
console.log(idxArray);
console.log(`타겟의 개수: ${count(idxArray)}`);
*/
