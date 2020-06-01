const showTime = document.querySelector('div');

function addZero(t) {
    if (t < 10) {
        t = '0' + t;
    }
    return t
}

function getCurrentTime() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds(); 
    showTime.textContent = `${addZero(h)}:${addZero(m)}:${addZero(s)}`;
}

getCurrentTime();

setInterval(getCurrentTime, 1000) 
