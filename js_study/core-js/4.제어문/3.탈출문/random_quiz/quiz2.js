/*1. 2. 5번 제한 for break

1~50 사이의 무작위 숫자를 5번 안에 맞춰보세요.!!
>>25

UP!!! 
기회가 4번 남았습니다.
>>30

UP!!!
기회가 3번 남았습니다.
>>40

UP!!!
기회가 2번 남았습니다.
>>45

UP!!!
기회가 1번 남았습니다.
>>49

UP!!!
기회가 0번 남았습니다.
기회를 모두 소진했습니다. GAME OVER!!*/


var randomNumber = Math.floor(Math.random()*50)+1;
var count = 5;

while(true) 
{
    var inputNumber = +prompt('1~50 사이의 무작위 숫자를 5번 안에 맞춰보세요.!!') ;
    count--;

    if(count === 0) 
    { alert(`기회가 ${count} 번 남았습니다. \n 기회를 모두 소진했습니다. GAME OVER!!`);
        break;
    
    }

    else if (inputNumber > randomNumber)
     {
        alert(`Down!!! \n 기회가${count}번 남았습니다.`);
    }

    else if (inputNumber < randomNumber) 
    { 
        alert(`Up!!! \n 기회가${count}번 남았습니다.`);
    }

 
    else {

        alert(`딩동댕~~!!! ${count}번 만에 맞추셨습니다.`);
        break;        
    }


}



    
    



    
    
