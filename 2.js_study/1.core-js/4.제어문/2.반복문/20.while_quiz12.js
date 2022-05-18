/*
quiz11
정숫값 : 12
1
2
3
4
6
12
약수는 6개 입니다.

*/

var n = 15 ;
var d = n;
var i = 1 ;
var memory ='';
var count = 0;


while(i <= n) {

    if (n % i === 0 ) {
        memory += `${i}\n`
        count++;
            }
   
    i++;

}

memory += (`약수의 개수는 ${count}개 입니다.`);
console.log(memory);



/*
var n = +prompt('정수값: ');
var i = 1;
var count = 0; //약수의 개수 저장
var message = '';
while (i <= n) {
    if (n % i === 0) {
        message += i + '\n';
        count++;
    }
    i++;
}
message += `약수의 개수는 ${count}개입니다.`;
alert(message); */