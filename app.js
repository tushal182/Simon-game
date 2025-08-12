let gameSeq = [];
let userSeq = [];

let btns = ["green", "yellow", "red", "blue"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if(started == false){
        console.log("key press");
        started = true;
    }

    levelUp();
});

function gameFlash(btn) {
    btn.classList.add("gameflash");
    setTimeout(function() {
        btn.classList.remove("gameflash");
    },300);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    },300);
}

function levelUp() {
    userSeq = [];
    level++;

    h2.innerText = `level ${level}`;

    let rdmIdx = Math.floor(Math.random() * 4);
    let rdmcolor = btns[rdmIdx];
    let rdmBtn = document.querySelector(`.${rdmcolor}`);
    gameSeq.push(rdmcolor);
    console.log(gameSeq);

    gameFlash(rdmBtn);
}

function checkAns(idx) {
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your Score is ${level} <br> Press any key to start again.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        }, 200)
        reset();
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);   

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset() {
    gameSeq = [];
    userSeq = [];
    started = false;
    level = 0;
}
