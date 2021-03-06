1강. CSS 기초
CSS(Cascading Style Sheets)란?
 CSS란 HTML 등의 마크업 언어로 작성된 문서가 웹사이 트에 표현되는 방법을 정해주는 언어입니다. 
 
 레이아웃, 폰트, 색상처리 등의 디자인 요소를 HTML과 완전히 분리시켜 구조화된 HTML을 만들기 위한 언어입니다. 
 
- 이렇게 하면 디자인에 필요한 부분은 CSS가 전담하기 때문에 웹블리셔와웹프로그래머 
  간의 협업이 훨씬 용이해집니다. 
 
- HTML문서에 CSS를 적용하는 방법은 내부 스타일시트, 외부 스타일시트,인라인스타일시트
  라는 3가지 종류가 있습니다. 

내부 스타일 시트
내부 CSS는 문서의 표현을 위한 명령들을 HTML문서 안에 <style>태그로 기재하여 HTML 내부에 함께 저장되는 형태입니다.

<html> 
<head> 
 <style > -- 스타일 시작 
 p { color: orange; } 
 </style> -- 스타일 끝 
</head> 
<body> 
 <p> Hello~~ CSS!</p> 
</body> 
</html> 

외부 스타일 시트
외부 CSS는 문서의 표현을 위한 명령들을 따로 CSS파일(확장자 .css)로 저장해두어 HTML문서에 파일명으로 연결해주는 형태입니다. 

<html> 
<head> 
 <link rel=“stylesheet” href=“css/style.css”> -- 스타일 
파일 연결 
</head> 
<body> 
 <p> Hello~~ CSS!</p> 
</body> 
</html> 

인라인 스타일 시트
인라인 스타일시트는 요소에 직접 스타일을 하는 방식이며, 유지보수에 부담을 주므로 사용을 권고하지 않습니다.

<body> 
 <p style=”color: red;”> Hello~~ CSS!</p> 
</body>

@import
@import는 css파일에서 다른 css파일을 불러오는 방식입니다.
@import url(“./common.css”)

CSS 선택자(Selector)
선택자란 CSS로 UI를 디자인할 때 “어디를 어떻게 꾸며줄까??” 라는 질문에“어디”에 해당하는 부분입니다.

      h1 { color : blue; background : yellow; } 
 
    선택자
             속성  속성값    속성        속성값
                      선언부


2강. CSS선택자
1.기본 선택자

전체 선택자 (*) : 전체 선택자는 모든 태그를 지정할 때 사용하는 선택자입니다.
태그선택자 :  태그 선택자는 태그 이름을 그대로 가져다 쓰는선택자입니다.
클래스 선택자 : HTML 요소에 class로 붙인 이름을 가져다 쓰는 선택자입니다.
               ‘.’기호를 붙여서 표기합니다.
아이디 선택자 : HTML 요소에 id로 붙인 이름을 가져다 쓰는 선택자입니다.    
                ‘#’기호를 붙여서 표기합니다. 

2.복합 선택자

일치 선택자 :  선택자 2개를 동시에 만족하는 요소를 선택합니다. 
               ex)li.orang 
자식 선택자 : 현재 요소 내의 바로 아래 나오는 요소만을 가리키는 선택자입니다.
               ex) ul > .orang /* 맨 뒤 선택자가 타겟, 앞에는 조건 */
후손 선택자 : 후손 선택자는 바로 인접 자식이 아니어도 후손 요소 중에 어느 단계에 
              있기만 해도 선택합니다.
              ex) ul .orang /* 맨 뒤 선택자가 타겟, 앞에는 조건 */
그룹 선택자 : 
인접 형제 선택자 : 현재 요소 바로 뒤에 나오는 형제 요소 한개만을 선택합니다.
              ex) .orang + li /바로 위형이 .orang을 가진 요소를 선택
일반 형제 선택자 : 현재 요소 바로 뒤에 나오는 형제 요소 전체를 선택합니다.
              ex) .orang ~ li
속성선택자 : 속성이나 속성값을 이용해서 선택.
              ex) <style>[type=password]{}</style>

3.가상요소 선택자

가상클래스 선택자
hover : 요소에 마우스를 올렸을 때
active : 요소를 클릭했을 때
focus : 탭 키 등으로 포커스했을 때

수도 클래스 선택자
first-child : 요소 중 첫번째 요소
last-child : 요소 중 마지막 요소
nth-child(n) : 요소 중 n번째 요소 / (n키워드 사용시 0부터 해석)
before 해당 요소 앞에 가상 요소 추가
after 해당 요소 뒤에 가상 요소 추가
nth-of-type(n) 같은 종류의 요소 중 n번째 요소
not(selector) 해당 선택자 빼고 선택