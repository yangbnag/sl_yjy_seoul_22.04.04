/*

//김철수가 중복되어 변수를 설정
var userName;
userName = '김철수';
// console.log(`${userName}님 안녕하세요~ 방가방가!`);
console.log(`${userName}님 오늘도 즐거운 하루되세요!`);

///// 1000 줄의 코드를 작성했다고 가정 한 후에 위에 김철수가 보이지 않을때
// 위에 김철수에게 했던 내용을 박영희에게 그대로 하려고 한다.

userName = '박영희';
console.log(`${userName}님 안녕하세요~ 방가방가!`);
console.log(`${userName}님 오늘도 즐거운 하루되세요!`);

///// 2000 줄의 코드를 작성했다고 가정 한 후에 위에 김철수가 보이지 않을때
// 위에 박영희에게 했던 내용을 홍길동에게 그대로 하려고 한다.

userName = '홍길동';
console.log(`${userName}님 안녕하세요~ 방가방가!`);
console.log(`${userName}님 오늘도 즐거운 하루되세요!`);

// 변수 userName가 있는지 중복확인하고 값을 다시 넣어야 하는 불편함.
// 또 방가방가 를 반갑습니다로 수정하려고 할때 2000줄 1000줄 1줄로 쫓아가면서 수정해야함.

*/
//핵심은 함수가 필요한 이유를 파악 할 것!
//===========================================================================//

// 함수 정의 (함수 만든다)
// 함수의 변수 이름은 동사적 느낌이 들도록. 
 // 중괄호는 블록이므로 if 처럼 ;을 쓰지 않는다. 
function callUserName(userName) {  
    if(typeof userName === 'number') {
        console.log('숫자로된 이름은 안됩니다~~');
        return; // 함수의 탈출문 -> 반복문의 break와 같은 효솨
    }
console.log(`${userName}님 안녕하세요~ 방가방가!`);
console.log(`${userName}님 오늘도 즐거운 하루되세요!`);  
console.log('====================================');                    
}

// 함수 호출(함수를 사용한다.)
callUserName('박찬호');
callUserName('김영희');
callUserName('둘리');
callUserName(1);