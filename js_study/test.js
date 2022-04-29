 
     var user = {
        kim1234:'kkk1234',
        lee4567:'lll4567',
        park9876:'ppp9876'
    }


// var userID = 'kim1234';

while(true){
    var userID = prompt('ID를 입력하세요.');
if (userID in user) {
    var userPW = prompt('PW를 입력하세요');
    if(user[userID] === userPW) {
        alert('로그인 성공')
        break;
    } else {
        alert('비밀번호가 틀렸습니다.');
    }
    
}else {
    alert('존재하지 않는 회원입니다.');
}
}



