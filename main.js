// ************HOURS**********
// 12 hours = 360 degrees angle
// 1 hour = 360/12 = 30 degrees angle
// 1 hour 30 degree so n hours 30h degrees 30h + mm/2

// ********** MINUTES*************
// 60 mins = 30 degrees
// 1 min = 30/60 = 1/2
// 1 min 30 degree so n minutes 1/2 minutes degrees will move

// 60 min = 360 degrees
// 1 min = 360/60 = 6 degrees
// n minutes  = 6m

// *********** SECONDS **********
// 60 sec = 360 degrees
// 1 sec = 360/60 = 6 degree
// n sec = 6s degrees


let hr = document.getElementById('hours');
let min = document.getElementById('minutes');
let sec = document.getElementById('seconds');

function TimeDisplay(){
    let date = new Date()
    
    //Getting hours, minutes, seconds from date
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = 30*hh + mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss;

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
}

setInterval(TimeDisplay, 1000);