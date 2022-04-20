3강 Box-속성

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

overflow
박스 안의 내용이 박스보다 클 경우 넘치는 부분을 제어
visible(기본값) : 전체를 다 보여줌
hidden : 넘치는 컨텐츠를 숨김
auto : 넘치는 컨텐츠가 존재할 경우에만 스크롤바를 생성
scroll : 넘치는 컨텐츠가 없어도 스크롤바를 생성

opacity
요소의 투명도를 지정.
숫자 : 0부터 1사이의 소수점 숫자 (기본값 1)0에 가까울수록 투명해짐

4.강 글꼴, 문자

4-1 글꼴(font)
font 
글자 관련 속성들을 지정.
font-style: 글자 기울기를 지정
font-weight: 글자 두께를 지정
font-size: 글자 크기 지정
line-height: 줄 높이 지정
font-family: 글꼴 지정

font-style
글자 스타일(기울기)을 지정.
normal 스타일 없음 (기본값)
italic 이탤릭체
oblique 기울어진 글자

font-weight
글자 두께를 지정.
normal 기본 글자 두께, 400과 동일 (기본값)
bold 두꺼운 글자, 700과 동일
bolder 부모 요소보다 더 두껍게
lighter 부모 요소보다 더 얇게
숫자 100 ~ 900 까지의 100단위 숫자 9개 두께가 좀 더 다양한 글꼴들을 위한 설정

font-size
글자 크기를 지정.
단위 px, em 등 단위로 지정 (기본값 16px)
% 부모 요소의 비율로 지정

line-height
줄 높이를 지정.
normal 브라우저의 기본 정의를 사용 (1 ~ 1.4)
숫자 요소 자체 글꼴 크기의 배수로 지정
단위 px, em 등 단위로 지정
% 요소 자체 글꼴 크기의 비율로 지정

font-family
글꼴 모양을 지정.
글꼴명 글꼴 후보 목록을 지정

serif
sans-serif   글꼴 계열 이름을 지정 (글꼴 계열은 필수로 입력해야 함)
cursive 등

text-align
문자 정렬 방식을 지정.

left 왼쪽 정렬 (기본값)
right 오른쪽 정렬
center 중앙 정렬
justify 양쪽 정렬 (2줄 이상일 경우만 작동)

text-decoration
문자의 장식을 지정.
none 선 없음. (기본값)
underline 밑줄을 지정
overline 윗줄을 지정
line-through 문자를 가로지르는 선을 지정.

text-indent
문자의 들여쓰기를 지정.
- 음수값을 사용하면 내어쓰기가 됩니다.

단위 px, em, % 등 단위로 지정

letter-spacing, word-spacing
letter-spacing : 글자사이의 간격을 지정.
word-spacing : 단어사이의 간격을 지정.

단위 px, em, % 등 단위로 지정

color
문자의 색상을 지정
색상이름 브라우저에서 제공하는 색상의 이름 ex) red, orange, green 등
16진수 색상코드 16진수 색상코드로 지정 ex) #fff, #c9c6d1 등
RGB 빛의 삼원색 ex) rgb(255, 255, 255) 
RGBA 빛의 삼원색, 투명도 ex) rgba(255, 255, 255, 0.5)



5.강 배경
background
요소의 배경을 설정.
background-color 배경 색상
background-image 배경 이미지
background-repeat 배경 이미지의 반복 여부
background-position 배경 이미지의 위치
background-attachment 배경 이미지의 스크롤 여부
background-size 배경 이미지의 크기

background-color
요소의 배경 색상을 지정.
색상 요소의 배경 색상
transparent 투명색 (기본값)

background-image
요소의 배경에 이미지를 삽입.
none 이미지 없음 (기본값)
url(“경로”) 이미지 경로 URL

background-repeat
배경 이미지의 반복을 설정
repeat 배경이미지를 수직, 수평으로 반복(기본값)
repeat-x 배경이미지를 수평으로 반복
repeat-y 배경이미지를 수직으로 반복
no-repeat 반복 없음

background-position
배경 이미지의 위치를 설정.
%     왼쪽 상단 모서리는 0% 0% (x, y축) 오른쪽 하단 모서리는 100% 100% (기본값 0% 0%)
방향  top, bottom, left, right, center
단위  px, em 등 단위로 지정

background-attachment
요소가 스크롤될 때 배경 이미지의 스크롤 여부 설정.

scroll 배경 이미지가 요소를 따라서 같이 스크롤됨 (기본값)
fixed 배경 이미지가 뷰포트에 고정되어, 요소와 같이 스크롤되지 않음.
local 요소 내 스크롤 시 배경 이미지가 같이 스크롤 됨


background-size
배경 이미지의 크기를 설정.
auto 원본 이미지 크기로 표시 (기본값)
단위 
- px, em, % 등 단위로 지정 
- width, height 형태로 입력 (ex: 200px 150px) 
- width만 입력하면 비율에 맞기 지정됨

cover 
- 배경 이미지의 크기 비율을 유지하며, 요소의 더 넓은 너비에 맞춰짐
- 이미지가 잘릴 수 있음

contain 
- 배경 이미지의 크기 비율을 유지하며, 요소의 더 짧은 너비에 맞춰짐
- 이미지가 잘리지 않음, 다만 빈 공간이 보일 수 있음

background-단축사용법

6강_박스 띄우기

6_1 float 
요소를 좌우 방향으로 띄움(수평 정렬)
none 요소 띄움 없음 (기본값)
left 왼쪽으로 띄움
right 오른쪽으로 띄움

float - 단순 띄우기

clear - 띄움 해제

중첩 레이아웃에서 float으로 인한 부모요소 높이값 상실문제

해결책
원인: float이 해제되지 않았기 때문!

• 해결방안
1. 빈 형제 요소를 추가하여 clear속성 사용
2. 부모 요소에 overflow: hidden; 적용
3. 부모요소에 가상 클래스를 추가하여 해제
