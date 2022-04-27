/************** 배열과 오브젝트 **************** */

///////// array
const animals = ["lion", "rabbit", "monkey","cat", "dog"];
/* // animals.push("tiger"); // 배열 맨 뒤에 추가
// animals.unshift("dog");  // 배열 맨 앞에 추가
// animals.pop("dog");  // 해당 값 삭제
console.log(animals);

console.log(Array.isArray(animals));  // 해당 변수가 배열인가??
console.log(animals.indexOf("rabbit")); // 해당 값의 인덱스값

// splice -> 배열 자체를 바꿈
// slice -> 배열을 바꾸지는 않고 값만 반환
//animals.splice(0, 2);  // 0번 인덱스부터 2개의 값을 뺀다.
// animals.splice(animals.indexOf("monkey"), 3);  // "monkey"부터 3개의 값을 뺀다.
//console.log(animals);
const slicedAnimals = animals.slice(0, 2);  // 0번 인덱스부터 2번 인덱스 앞까지 
console.log(slicedAnimals, animals);  */

////// object -> 대상의 속성과 값(key, value 쌍을 이룸), 인덱스 번호는 없음
const monkey = {
    name: 'kiki',
    age: 5,
    weight: 40,
    gender: 'male',
    isCute: true,
    food: ["banana", "carrot", "potato"],
    home: {
        location: "zoo",
        size: "big",
        price: 3000,
    }
}
/* 
monkey.gender = "female" //  값 변경 가능 (const지만  object자체를 바꾼 것이 아니라 속성 값만 바꾼것이기에 가능)
// monkey = {gender: "male"}  // -> 불가능
console.log(monkey["name"])
console.log(monkey.gender)
console.log(monkey.food[1]) */

////// jason -> 데이터를 주고 받을때 사용(전송)
console.log(monkey)
const monkeyJSON = JSON.stringify(monkey)  // monkey를 json화
// console.log(monkeyJSON)
const parsedJSON = JSON.parse(monkeyJSON)  // json화 된 것을 사용할 수 있게 파싱
console.log(parsedJSON.name)