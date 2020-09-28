const axios = require('axios');
const cheerio = require('cheerio');

const main = async () => {
  // 검색 위치 설정
  const location = '서울';
  // 문자 인코딩
  const encodingLocation = encodeURIComponent(location);

  // axios 시간 측정
  console.time('axios time');

  // HTML 데이터 요청
  const { data } = await axios.get(
    `https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=${encodingLocation}+%EB%82%A0%EC%94%A8`
  );

  console.timeEnd('axios time');

  // cheerio 시간 측정
  console.time('cheerio time');

  // HTML DOM 객체
  const $ = cheerio.load(data);

  // DOM 접근 및 데이터 추출
  const temperature = $('.main_info .info_data .todaytemp').text();

  console.timeEnd('cheerio time');

  // 콘솔 출력
  console.log(`${location} 온도: ${temperature}도`);
};

main();
