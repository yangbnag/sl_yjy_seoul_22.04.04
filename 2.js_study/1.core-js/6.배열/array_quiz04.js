//push() : 맨뒤로 인덱스 입력
//pop() : 맨뒤의 인덱스 삭제
//shift() : 맨 앞의 인덱스 삭제
//unshift() : 맨 앞의 인덱스 삭제

//indexOf():인덱스 자리수리검색, 
//slice():인덱스복사/사본으로 가짐, 
//reverse():배열역배치, 
//concat():배열결합, 
//splice():인덱스지정삭제,추가, 
//includes():인덱스 검색 후 있다 없다의 논리값변환

// 0 ~ 100 점 사이
// 사용자가 입력한 숫자로 입력회수 실행


/* 
 - 학생 수를 입력 받는다 (1~80).
 - 입력 받은 학생 수 만큼 점수를 입력 받는다 (0~100). 
 - 입력 받은 숫자를 점수대별로 저장한다.
 - 저장 받은 점수대별 학생의 수를 *로 출력한다.
*/
/*
while (true) {
    var stnum = +prompt(`학생 수를 입력해주세요.`);
    if (stnum < 0 || stnum > 80) {
        alert('다시 입력해주세요 (1~80명)')
    } else {
        alert(`${stnum}명의 점수를 입력해주세요.`);
        break;
    }
}

var stScore = []; //studentScore
var totalScore = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // 학생 점수의 분포 배열

while (true) {
    var score = +prompt(`${stnum}명의 점수를 입력해주세요.`);
    if (score > 100 || score < 0) {
        alert('점수를 다시 입력해주세요 (1~100점)')
    } else {
        stScore.push(score);
    }
    if (stnum === stScore.length) {
        break
    }
}

for (var n of stScore) {
    if (parseInt(stScore[n]/10) === 0){
        totalScore[0] += n;      
        }
        else if(parseInt(stScore[n]/10) === 1){
            totalScore[1] += n;  
        }
}
*/

// ========================== 2시간 풀었음_실패↑ // ↓ 정답=================

/* 
 - 학생 수를 입력 받는다 (1~80).
 - 입력 받은 학생 수 만큼 점수를 입력 받는다 (0~100). 
 - 입력 받은 숫자를 점수대별로 저장한다.
 - 저장 받은 점수대별 학생의 수를 *로 출력한다.
*/


//학생 수 입력 받기
var stuNum;
while (true) {
    stuNum = +prompt(`학생 수를 입력해주세요.`);
    if (stuNum >= 1 && stuNum <= 80) {
        break;
    }
    alert('1~80 사이의 숫자를 입력하세요.');
}

alert(`${stuNum}명의 점수를 입력해주세요`);

//학생 점수 배열
var scoreList = [];
//분포 배열
var distributions = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

var num = 1; //학생번호

//학생들 점수 입력받기
while (scoreList.length < stuNum) {
    var score = +prompt(`${num}번: `);

    //입력점수 검증
    if (score < 0 || score > 100) {
        alert('0 ~ 100점 사이로 입력하세요!');
        continue;
    }
    scoreList.push(score);
    num++;
}



//분포 배열 완성하기 [0,0,2,1,0,1,0,1,1,2,2]
// scoreList[0] : 23 -> distributions[2]++ -> distributions[23/10]++
// scoreList[1] : 55 -> distributions[5]++ -> distributions[55/10]++
// scoreList[2] : 100 -> distributions[10]++ -> distributions[100/10]++
// scoreList[3] : 100 -> distributions[10]++

for (var i = 0; i < scoreList.length; i++) {
    distributions[parseInt(scoreList[i] / 10)]++;
}
//[0,0,2,1,0,1,0,1,1,2,2]
// console.log(distributions);

var star = '';
for (var i = 0; i < distributions.length; i++) {

    if (i < distributions.length - 1) {
        star += `${i*10} ~ ${i*10+9} : `;
    } else {
        star += `100 : `;
    }
    for (var j = 0; j < distributions[i]; j++) {
        star += '*';
    }
    star += '\n';
}
alert(star);