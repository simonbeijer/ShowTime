let date = new Date();

console.log(date.toDateString());
console.log("Year", date.getFullYear());
console.log("Month", date.getMonth());
console.log("Day", date.getDay());
console.log("Time", date.getTime());
console.log("Hour", date.getHours());
console.log("Minutes", date.getMinutes());

let dateMonth = date.getMonth();
let dateDay = date.getDay();
let dateTime = date.getTime();
let dateHours = date.getHours();
let dateMinutes = date.getMinutes();
let dateSeconds = date.getSeconds();

function addZero(i) {
    if(i < 10) {
    i = "0" + i
    }
    return i;
}


function updateTime() {
    let date = new Date();
    let dateH = date.getHours();
    let dateM = date.getMinutes();
    let dateS = date.getSeconds();

    dateH = addZero(dateH);
    dateM = addZero(dateM);
    dateS = addZero(dateS);

    document.querySelector(".dateDiv .time").innerText = dateH + ":" + dateM + ":" + dateS;
    update = setTimeout(function() {updateTime()}, 500)
    console.log("uppdaterat");
}

updateTime();









/**
 * Switch case for determent which month it is
 */
switch(dateMonth) {
    case 0:
            document.querySelector(".dateDiv .month").innerText = "Januari";
        break;
    case 1:
            document.querySelector(".dateDiv .month").innerText = "Februari";
        break;
    case 2:
            document.querySelector(".dateDiv .month").innerText = "Mars";
        break;
    case 3:
            document.querySelector(".dateDiv .month").innerText = "April";
        break;
    case 4:
            document.querySelector(".dateDiv .month").innerText = "Maj";
        break;
    case 5:
            document.querySelector(".dateDiv .month").innerText = "Juni";
        break;
    case 6:
            document.querySelector(".dateDiv .month").innerText = "Juli";
        break;
    case 7:
            document.querySelector(".dateDiv .month").innerText = "Augusti";
        break;
    case 8:
            document.querySelector(".dateDiv .month").innerText = "September";
        break;
    case 9:
            document.querySelector(".dateDiv .month").innerText = "Oktober";
        break;
    case 10:
            document.querySelector(".dateDiv .month").innerText = "November";
        break;
    case 11:
            document.querySelector(".dateDiv .month").innerText = "December";
        break;
        default: 
        document.querySelector(".dateDiv .month").innerText = "Finns igen information";
}


/**
 * Switch case for determent which day it is
 */
switch(dateDay) {
    case 1:
            document.querySelector(".dateDiv .day").innerText = "Måndag";
        break;
    case 2:
            document.querySelector(".dateDiv .day").innerText = "Tisdag";
        break;
    case 3:
            document.querySelector(".dateDiv .day").innerText = "Onsdag";
        break;
    case 4:
            document.querySelector(".dateDiv .day").innerText = "Torsdag";
        break;
    case 5:
            document.querySelector(".dateDiv .day").innerText = "Fredag";
        break;
    case 6:
            document.querySelector(".dateDiv .day").innerText = "Lördag";
        break;
    case 0:
            document.querySelector(".dateDiv .day").innerText = "Söndag";
        break;
        default: 
        document.querySelector(".dateDiv .day").innerText = "Finns igen information";
}


// function checkTime(i) {
//     if (i < 10) {
//       i = "0" + i;
//     }
//     return i;
// }
  
// function startTime() {
// var today = new Date();
// var h = today.getHours();
// var m = today.getMinutes();
// var s = today.getSeconds();
// add a zero in front of numbers<10
// m = checkTime(m);
// s = checkTime(s);
// document.querySelector(".dateDiv .time").innerText = h + " " + m + " " + s;
// t = setTimeout(function() {startTime()}, 500);
// }
// startTime();