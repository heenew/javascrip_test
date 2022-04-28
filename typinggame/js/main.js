const wordInput = document.querySelector("#word-input")
const currentWord = document.querySelector("#current-word")
const scoreDisplay = document.querySelector("#score")
const timeDisplay = document.querySelector("#time")
const messageDisplay = document.querySelector("#message")

const GAME_TIME = 10;

let words = ["banana", "key", "car", "javascript", "scalper"]
let score = 0;
let time = 0;
let timeInterval;
let isPlaying = false;
let isReady = false;

time = GAME_TIME;

const API_URL = "https://random-word-api.herokuapp.com/word?number=100";

init()

// async await: 명령을 실행 하고 완료가 되면 그 다음 명령을 실행하는 명령어
// callback 과 promise의 단점을 보완하기 위해 추가됨 
/* function init(){
    const res = fetch(API_URL).then(res=>res.json()).then(data=>words = data);
    console.log(res)
} */
async function init(){
    const res = await fetch(API_URL);
    const data = await res.json();
    words = data.filter(item=>item.length < 7)
    isReady = true;  // 다음 단어가 준비 되면
    console.log(words)

}


wordInput.addEventListener("input", e=>{
    const typedText = e.target.value;
    const currentText = currentWord.innerText;
    if(typedText.toUpperCase() === currentText.toUpperCase() && isReady){  // 대소문자 구분 없이 비교를 위해 들어오는 알파벳을 대문자로 바꿔 비교
        addScore()
        setNewWord()
    }
    //console.log(typedText == currentText, typedText, currentText)
})

//게임 종료
function gameover(){
    console.log("gnme over!!")
    isPlaying = false
    clearInterval(timeInterval)
    timeInterval = null
    messageDisplay.innerText = "GAME OVER!!!"
    score = 0;
}

// 시간 카운트다운
function countDown(){
    console.log(time)
    time = time-1;
    timeDisplay.innerText=time;
    if(time === 0){
        gameover();
    }
}

function setNewWord(){
    time = GAME_TIME;
    wordInput.value="";
    messageDisplay.innerText="Now Playing!!!"
    // Math.ceil() -> 무조건 반올림
    // Math.round() -> 반올림
    // Matj.floor() -> 무조건 내림
    const randomIndex = Math.floor(Math.random() * words.length);
    currentWord.innerText = words[randomIndex]

    if(!isPlaying){  // 인터벌이 중복되는 현상을 막기 위해 게임이 실행중이면 timeInterval을 다시 실행하지 않는다.
        timeInterval = setInterval(countDown, 1000) // 1초마다 countDown 실행
        isPlaying = true;
    }
}


function addScore(){  // 점수 계산을 위한 함수
    score = score+1;
    console.log(score)
    scoreDisplay.innerText = score;
}

