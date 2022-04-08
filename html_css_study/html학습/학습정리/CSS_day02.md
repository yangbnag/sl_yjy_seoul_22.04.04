2강 CSS선택자

상속(inherit)
상속이란 부모요소에 적용한 스타일이 후손요소들에
게까지 영향을 주는 특성을 말합니다. 
 
- 하지만 모든 속성들이 상속되는 것이 아닙니다. 
 
# 상속되는 속성들 (글꼴,폰트)
1. font 관련 속성: font-size, font-weight, font-style, lineheight, font-family 
2. color 
3. text-align, text-indent, text-decoration 
4. letter-spacing 
5. opacity

우선순위
 우선순위란 HTML 요소에 동일한 속성이 적용될 경우 어떤 것을 우선으로 적용하는지에 대한 내용입니다. 다음과 같은 규칙에 의해 우선순위가 결정됩니다 
 
# 우선순위 규칙 
1. 명시도 점수가 높은 선언이 우선 
2. 점수가 같은 경우 가장 마지막에 해석되는 선언이 우선 
3. 명시도 점수는 상속보다 우선 
4. !important가 적용된 선언방식이 다른것보다 우선 
 
# 명시도 점수 
1. !important: 무한대 점 
2. 인라인 스타일: 1000점 
3. 아이디 선택자: 100점 
4. 클래스 선택자: 10점 
5. 태그 선택자: 1점 
6. 전체 선택자: 0점 


3강 Box속성

px,%
px 단위는 픽셀이라는 뜻이며 화면에 고정적인 길이를 의미하며 절대적인 수치를 의미합니다.
- 1px은 디바이스마다 고정크기가 다를 수 있습니다.
- % 단위는 부모요소 대비 비율적 영향을 받습니다.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <style>

        div {
            border: 2px solid gray;
        }
        .root {
            width: 80%;
        }
        .parent {
            /* %: 부모요소 대비 비율 */
            width: 50%;
        }
        .child {
            width: 50%;
        }

    </style>
</head>
<body>
    

    <!-- .root>.parent>.child*2 -->
    <div class="root">Root
        <div class="parent">Parent
            <div class="child">Child1</div>
            <div class="child">Child2</div>
        </div>
    </div>

</body>
</html>

em, rem
em 단위는 요소 자기 자신의 font-size에 영향을 받습니다.
- 예를 들어 h1태그의 font-size를 10px로 지정하고 width를5em으로 지정하면 가로 길이는 5 x 10px의 50px이 됩니다.
- rem단위는 html태그에서 지정한 font-size에 영향을 받습니다.
- html태그에는 기본값으로 16px이 정의되어 있습니다. 따라서 따로 font-size를 조절하지 않으면 2rem은 32px이됩니다