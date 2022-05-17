
var solutionNum = '';

function calculator(x) {
    for (let i = 1; i <= x; i++) {
        // console.log(5);

        if (x % i === 0) {
            solutionNum += `${i} \n`;
        }
    }
}

console.log(calculator(7));


/*
let calculator1 = 5%1;
let calculator2 = 5%2;
let calculator3 = 5%3;
let calculator4 = 5%4;
let calculator5 = 5%5;

console.log(calculator1,calculator2,calculator3,calculator4,calculator5);
*/