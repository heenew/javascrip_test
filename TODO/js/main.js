const inputText = document.querySelector(".input-text");
const addButton = document.querySelector(".add-button");
const list = document.querySelector(".list");

const likeButtons = document.querySelectorAll(".like");




function addItem(){
    if(inputText.value.trim() === "") return;

    //like  하트
    const like = document.createElement("span");
    const likeIcon = document.createElement("i");
    like.classList.add("like");  // 클래스를 추가
    likeIcon.classList.add("material-symbols-outlined");
    likeIcon.innerText="favorite"
    like.appendChild(likeIcon); 

    //item  내용
    const item = document.createElement("span");
    item.classList.add("item");
    item.innerText = inputText.value;


    //manege  체크, 엑스
    const manage = document.createElement("span"); 
    const checkIcon = document.createElement("i");  // 체크 아이콘
    const closeIcon = document.createElement("i");  // 엑스 아이콘 생성
    checkIcon.classList.add("material-symbols-outlined","check");
    closeIcon.classList.add("material-symbols-outlined","close");
    checkIcon.innerText = "check"
    closeIcon.innerText = "close"
    manage.classList.add("manage");
    manage.appendChild(checkIcon);
    manage.appendChild(closeIcon); // manage에 checkIcon과 closeIcon 넣음


    const li = document.createElement("li");  // html요소를 하나 만들겠다


    // event
    like.addEventListener("click", e =>{
        const target = e.target;
        const text = target.innerText === "favorite" ? "thumb_up" : "favorite";
        target.innerText = text;
    }) 
    checkIcon.addEventListener("click", e =>{
        const target = e.target.parentNode.parentNode;
        target.classList.add("done");

    }) 
    closeIcon.addEventListener("click", e =>{
        const target = e.target.parentNode.parentNode;
        list.removeChild(target)
    }) 


    li.appendChild(like)
    li.appendChild(item);
    li.appendChild(manage);
    list.appendChild(li);  // ul태그(list) 안에 자식 요소로 엘리멘트를 넣겠다

    inputText.value = "";  // inputText 내용 초기화
    inputText.focus()
}

inputText.addEventListener("keypress", e => {  // 인자를 이벤트로 넘겨받음
    if(e.keyCode === 13){
        addItem();
    }
})


likeButtons.forEach(like=>{
    like.addEventListener("click", ()=>{
        console.log('clicked');
    })
})


addButton.addEventListener("click", addItem);  // 버튼 클릭시 addItem에 inputText의 value값이 들어감
