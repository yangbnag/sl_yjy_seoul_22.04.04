function line(){
    console.log('==============================')
}

// function add() {
//     console.log('함수 실행!!');
//     return 1+2;
// }
// console.log('==============');
// var result = add()
// console.log('================');
// console.log(result);

line();

function add(n1,n2){
    return n1+n2;
}

console.log(add(5,7));

line();

result = (n1,n2) => n1+n2;

console.log(result(1,2));