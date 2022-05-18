/*
몇 cm부터 : 155
몇 cm까지 : 190
몇 cm마다 : 5

155cm 49.50kg
160cm 54.00kg
...

190cm 81.00kg

표준몸무게 공식은 (키 - 100 ) * 0.9
*/

var height1 = 155; 
var height1Copy = height1;
var memoryh = '' ;
var memoryw = '' ;
var memory = '';
var weight = 0;
var height2 = 170; 
var term = 5;
var termCopy = 5;

while(height1 <= height2) {

memoryh += height1
weight = ((height1 - 100) * 0.9);
memoryw +=  weight
memory += '\n'
height1 = height1 + term ;

}

console.log(`${memoryh}cm${memoryw}kg${memory}`);

/* var lower = +prompt('몇 cm부터 : '); //키 시작점
var upper = +prompt('몇 cm까지 : '); //키 끝점
var step = +prompt('몇 cm마다 : '); //키 격차

var height = lower; //키를 저장할 변수

var message = '';
while (height <= upper) {
    var weight = (height - 100) * 0.9;
    message += `${height}cm ${weight}kg\n`;
    height += step;
}
alert(message); */
