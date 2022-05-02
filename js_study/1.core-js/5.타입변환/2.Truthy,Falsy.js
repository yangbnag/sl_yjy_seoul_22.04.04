
//Falsy

if(undefined) console.log('ok1');
if(null) console.log('ok2');
if(0) console.log('ok3');
if('') console.log('ok4');
if(NaN) console.log('ok5');

//Truthy
if(1)console.log('ok6');
if(-77.999)console.log('ok7');
if('메롱')console.log('ok8');
if('  ')console.log('ok9');
if([1,2,3])console.log('ok10');
if([])console.log('ok11');

console.log('===============================');

var num = 7;
 if(num%2) { // 나머지 1 1=truthy 실행
     console.log('홀수 입니다.');
 } else{
     console.log('짝수 입니다.');
 }

 var apple = 0;
 if (apple) { // 변수값이 0이니까 falsy 라서 else 실행
     console.log(`사과가 ${apple}개 있습니다.`);
 }else{
     console.log(`사과가 하나도 없습니다.`);
 }

 console.log('===============================');

 var result ;

 if(result) {
     console.log('안녕!'); // 출력 되지 않음 - 변수 선언후 초기화 x = undefined = falsy
 }

 /* 무한 루프 / 99 = truthy
 var n = 99;
 while(99) {
     
 }
 */