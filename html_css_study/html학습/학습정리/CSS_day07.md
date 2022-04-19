9강 Flexible Box

Flexiblebox
:수평 레이아웃을 만드는 강력한 기능 flex box!

- 요소들은 기본적으로 블록 개념이 많아서 자동으로 수직으로 쌓
이기 때문에 수직 레이아웃에 대해서는 큰 불편을 느끼지 않습
니다.
- 그러나 요소를 가로로 배치하는 수평 레이아웃의 경우 CSS를 사
용하는 개발자들에게 큰 고통을 선사합니다.

* float는 clearfix문제 때문에
* inline-block은 의도치 않은 공백발생 문제 때문에 불편

Flex box의 핵심 개념2가지
Container : 정렬대상인 Item들을 감싸는 요소
Items : 실제로 정렬될 대상

Flex Container :
display : flex container를 정의
flex-direction flex items의 주 축을 설정
flex-wrap flex items의 줄 바꿈을 설정
flex-flow flex-direction과 flex-wrap의 단축 속성
justify-content 주 축의 정렬 방법을 설정
align-content 교차 축의 정렬 방법을 설정 (2줄 이상)
align-items 교차 축에서 items의 정렬 방법을 설정 (1줄)

display
: Flex Container를 정의
flex block특성의 container를 정의
inline-flex inline특성의 container를 정의

display : flex와 inline-flex의 차이

flex-direction
Items의 주 축(main-axis)의 방향을 설정.

row : Items를 수평축(왼쪽에서 오른쪽으로)표시 (기본값)
row-reverse : Items를 row의 반대 축으로 표시
column : Items를 수직축(위에서 아래로) 표시
column-reverse : Items를 column의 반대 축으로 표시

flex-wrap
Items의 줄 바꿈을 설정

nowrap 모든 Items를 한 줄에 표시 (기본값)
wrap Items를 여러 줄로 묶음
wrap-reverse Items를 wrap의 역 방향으로 여러 줄로 묶음

flex-flow
flex-direction과 flex-wrap의 단축 속성.
flex-flow : row-reverse nowrap;

justify-content
주 축(main-axis)의 정렬 방법을 설정.

flex-start : Items를 시작점부터 정렬 (기본값)
flex-end : Items를 끝점부터 정렬
center : Items를 가운데 정렬
space-between : 시작 Item은 시작점에, 마지막 Item은
끝점에 정렬되고 나머지 Items는 사이에 고르게 정렬
space-around : Items를 균등한 여백을 포함하여 정렬

align-content
- 교차 축(cross-axis)의 정렬 방법을 설정.

- 주의할 점은 flex-wrap 속성을 통해Items가 여러 줄(2줄 이상)이고 여백이 있을 경우에만 사용할 수 있음.

stretch : container의 교차 축을 채우기 위해Items를 늘림 (기본값)
flex-start : Items를 시작점부터 정렬
flex-end : Items를 끝점부터 정렬
center : Items를 가운데 정렬
space-between : 시작 Item은 시작점에, 마지막 Item은 끝점에 정렬되고 나머지 Items는 사이에 고르게 정렬
space-around : Items를 균등한 여백을 포함하여 정렬

align-items
- 교차 축(cross-axis)의 정렬 방법을 설정.

- Items가 한 줄일 경우 많이 사용하며, container에 align-content속성이 없거나 기본값(stretch)이어야 합니다.

stretch : container의 교차 축을 채우기 위해Items를 늘림 (기본값)
flex-start : Items를 시작점부터 정렬
flex-end : Items를 끝점부터 정렬
center : Items를 가운데 정렬
baseline : Items를 문자 기준선에 정렬

Flex items
order : Flex Item의 순서를 설정
flex-grow : Flex Item의 증가 너비 비율을 설정
flex-shrink : Flex Item의 감소 너비 비율을 설정
flex-basis : Flex Item의 공간 배분 전 기본 너비를 설정
flex : flex-grow, flex-shrink, flex-basis의 단축 속성
align-self : 교차 축에서 Item의 정렬 방법을 설정

order
Item들의 순서를 설정.

- 숫자가 클 수록 순서가 밀림.
- 음수가 허용됨

사진 1

flex-grow
- Item의 증가 너비 비율을 설정
- 숫자가 크면 더 많은 너비를 가짐..
숫자 Item의 증가 너비 비율 (기본값 0)

사진2

flex-shrink
- Item의 감소 너비 비율을 설정
- 숫자가 크면 더 많은 너비가 감소함.
숫자 Item의 증가 너비 비율 (기본값 1)

사진3
사진4

flex-basis
- Item의 공간 배분 전 기본 너비를 설정.
- 값이 auto일 경우 width 등의 속성으로 너비를 설정할 수 있음.
- 하지만 flex-basis를 설정하면 자체 width값이 무시됨.

auto 가변 Item과 같은 너비 (기본값)
단위 px, em 등 단위로 지정

사진5
사진6

flex
- flex-grow, flex-shrink, flex-basis의 단축 속성
- flex-grow를 제외한 속성은 생략 가능
- 생략시 flex-basis의 경우 기본값이 auto가 아닌 0으로 적용되는 것에 주의할 것!

사진7

align-self
교차 축(cross-axis)에서 개별 Item의 정렬방법을 설정.
- align-items속성은 container내부의 모든Item에 대해 정렬 방법을 설정하지만 이 속성은 일부 Item만 설정할 때 사용.
- align-items 속성보다 우선함.

auto : container의 align-items를 상속 (기본값)
stretch : container의 교차 축을 채우기 위해 Item을늘림
flex-start : Item을 시작점부터 정렬
flex-end : Item을 끝점부터 정렬
center : Item을 가운데 정렬
baseline : Item을 문자 기준선에 정렬

사진8
