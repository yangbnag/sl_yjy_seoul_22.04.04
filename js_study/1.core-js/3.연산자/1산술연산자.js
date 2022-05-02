//나눗셈연산과 나머지
console.log(27/5); // js는 정수개념이 없다. 실수나눗셈이 적용됨.
console.log(27%5);

// 나눗셈 뒤에 숫자가 앞보다 크면 앞이 나머지다.
console.log(5 % 4);
console.log(4 % 10);
console.log(7 % 8);
console.log(0 % 200);

// 0으로 나눌수 없다.
console.log(200 % 0);
console.log(10 / 0);

var num1 = 8, num2 = 5;
console.log(num1 % num2);


// 거듭제곱연산자(**) - ES6+
console.log(num2**2);

console.log('==================================================================');

// 증감연산자 (++,--) : 단항연산자
// 1증가, 1감소
var x = 3;
x++;
++x;

console.log(`x: ${x}`);

// 전위 연산(prefix), 후위 연산(postfix)
var a = 10;
// var b = a++; // a 뒤에 ++ 이 있어서 후위연산자로 b = a 를 먼저 수행하고 , a ++ 을 수행 
var b = ++a; // 전위 연산자로 ++ a 로 a 1 증가 후 증가 된 a가 b에 대입 됨.
console.log(`a: ${a}, b:${b}`);

var c = 5;
var d = ++c * 2;
console.log(`c:${c}, d:${d}`);

// a,b,c,d,e 의 값을 각각 구하시오. / a:11 , b:11 -> 132 , c : 11 , d : 11 , e: 131 <- 오답

// a,b,c,d,e 의 값을 각각 구하시오. / a:11 , b:11 , c : 6 , d : 12 , e: <- 
var e = --b + c++ * d;
// 풀이 d:(12) * c(6) + b(11-1) = 82 -> e는 82 그리고 마지막으로 c의 후위연산 ++를 해주면 c=7
console.log(`a:${a}, b:${b}, c:${c}, d:${d}, e:${e}`);
