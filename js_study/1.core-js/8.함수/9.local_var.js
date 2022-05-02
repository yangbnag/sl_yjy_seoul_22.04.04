
var y = 'global local y';
// 매개변수 x: 지역스코프
function outer(x) {
    // var y = 'outer local y';
    var z = 'outer local z';
    console.log(`x : ${x}`); // 매개변수 x를 참조.
    
    function inner() {
        var x = 'inner local x';
        // var y = 'inner local y';
        console.log(x);
        console.log(y);
        console.log(z);
    }
    inner();
}

var x = 'global x';

outer('outer parm x');


// 사이트 전체 정책적 할인율
var saleRate = 0.1; //전역변수

// 코드 400줄 ~~~~

// 임시이벤트로 할인율을 1시간동안만 20퍼로 상승

function eventSale() {
    var saleRate = 0.2; //임시 할인율변수    
}
function vipSalePolicy() {
    var saleRate = 0.3;
}

// 코드 500줄 ~~~ 
console.log(saleRate);