/* ************ DOM(Document Object Model) ************** */
// const title = document.getElementById("title");  // document=html문서
// const list = document.getElementsByClassName("list");
// title.style.color = "red"
// console.log(title, list)

// querySelector
const title = document.querySelector("#title")  // id는 샾(#), 클래스는 점(.)
const list = document.querySelector(".list")
const items = document.querySelectorAll(".item")
const btn = document.querySelector("#btn")
const naver = document.querySelector(".naver")

// title.style.color = "red"
// btn.innerText = "button"
// title.innerHTML = "<input type='text'/>"  // title라는 don안에 html을 삽입

// // list.remove()
// list.firstElementChild.remove()
// list.lastElementChild.innerHTML = "<a>link</a>"

// console.log(title, list, items)

btn.addEventListener("click", function(){
    alert("탕수육")
})

naver.addEventListener("click", (e)=>{
    e.preventDefault();  // 기본으로 설정된 것을 막음(링크 이동이 안됨)
    console.log(e)
    alert("네이버!!!")
})