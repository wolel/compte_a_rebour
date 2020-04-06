/**
 * function resetTime() {
    document.querySelectorAll("td.date");}
 *
 */


function countDown() {
    var now = new Date();
    var eventDate = document.getElementById('eventDate');
    eventDate = new Date(2020, 12, 25);

    var currentTime = now.getTime(); // le temps de maintenant
    var eventTime = eventDate.getTime();
    var remTime = eventTime - currentTime;

    var s = Math.floor(remTime / 1000);
    var m = Math.floor(s / 60)-30;
    var h = Math.floor(m / 60)-30;
    var d = Math.floor(h / 24)-29 ;

    h %= 24;// modulo
    m %= 60;
    s %= 60;

   if (h < 10){
        h = "h" + h
    }
    if (m < 10){
        m = "m" + m
    }
    if (s < 10){
        s = "s" + s
    }
    if (s + m + h + d <= 0){
        resetTime()
    }

    //h = (h < 10) ? "0" + h : h;
    //h=condition--? true----: false

    /**h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;*/

    document.getElementById('days').textContent = d;
    document.getElementById('days').innerHTML = d;

    document.getElementById('hours').textContent = h;
    document.getElementById('minutes').textContent = m;
    document.getElementById('seconds').textContent = s;

    stop = setTimeout(countDown , 1000);
    stop;


}

var btnStart = document.getElementById('btnStart');
var btnStop = document.getElementById('btnStop');

btnStart.addEventListener( "click", countDown);
console.log(btnStart);

//------------------
var stop;
var stopCount  = function(){
    clearTimeout(stop);
};


btnStop.addEventListener("click", stopCount);
console.log(btnStop);
