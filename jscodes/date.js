
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
    let db2 = firebase.firestore();
n =  new Date();
w = n.getDay();
y = n.getFullYear();
m = n.getMonth() + 1;
m2 = n.getMonth();
d = (n.getDate() < 10 ? '0' : '') + n.getDate()

// var mon = ["Jan","Feb","Mar","Apr","May","June","Jul","Aug","Sep","Oct","Nov","12"];
var wks = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var week =[wks[w]];
db2.collection("DateSetting").doc("Format").get().then((doc) => {
    var format2 = doc.data().format; 
   if (format2 == "mm-dd-yyyy") 
  {
    document.getElementById("date1").innerHTML =  m + "-" + d + "-" + y + " <b>| </b>" + week;
    document.getElementById("date").innerHTML =  m + "-" + d + "-" + y + " <b>| </b>" + week;
  }
  if (format2 == "dd-mm-yyyy") 
  {
    document.getElementById("date1").innerHTML =  d + "-" + m + "-" + y + " <b>| </b>" + week;
    document.getElementById("date").innerHTML =  d + "-" + m + "-" + y + " <b>| </b>" + week;
  }
  if (format2 == "yyyy-dd-mm") 
  {
    document.getElementById("date1").innerHTML =  y + "-" + d + "-" + m + " <b>| </b>" + week;
    document.getElementById("date").innerHTML =  y + "-" + d + "-" + m + " <b>| </b>" + week;
  }
  if (format2 == "yyyy-mm-dd") 
  {
    document.getElementById("date1").innerHTML =  y + "-" + m + "-" + d + " <b>| </b>" + week;
    document.getElementById("date").innerHTML =  y + "-" + m + "-" + d + " <b>| </b>" + week;
  }

})
}