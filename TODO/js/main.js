const inputText = document.querySelector(".input-text");
const addButton = document.querySelector(".add-button");
const list = document.querySelector(".list");

const likeButtons = document.querySelectorAll(".like");




function addItem(){
    if(inputText.value.trim() === "") return;

    //like
    const like = document.createElement("span");
    const likeIcon = document.createElement("i");
    like.classList.add("like");
    likeIcon.classList.add("material-symbols-outlined");
    likeIcon.innerText="favorite"
    like.appendChild(likeIcon); 

    //item
    const item = document.createElement("span");
    item.classList.add("item");
    item.innerText = inputText.value;


    //manege
    const manage = document.createElement("span");
    const checkIcon = document.createElement("i");
    const closeIcon = document.createElement("i");
    checkIcon.classList.add("material-symbols-outlined","check");
    closeIcon.classList.add("material-symbols-outlined","close");
    checkIcon.innerText = "check"
    closeIcon.innerText = "close"
    manage.classList.add("manage");
    manage.appendChild(checkIcon);
    manage.appendChild(closeIcon);


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
    list.appendChild(li);  // 자식 요소에 엘리멘트를 넣을때 사용하는 메서드

    inputText.value = "";
    inputText.focus()
}

inputText.addEventListener("keypress", e => {
    if(e.keyCode === 13){
        addItem();
    }
})


likeButtons.forEach(like=>{
    like.addEventListener("click", ()=>{
        console.log('clicked');
    })
})


addButton.addEventListener("click", addItem);
