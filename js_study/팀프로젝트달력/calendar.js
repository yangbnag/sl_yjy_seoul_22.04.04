
/*
console.log(new Date()); // 현재 날짜(로컬 기준) 객체 만들기 
console.log(new Date(2021, 11, 6)); // 지정한 날짜 객체 만들기 
console.log(new Date('2021-12-06T03:24:00')); // 지정한 날짜 객체 만들기

// Mon Dec 06 2021 14:00:23 GMT+0900 (한국 표준시)

var date = new Date(); // 현재 날짜(로컬 기준) 가져오기 
var utc = date.getTime() + (date.getTimezoneOffset() * 60 * 1000); // utc 표준시 도출 
var kstGap = 9 * 60 * 60 * 1000; // 한국 kst 기준시간 더하기 
var today = new Date(utc + kstGap); // 한국 시간으로 date 객체 만들기(오늘)

console.log(today);

// 출처: https://songsong.dev/11 [송송은 오늘도 열심히 코딩 하네] */