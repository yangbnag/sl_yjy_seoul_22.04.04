// OR 연산
console.log('hello'||'world'); // or 연산자에서 왼쪽이 true면 true 이므로 좌항 연산자 선택

// or에서 좌항이 false면 우항에 결과값에 따라서 결과가 달라진다. 우항 true 이므로 우항 선택
console.log(0||'안녕'); 

//AND 연산

// and 연산자는 좌항이 true여도 우항 결과값을 확인해야함. 우항 true우항 선택
console.log('HELLO' && 'WORLD'); 

// and 연산자는 좌항이 false면 false 이므로 좌항에서 연산 종료
console.log(null && '잘가'); 

console.log('=========================================응용=');

var x = 10 ;
x > 0 && console.log(`안녕하세요~~`); // 좌항이 true이고 우항을 실행 후 출력

/*
if (x>0) {
    console.log('안녕하세요~~');
}*/