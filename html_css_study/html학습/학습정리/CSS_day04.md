6_2강 position

position
요소의 위치 지정 방식을 설정

static 지정 방식 없음 (기본값)
relative 요소 자신을 기준으로 배치
absolute 부모 요소를 기준으로 배치
fixed 브라우저(뷰포트)를 기준으로 배치
sticky 스크롤 영역을 기준으로 배치

position과 함께 사용하는 속성

top,bottom : position 기준에 맞는 위, 아래쪽 거리를 설
auto 브라우저가 계산 (기본값)
단위 px, em등 단위로 지정
% 위치상의 부모요소의 height의 비율 로 지정 음수값 허용

left,right : position 기준에 맞는 왼쪽, 오른쪽 거리를 설정.
auto 브라우저가 계산 (기본값)
단위 px, em등 단위로 지정
% 위치상의 부모요소의 width의 비율로지정 음수값 허용


stack order
요소 쌓임 순서(Stack order)
- 요소가 쌓여 있는 순서를 통해 어떤 요소가더 위에 쌓이는지를 결정 (Z축)
1. static을 제외한 position속성의 값이 있을 경우 가장 위에 쌓임
2. position이 존재한다면 z-index속성의 숫자값이 높을 수록 위에 쌓임
3. position이 존재하고 z-index속성의 숫자값이 같다면 나중에 작성한 요소일수록 위에 쌓임
