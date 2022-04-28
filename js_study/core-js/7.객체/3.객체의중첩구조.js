
//객체의 중첩구조
//예시 : 웹사이트 게시판 데이터
var board = {
    totalCount: 2578, // 총 게시물 수
    admin:'abc1234',
    page: 258, //페이지 수
    currentpage: 3, // 현재 위치한 페이지
    prev: false, // 이전버튼 활성화 여부
    next: true, // 다음버튼 활성화 여부
    articleList:[
        {
            bno:792, //글번호
            title:'제3회 빅데이터 분석...', // 글제목
            viewCount:62836,//조회수
            regDate:'2021.10.22', // 등록일
            content:'어쩌고 저쩌고...', // 글내용
            wirter:'관리자', // 등록회원이름
            recommend:10,//추천수
        },
        {
            bno:791, //글번호
            title:'제출서류및일정...', // 글제목
            viewCount:114186,//조회수
            regDate:'2021.10.13', // 등록일
            content:'어쩌고 저쩌고...', // 글내용
            wirter:'관리자', // 등록회원이름
            recommend:10,//추천수
        },
        {
            bno:790, //글번호
            title:'고사장 추가안내', // 글제목
            viewCount:3691,//조회수
            regDate:'2021.10.13', // 등록일
            content:'어쩌고 저쩌고...', // 글내용
            wirter:'관리자', // 등록회원이름
            recommend:10,//추천수
        }
    ],
};


// 원하는 데이터 추출하기
// 이전버튼 활서화 여부 값 얻어내기.
console.log(board.prev);
// 게시물 목록 안의 게시물 개수
console.log(board.articleList.length);

// 2번째 게시물의 전체정보 791번글
console.log(board.articleList[1]);

// 1번째 게시물의 제목
console.log(board.articleList[0].title);

// 게시물 전체의 조회수 출력
for(var article of board.articleList) {
    console.log(article.viewCount);
}


