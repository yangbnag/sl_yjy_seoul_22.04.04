/*
var scoreList = [97, 88, 100, 92, 55, 23];
var total = 0;



for(var i = 0; i < scoreList.length; i++) { 
    // .length를 쓸때의 이점 : 배열 전체를 반복할때 반복 회수를 따로 계산하지 않아도 된다.
    total += scoreList[i];
}
// 평균 구하기
var average = total/scoreList.length; 
// 총점의 평균을 나눌때도 배열의 총개수를 자동으로 구할수 있는 .length 를 사용.

//평균 반올림하기
var digit = 2;
var prettierAvg = Math.round(average*10 ** digit)/10 ** digit; // 소수점 둘째짜리 표현 나머지는 반올림 하는 방법

//ex) 87.5555 * 100 = 8755.55 -> Math.round로 반올림 하면 8755 -> 다시 나누기 100 하면 87.55;

console.log(`총점:${total}점, 평균: ${prettierAvg}점`);

*/

//배열의 for - of 반복문

var scoreList = [97, 88, 100, 92, 55, 23];
var total = 0;

for(var n of scoreList) { 
//구동 원리 (for (of 오른쪽에 배열을 입력(장바구니역할) 왼쪽에 변수를 입력 (장바구니에서 꺼낸 과일을 담을 접시 역할)))
    total += n;
} // 홀수번째 학생들의 점수합계 같이 전체 반복이 아닌 경우에는 for of 문을 사용 하면 안된다.
// for of 문은 인덱스를 별도 관리 할 수 없다.

console.log(total);