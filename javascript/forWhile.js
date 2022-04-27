
/* *****************반복문******************* */
const animals = [
    {name:'lion', size:'big'},
    {name:'monkey', size:'medium'},
    {name:'dog', size:'small'},
]

// const num = "10";
// if(num == 10){  // ==: 데이터타입 비교 안함, ===: 데이터타입까지 비교(추천)
//     console.log('10입니다.')
// }

// const animal = 'lion';
// switch(animal){
//     case 'lion':
//         console.log('사자입니다.');
//         break;
//     case 'monkey':
//         console.log('원숭이입니다.');
//         break;    
//     default:
//         console.log('동물이 아닙니다.')
//         break;
// }


// console.log(animals.length);

// for(let i=0; i<animals.length; i++){
//     console.log(animals[i]);
// }

// for(let animal of animals){
//     console.log(animal)
// }


let i=10;
while(i > 0){
    console.log(i);
    i--;
}

삼항연산자
const num = 10;
if(num > 10){
    console.log(true);
} else{
    console.log(false);
}

num > 10 ? console.log(true) : console.log(false)