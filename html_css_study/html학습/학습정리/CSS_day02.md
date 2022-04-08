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


em, rem
em 단위는 요소 자기 자신의 font-size에 영향을 받습니다.
- 예를 들어 h1태그의 font-size를 10px로 지정하고 width를5em으로 지정하면 가로 길이는 5 x 10px의 50px이 됩니다.
- rem단위는 html태그에서 지정한 font-size에 영향을 받습니다.
- html태그에는 기본값으로 16px이 정의되어 있습니다. 따라서 따로 font-size를 조절하지 않으면 2rem은 32px이됩니다.

vw,vh
vw, vh 단위는 뷰포트를 기준으로 설정되는 길이단위이며, 0~100사이의 값을 가집니다. 
- vw는 width를 지정할 때 사용하며, vh는 height를 지정할 때 사용합니다.
- 뷰포트란 화면 전체 크기를 의미하며 만약 어떤 이미지의높이값을 100vh로 지정하면 데스크탑 화면이든 태블릿, 모바일화면과 관계없이 높이가 화면전체를 꽉 채우게 됩니다.

3-2 BOx 관련 속성
width, height

width 
요소의 가로길이를 지정
px, em, % 등 단위로 지정
기본값 auto(100%)를 사용

height
요소의 세로길이를 지정
px, em, % 등 단위로 지정
기본값 auto(0px)를 사용

max-width, max-height
요소의 최대 가로, 세로길이를 지정
px, em, % 등 단위로 지정
기본값 none

min-width, min-height
요소의 최소 가로, 세로길이를 지정
px, em, % 등 단위로 지정
기본값 0

margin
요소의 바깥쪽 여백을 지정
px, em, % 등 단위로 지정
기본값 0
값을 %로 지정하면 부모요소의 width의 비율로 여백을 가짐
좌우 마진을 auto로 지정하면 박스가 중앙 정렬됨

padding
요소의 내부 여백을 지정
- px, em, % 등 단위로 지정
- 기본값 0값을 %로 지정하면 부모요소의 width의 비율로 여백을 가짐
- 패딩을 사용하면 그만큼 박스 크기가 증가합니다.
- ex) 가로세로 100px인 박스에 상하좌우 20px의 패딩을 적용하면 박스크기가 140 x 140 
  이됨

border
  요소의 테두리선을 지정
  border-width 선의 두께 medium
  border-style 선의 종류 none
  border-color 선의 색상 blac

box-sizing
padding, border에 의해 박스 사이즈가 조절되는 경우를 제어하기 위해 사용.

content-box(기본값): 박스 사이즈에 padding, border가 더해짐
border-box: 박스 사이즈에 padding, border를 더하지 않음

display
요소가 화면에 보여지는 특성을 지정.

block: 블록 요소를 지정
inline: 인라인 요소를 지정
inline-block: 인라인 요소이면서 가로, 세로 너비 지정 가능한 요소로 지정
none: 요소를 사라지게 함
기타: flex, grid 등