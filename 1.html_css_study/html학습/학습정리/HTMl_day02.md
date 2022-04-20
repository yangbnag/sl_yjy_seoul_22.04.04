
[인라인 텍스트 태그]
 - 인라인 요소의 특징을 가짐.

 1.a 
  - a 요소는 href속성을 통해 다른 페이지나 같은 페이지의 특정 위치, 파일, 이메일주소, 또는 다른 URL로 연결할 수 있는 하이퍼링크를 생성합니다.

  - a 태그 안의 콘텐츠는 링크의 설명을 나타내야 합니다

  *현재 페이지에서 다른페이지로 넘어갈때 target을 사용. (보통 회원가입할때)
    <a href="http://www.naver.com">네이버링크</a>
    
    <a href="http://www.google.com" target="_blank">구글</a>

    우리 사이트의 다른 링크로 이동 (상대경로)
    gitbash에서 사용했던 폴더간 이동 명령어 사용.

    상위 폴더 ../ 하위 폴더 ./ 또는 폴더,파일명 입력

    *<블록> <블록> 블록 태그안에 블록,인라인 가능
    *<인라인><인라인> 인라인 태그안에는 블록 태그 안됨.

    <a href="tel:+821045669981">문의전화</a>

    <a href="mailto:yanbam@naver.com">메일문의</a>

    <div id="top">
        <h1>안녕안녕~~</h1>
        <p style="height:2000px;">   <!-- 스크롤 만드는 태그 -->
            반가워요~~ 오늘은 수요일!
        </p>
    </div>
    
    <a href="#top">위로 이동</a>

2.abbr, b, mark, em, strong (강조를 위할때 웹페이지 상에서의 디자인때문에 사용 하면 안된다.)
   - abbr 요소는 준말 또는 머리글자를 나타냅니다. 선택속성인 title을 사용하면 준말의 전체 뜻이나   
      설명을 제공할 수 있습니다

   - b 요소는 독자의 주의를 끌기 위한 용도로 사용합니다. 요약키워드, 리뷰의 제품명 등 특별한 중요성을 가지고 있지는 않지만 굵게 표시할 부분에 b를 사용합니다
   
   - mark 요소는 사용자의 관심을 하이라이팅할 때 사용합니다.

   - em 요소는 단순한 의미 강조를 표시합니다. 중첩이 가능하며 중첩될 수록 강조의 의미가 강해지며 정보통신 보조기기등에서 강하게 발음됩니다.
    - strong 요소는 아주 높은 중요도를 가진 곳을 표시하기 위해 사용합니다.


3.span, br
   -span 요소는 인라인 텍스트 콘텐츠를 위한 공용 컨테이너로, 본질적으로 아무 의미가 없습니다.
   - 블록 요소의 div와 매우 유사한 용도로 사용됩니다.
   
   - br 요소는 빈 태그이며 닫는 태그가 필요하지 않습니다. 문장의 줄바꿈을 설정합니다



[멀티미디어 태그 & 냉장 컨테츠]
 img-이미지를 삽입하는 태그 (닫는 태그가 없음 = 자식태그를 가질수 없음)
  <img src="" alt=""> src 와 alt 속성은 img의 필수 속성 이다. 
  (웹에서 나오는 사진 크기는 별도 설정이 없으면 저장된 크기 그대로 출력)
  
   src : 이미지의 위치(필수)
   alt : 이미지의 대체텍스트(필수)
   width : 이미지의 가로너비 
            
            (가로만 조정해도 세로도 조정됨 
            / 가로 세로 중 하나만 지정하면 나머지부분은 비율에 맞춰 자동조정)
   
   height : 이미지의 세로너비 
   
   srcset : 브라우저에게 제시할 이미지 URL과 원본 크기의 목록을 정의(w,x) (중요x)
   sizes : 미디어 조건과 해당 조건일 때 이미지 최적화 크기의 목록을 정의(중요x)

 audio - 소리 컨텐츠를 삽입하는 태그
   요새 추세는 iframe을 사용.

 iframe : 다른 HTML 페이지를 현제 페이지에 삽입.
  ex )  
  
  <iframe width="100%" height ="800px" src="http://soongu.github.io" frameborder="0"></iframe>

  유튜브 동영상 가지고 오기 - 유튜브 영상 고르고 우클릭 후 소스코드 복사 - src에 붙여넣기

canvas : 
- canvas 요소는 스크립트를 사용하여 그래픽이나 애니 메이션을 렌더링하는 요소입니다.
- canvas를 제대로 사용하려면 자바스크립트에 대한 지식이 필요합니다. 
- 이 장에서는 간단한 캔버스 사용 예시만을 확인하고 넘어가겠습니다.

