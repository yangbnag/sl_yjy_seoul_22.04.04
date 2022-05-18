// identifier : 식별자
// 데이터를 구분하기 위한 고유한 이름(변수, 함수...)

//1. 식별자 이름은 대소문자를 구별한다.
var apple = '사과';
apple = '맛있는 사과';

var APPLE = '맛 더럽게 없는 사과';
var Apple = '에이뽈';

console.log(apple);

//2. 숫자로 시작하거나 숫자만으로 구성하면 안됨!
// var 999 = '구백구십구'; (x)
// var 7lucky7 = '럭키럭키'; (x)
var lucky7 = 777; //(o)
var a99le = '사과임~' //(o)

//3. 특수문자는 $, _ 외 사용불가능
// var hello! = '반가워~!'; // (x)
// var hello^^ = '하잇~'; //(x)
var $bye$ = '괜찮아'; // (o)
var my_family = '내 가족'; //(o)


//4. 띄어쓰기 불가능
// var our vip members address='서울시'; (x)
var our_vip_members_address='서울시'; // (o) snake case (비추)
var ourVipMembersAddress='서울시'; // (o) camel case (추천)

//5. 키워드(예약어)는 사용하지 말 것!
// keyword : 미리 정해져있는 기능적 단어
// var var = 11; (x)
// var if = 32; (x)
var If = 32; (o)


// 이름은 구체적이고 명확하고 일관성있게 지을 것!
var a = '홍길동'; // 불명확한 변수 이름 -> // var memberName; (명확한 변수 이름)
var z = '서울시'; // 불명확한 변수 이름 -> // var memberAddress; (명확한 변수 이름)
var f = 30; // 불명확한 변수 이름 ->  // var memberAge; (명확한 변수 이름)
var k = '19990101'; // 불명확한 변수 이름 -> // var userBirthDay; (명확한 하지만 일관성이 없는 변수 이름)