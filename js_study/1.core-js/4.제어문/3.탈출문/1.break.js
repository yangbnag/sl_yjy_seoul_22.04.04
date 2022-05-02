
for (var i=0; i<10; i++) {
    if (i === 5 ) {
        break;
    }
    console.log(i);
}// end for

console.log('반복문 끝!');

console.log('==========================');

// 중첩 반복문에서의 break;

for(var i=0; i<3; i++) {
    if(i===2) break
    for (var j=0; j<2 ;j++) {
        if (i === j) {
           break;
        }
console.log(`${i}, ${j}`);
    } // end inner for
} // end outer for

console.log('==========================');


var m = 0;
while (m++ <5) { // ++m과 m++ 의 차이 설명
    console.log(m);
    // if (m%3===0) break;
}
console.log(`반복문 종료 후 m : ${m}`);









