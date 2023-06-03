//get element by id's
var msecEle = document.getElementById('Msec')
var secEle = document.getElementById('Sec')
var mintEle = document.getElementById('mint')

//create variable and assign 0
var msec = 0
var sec = 0
var mint = 0

var interval;

//create timer function 
function timer(){
    msec++
    msecEle.innerHTML=msec
  //applying condition 
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
