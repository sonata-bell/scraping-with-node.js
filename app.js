const axios = require('axios');
const { JSDOM } = require('jsdom');

const main = async () => {
  // 인코딩
  const location = encodeURIComponent('서울');

  // 요청 URL
  const html = await axios.get(
    `https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=${location}+%EB%82%A0%EC%94%A8`
  );

  // DOM 객체
  const document = new JSDOM(html.data).window.document;

  // 검색 지역 온도 출력
  const temperature = document.querySelector('.main_info .info_data .todaytemp').innerHTML;

  console.log(`현재 온도: ${temperature}도`);
};

main();
