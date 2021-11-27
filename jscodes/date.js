
setInterval(displayclock, 500);
setInterval(displaydate, 500);
function displayclock(){
var time = new Date();
var hrs = time.getHours();
var min = time.getMinutes();
var sec = time.getSeconds();
if (hrs < 10){
    hrs = '0' + hrs;
}
if (min < 10){
    min = '0' + min;
}
if (sec < 10){
    sec = '0' + sec;
}
document.getElementById('clock').innerHTML = hrs + ':' + min + ':' + sec;
}
function displaydate(){
n =  new Date();
w = n.getDay();
y = n.getFullYear();
m = n.getMonth() + 1 ;
m2 = n.getMonth();
d = n.getDate();

var mon = ["Jan","Feb","Mar","Apr","May","June","Jul","Aug","Sep","Oct","Nov","Dec"];
var wks = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var week =[wks[w]];
var month =[mon[m2]];
document.getElementById("date1").innerHTML =  month + " " + d + ", " + y + " <b>| </b>" + week;
document.getElementById("date").innerHTML =  month + " " + d + ", " + y + " <b>| </b>" + week;

}