script :  자바스크립트 코드를 문서에 포함하거나 참조할 때 사용 합니다. 
 (자바스크립트를 다음에 배울때 해보겠습니다. ex)

 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

<style>
        .box {
        width: 300px;
        height: 300px;
        background : orange;
        margin : 100px;
</style>


</head>
<body>

    <div class="box">

        <script>
            const $box = document.querySelector('.box');
            $box.onclick = e => {
                alert('박스 줄이기!');
                $box.style.background = 'red';
                $box.style.width = '150px';
                $box.style.height = '150px';
            };
            
            </script>


    </div>


</body>
</html>


4.표 컨텐츠 태그
 table : table 요소는 표를 만들기 위해 사용합니다.
         table은 표의 행을 설정하는 tr 요소, 그리고 열의 제목을 지정하는 th, 
         그리고 열 데이터를 지정하는 td를 포함합니다.
         <table> <tr><td><td></tr></table> 표 - 행 - 열 순으로 마크업
         
         테이블 빨리 작성하는 법 'table>tr*3>td*4'

 rowspan : 행 병합       <th rowspan="2">공연시간</th>
 colspan : 열 병합       <td colspan="2">미취학 아동 일반 요금의 50%</td>

 
 
 5. 입력양식 (form)
  
   form : form요소는 웹 서버에 정보를 제출하기 위한 양식을 정의하는 요소입니다.

   -  action 전송한 정보를 처리할 /URL (ex_ 로그인 정보를 입력받은후 처리해줄 서버주소)
   -  name 고유한 양식의 이름
   -  method 서버로 전송할 HTTP 방식 /GET(검색할때 쓰는 방식), POST(보안 할때 쓰는 방법)
   -  autocomplete 사용자가 이전에 입력한 값으로 자동완성 기능을 사용할 것인지 여부/on, off 
   -  novalidate 서버로 전송시 양식 데이터의 유효성을 검사하지 않도록 지정./논리값(Boolean)
       * 모든 사이트에는 기본적으로 논리검사가 지정되어 있습니다.
   
   -  target 서버로 전송 후 응답받을 방식을지정./ _self, _blan

   input : input 요소는 사용자에게 입력 받을 데이터 양식을 지정합니다. 
           input은 빈 태그입니다.

    * 빈태그 : hr, br, img, input, meta       

    -  type 입력받을 데이터의 종류 / 별도 정리


               input의 type속성들

                text / 일반 텍스트 
                password / 비밀번호 가려지는 양식
                email / 이메일
                search / 검색
                checkbox / 체크박스
                radio / 라디오 버튼 / 같은 name 속성 그룹 내 하나만 선택 가능
                number / 숫자
                button / 일반 버튼 / <button>처럼 사용
                submit / 서버 전송 버튼 / form내용을 서버로 전송
                reset / 초기화 / form내부 양식 모두 제거
                file / 파일
                range / 범위 컨트롤 / min, max, step, value 속성 사용
                hidden / 보이지 않지만 서버로 전송할 내용 / value속성으로 값을 지정

    -  value 양식의 초기값 <게시판 글수정, 회원정보수정 등 초기값이 필요한 경우에 활용.>
    -  disabled 양식을 비활성화 / 논리값 <수정이 불가능하게함. ex)링크된 품절상품 클릭 금지>
    -  placeholder 사용자가 입력할 값의 힌트 / text / type이 text, search, tel, url,email일 경우만
    -  checked 양식이 선택된 상태로 시작 / 논리값 / type이 checkbox, radio일 경우만 
        (기본적으로 많이 선택하는 사항을 나열할때 ex 국밥집 온라인 주문시 공기밥추가 여부)
    -  name 양식의 이름
    -  readonly 수정 불가한 읽기 전용 / 논리값 = disable

   label : label 요소는 입력양식의 제목 역할을 합니다.
           *input의 입력 범위의 시작을 더 넓게 만들어준다.

           for 라는 속성을 사용하여 입력양식과 연결할 수 있습니다.
    
   textarea : textarea는 여러 줄의 일반 텍스트 양식을 만듭니다.
              rows속성으로 초기에 보여줄 행 수를 지정할 수 있습니다.

   fieldset, legend : 같은 목적의 양식을 그룹화(fieldset) 하여 제목(legend) 을 지정합니다.
   (거의안씀. 중요x)

   selct, datalis, optgroup, option
    : 옵션(option)의 선택메뉴(select)나 자동완성(datalist)를 제공합니다.