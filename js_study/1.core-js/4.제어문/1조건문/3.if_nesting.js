

var height = +prompt('당신의 키는?');

if (height >= 140) { 
    var age = +prompt('나이를 입력해주세요.');

if(age>=8) {
    alert('놀이기구에 탑승할 수 있습니다.');

 } else if (age >= 6) {
        alert('6세 이상은 보호자 동반시 탑승 가능 합니다.');
    } else { alert('나이 제한 때문에 놀이기구에 탑승할 수 없습니다.');}
    
} else{
    alert('키 제한 때문에 놀이기구에 탑승할 수 없습니다.');
}

/*var height = +prompt('당신의 키는?? ');

if (height >= 140) {
    var age = +prompt('당신의 나이는?? ');
    if (age >= 8) {
        alert('놀이기구에 탑승할 수 있습니다.');
    } else if (age >= 6) { 
        alert('보호자 동반시 탑승할 수 있습니다.');
    } else {
        alert('나이 제한 때문에 놀이기구에 탑승할 수 없습니다.');
    }
} else { 
    alert('키 제한 때문에 놀이기구에 탑승할 수 없습니다.');
}

alert('오늘 하루 즐거운 시간되세요!'); */