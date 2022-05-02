/*
- Quiz. 
아래 요구사항에 맞는 코드를 작성하고 
브라우저에서 실행하여 테스트하세요.
- 요구사항
1. 변수에 배열 ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수']을 저장하세요.   
2. 사용자에게 삭제할 멤버 이름을 입력받고 해당 멤버를 배열에서 삭제시킨 뒤 삭제 완료 후의 배열을 출력해서 보여주세요.
3. 배열에 없는 이름을 입력하면 'xxx는 잘못된 이름입니다.'라고 출력한 후 다시 삭제할 이름을 입력할 수 있도록 하세요.
4. 전체멤버를 정확하게 삭제할때까지 프로그램은 계속되어야 합니다.
*/

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

var singer = ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수'];
var singerCopy = singer.slice();


while (true) { // 전체멤버를 정확하게 삭제할때까지 프로그램은 계속되어야 합니다.
    var input = prompt(`현재멤버: [${singerCopy}]\n 삭제할 이름을 입력하세요.`); // 삭제할 멤버를 입력받을 입력창

    if (singerCopy.includes(input)) { // includes로 입력된 값이 배열에 있는지 확인
        var n = singerCopy.indexOf(input); // 참이면 indexOf로 배열자리수 확인
        singerCopy.splice(n, 1); // splice로 배열 자리수에서 1개를 삭제
        alert(`삭제완료!\n남은멤버: [${singerCopy}]`);

    } else {
        alert(`${input}은 잘못된 이름 입니다.`); // 배열에 없는 이름을 입력하면 'xxx는 잘못된 이름입니다.
        alert(`${singerCopy}`);

    }
    if (singerCopy.length <= 0 ) {
        alert('모든 멤버가 삭제되었습니다.');
        break;
    }
}