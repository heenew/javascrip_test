/* ********* 데이터타입 ******************/
//////// String, Number, boolean, null, undefined
const name = "scalper";
const age = 30;
const isMale = true;
const isFrmale = false;
let money = null;
let girlFriend = undefined;

console.log(name + "/" + age + "/" + isMale);
console.log(`내 이름은 ${name} 이고 나이는 ${age} 입니다.`);


let fruits = "사과, 딸기, 포도, 참외";
fruits = fruits.split(", ");
console.log(fruits[2]); 