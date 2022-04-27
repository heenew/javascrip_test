/* ***************** forEach, map, reduce, filter ****************** */

const coronaCases = [
    {city: 'Seoul', case: 1000},
    {city: 'Daejeon', case: 500},
    {city: 'Degu', case: 300},
    {city: 'Busan', case: 100},
    {city: 'Gwangju', case: 50},
]

// forEach: 반복문을 돌려주는 기능을 함, function()안 인자: 각각의 요소
// coronaCases.forEach(function(corona, index){
//     console.log(corona, index);  // (원소, 인덱스)
// })

// map: 어떠한 배열을 가공하여 새로운 형태의 배열을 만들때
// const coronaCities = coronaCases.map((corona) => {
//     //console.log(corona)
//     // return corona.city
//     return `${corona.city}의 확진자 발생 수는 ${corona.case}`
// })
// console.log(coronaCities)


// filter: 배열에서 특정한 값을 가진 데이터를 필터링 할때
// const dangerousCity = coronaCases.filter(function(corona, index){
//     return corona.index < 3;
// })
// console.log(dangerousCity)

// reduce: 배열의 값을 이용하여 특정 값을 도출하거나 재가공할 떄 
// const numbers = [10, 123, 22, 33, 44, 55];
// const totalNumber = numbers.reduce((acc, cur)=>{  // acc: 지금까지 쌓여있는 값 ,cur: 현재의 값, 세번째에 index값도 추가 가능
//     console.log(acc, cur);
//     return acc+cur;  // 다음 acc로 반환
// })
// console.log(totalNumber);

const totalCases = coronaCases.reduce((acc, cur)=>{  // acc: 지금까지 쌓여있는 값 ,cur: 현재의 값, 세번째에 index값도 추가 가능
    console.log(acc, cur);
    return acc+cur.case;  // 다음 acc로 반환
}, 0)  // 초기화. 0부터 시작 해라.
console.log(totalCases);



