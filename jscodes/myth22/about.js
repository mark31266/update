var firebaseConfig = {
  apiKey: "AIzaSyBJspFr6QSvhEAmONVu3Tl7lZrRFQSA-8I",
  authDomain: "analyzerdb.firebaseapp.com",
  databaseURL: "https://analyzerdb-default-rtdb.firebaseio.com",
  projectId: "analyzerdb",
  storageBucket: "analyzerdb.appspot.com",
  messagingSenderId: "326480477399",
  appId: "1:326480477399:web:2b7cf4d69a4895daeb8492",
  measurementId: "G-NHM4EMZ8HS"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let db = firebase.firestore(); 
let engineers = [];
var username;
var date = document.getElementById("date1");  
var clock1 = document.getElementById("clock");  
var machinename; 
var name1 = document.getElementById("name-input"); 
var email = document.getElementById("email-input"); 
var message = document.getElementById("message-textarea"); 
firebase.auth().onAuthStateChanged(function(user) {
  var user = firebase.auth().currentUser;
  username = user.email;
})
var socket = io();
socket.on('status', function(status) {
  console.log(status);
  if (String(status).includes("COM1") ){
   machinename = "Orphee Mythic 22"; 
     //SelectPicker Nav
   const navobj = document.createElement("li");
   const navobj2 = document.createElement("a");
   navobj2.textContent = "Mythic 22";
   navobj2.href = "/myth22/run"; 
   navobj.appendChild(navobj2)
   document.getElementById("homeSubmenu1").appendChild(navobj);
  }
  if (String(status).includes("COM2") ){
    machinename = "Orphee Mythic 18"; 
    const navobj = document.createElement("li");
    const navobj2 = document.createElement("a");
    navobj2.textContent = "Mythic 18";
    navobj2.href = "/myth18/run"; 
    navobj.appendChild(navobj2)
    document.getElementById("homeSubmenu1").appendChild(navobj);
   }
   if (String(status).includes("COM3") ){
    machinename = "Orphee Mythic 60"; 
    const navobj = document.createElement("li");
    const navobj2 = document.createElement("a");
    navobj2.textContent = "Mythic 22";
    navobj2.href = "/myth60/run"; 
    navobj.appendChild(navobj2)
    document.getElementById("homeSubmenu1").appendChild(navobj);
   }
  socket.close();
});
document.getElementById("sendMsgbtn").addEventListener("click", function(event) {
  function emailsend() {
 Email.send({
  SecureToken : "058d5a67-b77a-4101-bcf6-16823a0bb632",
	To : "markmontenegro6969@gmail.com",
	From : email.value,
	Subject : "From " + name1.value,
	Body : "Message: "+ message.value + '<br>' +"Machine: " + String(machinename)
          + "<br>" +"Date and Time: " + date.innerText + " " + clock1.innerText + "<br>" + "Username: " + username,
	})
}
if(message.value === "" || message.value === null || name1.value === "" || name1.value === null || email.value === "" || email.value === null)
      {
      document.getElementById("messageconfirm").innerText = "Error: Missing Data Fields"
      }
     else {
      emailsend(); 
      document.getElementById("messageconfirm").innerText = "Message Successfully Sent!"
     
     }
}); 

