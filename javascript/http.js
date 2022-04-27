/* ************** HTTP API **************** */
// GET 방식: 주소에 정보를 실어서 보냄
// POST 방식: 내용에 정보를 실어서 보냄 

// http request
const url = "https://api.covid19api.com/country/south-korea/status/confirmed/live?from=2021-09-01T00:00:00Z&to=2021-09-09T00:00:00Z"
const corona = fetch(url).then(res=>res.json())
    .then(data=>console.log(data))
// 인자가 하나이면 괄호 생략 가능 (res) 
// return 생략 가능  res=>res.json()