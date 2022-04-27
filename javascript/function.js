/********************* 함수 **********************/
// function

// const item1 = 3000;
// const item2 = 2000;
// const item3 = 5000;
// const loyalty = 1000;

// // console.log(item1 + loyalty)
// // console.log(item2 + loyalty)
// // console.log(item3 + loyalty)   비효율적 ***



// // function showPrice(price){   // 함수를 작성만 하고 호출을 하지 않으면 출력 안됨
// //     console.log(price+loyalty);
// // }
// // showPrice(item1)  // 함수 실행
// // showPrice(item2)
// // showPrice(item3) 


// // function showPrice(price){   
// //     return price + loyalty;
// // }
// // const price1 = showPrice(item1) 
// // const price2 = showPrice(item2)
// // const price3 = showPrice(item3)
// // console.log(price1)
// // console.log(price2)
// // console.log(price3)

// // const showPrice = function(price){
// //     return price + loyalty;
// // }
// // console.log(showPrice(item1))

// // const showPrice = function(){} 밑으로도 가능  but 윈도우에 등록이 안됨
// // 선언 전에 호출이 불가 (function은 선언 전에 호출 가능)
// // showPrice2(item1)  // 호출 불가
// const showPrice2 = (price) => {
//     console.log(price+loyalty)
// }
// showPrice2(item3)


// console.log(this)  // 윈도우를 가르킴

const obj = {  // 오브젝트 안에 함수 넣기 가능
    name: 'test',
    test1: function(){  // 오브젝트 자체를 가르킴
        console.log(this)
    },
    test2: ()=>{  // 윈도우를 가르킴
        console.log(this)
    }
}
// obj.test1();
// obj.test2();

const a = obj.test1;
const b = obj.test2;
a();  // 윈도우를 가르킴
b();  // 그대로 윈도우를 가르킴    ===> this는 호출되는 시점에 가르키는 것을 출력
