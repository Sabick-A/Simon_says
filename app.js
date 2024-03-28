let gameSeq=[];
let userSeq=[];
let level=0;
let started=false;
let idx=0;
let btns=["Yellow","Blue","Red","Purple"];
let buttons=document.querySelectorAll(".btns");
for(button of buttons){
    button.addEventListener('click',function(){
        userFlash(this);
        let x=this.classList;
        userSeq.push(x[1]);
        console.log(userSeq)
        if(userSeq[idx]==gameSeq[idx]){
            if(idx==gameSeq.length-1){
                levelUP();
            }
            else{
                idx++;
            }
        }
        else{
            GameReset(level);
        }
    });
}
document.addEventListener("keypress",function(){
    if(!started){
    console.log("game started");
    started=true;
    levelUP();
    }
});

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },180);
}

function gameFlash(btn){
    btn.classList.add("gameFlash");
    setTimeout(function(){
        btn.classList.remove("gameFlash");
    },180);
}
function levelUP(){
    setTimeout(function(){
        idx=0;
    userSeq=[]
    level++;
    let he3=document.querySelector("h3");
    he3.innerText=`level ${level}`
    let x=RandomColor();
    let btn=document.querySelector(`.${x}`)
    gameFlash(btn);
    gameSeq.push(x);
    console.log(gameSeq);
    },1000);
}

function RandomColor(){
    let ind=Math.floor(Math.random()*3);
    let element=btns[ind];
    return element;
}

function GameReset(){
    let he3=document.querySelector("h3");
    he3.innerHTML=`Your Score is ${level-1} <br> Press any Key to start`;
    gameSeq=[];
    userSeq=[];
    idx=0;
    level=0;
    started=false;
}