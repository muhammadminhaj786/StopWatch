var msecEle = document.getElementById('Msec')
var secEle = document.getElementById('Sec')
var mintEle = document.getElementById('mint')

var msec = 0
var sec = 0
var mint = 0

var interval;

var stopBtn = document.getElementById('stopBtn')
stopBtn.style.display="none"
resetBtn = document.getElementById('resetBtn')
resetBtn.style.display="none"



function timer(){
    msec++
    msecEle.innerHTML=msec
    if(msec >= 100){
        sec++
        secEle.innerHTML=sec
        msec=0

    }else if(sec >=60){
        mint++
        mintEle.innerHTML=mint
        sec=0
    }
}




function startTimer() {
    interval = setInterval(timer, 10)
    stopBtn.style.display=""
    resetBtn.style.display="flex"

}

function stopTimer() {
    clearInterval(interval)
}


function reset() {
    clearInterval(interval)
    msec = 00
    sec = 00
    mint = 00
    msecEle.innerHTML = "00"
    secEle.innerHTML = "00"
    mintEle.innerHTML = "00"


}
