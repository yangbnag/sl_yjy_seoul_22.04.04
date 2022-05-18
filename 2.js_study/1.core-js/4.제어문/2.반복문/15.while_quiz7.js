
// 25를 입력했을 때 1234567890123456789012345 //

var targetNum = 27 ;
var tnCopy = targetNum;
var i = 1 ;

var memoryNum = '';

while (i<=targetNum) {
    memoryNum += i % 10 ;
    i++    
}
console.log(memoryNum);

