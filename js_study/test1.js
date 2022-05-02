{
    // 지역 변수를 선언하고 몇 가지 조작을 했지만 그 결과를 밖에서 볼 수 없습니다.
  
    let message = "안녕하세요."; // 블록 내에서만 변숫값을 얻을 수 있습니다.
  
    alert(message); // 안녕하세요.
  }
  
  alert(message); // ReferenceError: message is not defined