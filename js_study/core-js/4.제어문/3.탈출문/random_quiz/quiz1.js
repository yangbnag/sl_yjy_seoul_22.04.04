/*1. 무한루프
1~50 사이의 무작위 숫자를 맞춰보세요 !!! 
>> 25
up!!!

>>30
down!!!

>>26
up!!!

>>27
딩동댕~~!!!*/


var randomNumber = Math.floor(Math.random()*50)+1;

while(true) 
{
    var inputNumber = +prompt('1~50 사이의 무작위 숫자를 맞춰보세요!!!') ;

    if (inputNumber > randomNumber)
     {
        alert('Down!!!');
    }

    else if (inputNumber < randomNumber) 
    { 
        alert('Up!!!');
    }

    else {

        alert('딩동댕~~!!!');
        break;        
    }


}

    
    



    
    
