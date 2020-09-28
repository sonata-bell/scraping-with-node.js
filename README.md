# Node.js 에서 웹 스크래핑 하는 방법

## 1. 실행 방법

1. 소스 코드 다운로드
2. VS Code로 소스 코드 열기
3. VS Code 터미널 실행
4. 'npm install' 또는 'npm i' 명령어 실행(node_modules 다운로드)
5. app.js의 location 변수에 원하는 지역 변경
6. 'node app' 명령어 실행
7. 출력 값 확인

## 2. jsdom vs cheerio 비교

1. 문법

   - jsdom: JavaScript 문법으로 작성
   - cheerio: jQuery 문법으로 작성

2. 성능

   - jsdom보다 cheerio가 최소 4~5배 더 빠름

3. 결론
   - 개인적으로 jQuery 문법을 좋아하지는 않지만, 스크래핑 속도가 cheerio가 훨씬 더 빠르기 때문에 cheerio를 사용하는 것을 추천
   - 스크래핑 속도에 대한 또 다른 정보 및 라이브러리가 있다면 oo_ri@naver.com 으로 해당 내용을 보내주시면 감사하겠습니다.
