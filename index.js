let btn20El=document.getElementById("btn20");
let btn30El=document.getElementById("btn30");
let btn40El=document.getElementById("btn40");
let btn1El=document.getElementById("btn1");
let timerTextEl=document.getElementById("timerText");

let timer;
let seconds;

function setTimer(value){

    clearInterval(timer);

    seconds =value;

    timerTextEl.textContent=seconds + "seconds left";

    timer=setInterval(function (){
        seconds--;

        timerTextEl.textContent=seconds + "seconds left";

        if(seconds == 0){
            clearInterval(timer);


            setTimeout(function (){
                timerTextEl.textContent="Your moment is complate"
            },1000)
        }
    },1000)

   
}

btn20El.onclick=function (){
    setTimer(20);
}

btn30El.onclick=function (){
    setTimer(30);
}

btn40El.onclick=function (){
    setTimer(40);
}

btn1El.onclick=function (){
    setTimer(60);
}