//---------------------------firebase config---------------------------------------//
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
  var os;
  //--------------writing data---------------------//
 
  var socket = io();
socket.on('status', function(status) {
  if (String(status).includes("COM1") ){
    //SelectPicker Card
  
    const optionObj = document.createElement("option");
    const optionObj2 = document.createElement("div");

 optionObj2.id = "yey10"; 
 optionObj2.innerHTML = "Orphee Mythic 22 (Online)"; 
 optionObj2.href = "/myth22/run"; 

    optionObj.appendChild(optionObj2);
    document.getElementById("machineselect").appendChild(optionObj);
      //SelectPicker Nav
    const navobj = document.createElement("li");
    const navobj2 = document.createElement("a");
    navobj2.textContent = "Mythic 22";
    navobj2.href = "/myth22/run"; 
    navobj.appendChild(navobj2)
    document.getElementById("homeSubmenu1").appendChild(navobj);

    if (!String(status).includes("COM2") ){
      const optionObj = document.createElement("option");
      optionObj.textContent = "Orphee Mythic 18 (Offline)";
      optionObj.disabled = true;
      document.getElementById("machineselect").appendChild(optionObj);
       
  } 
  if (!String(status).includes("COM3") ){
    const optionObj = document.createElement("option");
    optionObj.textContent = "Orphee Mythic 60 (Offline)";
    optionObj.disabled = true;
    document.getElementById("machineselect").appendChild(optionObj); 
} 
} 
else if (String(status).includes("COM2") ){

  const optionObj = document.createElement("option");
  optionObj.textContent = "Orphee Mythic 18 (Online)";
  optionObj.value = "/myth18/run";
  document.getElementById("machineselect").appendChild(optionObj);
      //SelectPicker Nav
      const navobj = document.createElement("li");
      const navobj2 = document.createElement("a");
      navobj2.textContent = "Mythic 18";
      navobj2.href = "/myth18/run"; 
      navobj.appendChild(navobj2)
      document.getElementById("homeSubmenu1").appendChild(navobj);
  if (!String(status).includes("COM1") ){
    const optionObj = document.createElement("option");
    optionObj.textContent = "Orphee Mythic 22 (Offline)";
    document.getElementById("machineselect").appendChild(optionObj); 
} 
if (!String(status).includes("COM3") ){
  const optionObj = document.createElement("option");
  optionObj.textContent = "Orphee Mythic 60 (Offline)";
  document.getElementById("machineselect").appendChild(optionObj); 
} 
}
else if (String(status).includes("COM3") ){

  const optionObj = document.createElement("option");
  optionObj.textContent = "Orphee Mythic 60 (Online)";
  optionObj.value = "/myth60/run";
  document.getElementById("machineselect").appendChild(optionObj);
    //SelectPicker Nav
    const navobj = document.createElement("li");
    const navobj2 = document.createElement("a");
    navobj2.textContent = "Mythic 60";
    navobj2.href = "/myth60/run"; 
    navobj.appendChild(navobj2)
    document.getElementById("homeSubmenu1").appendChild(navobj);
  if (!String(status).includes("COM1") ){
    const optionObj = document.createElement("option");
    optionObj.textContent = "Orphee Mythic 22 (Offline)";
    document.getElementById("machineselect").appendChild(optionObj); 
  } 
  if (!String(status).includes("COM2") ){
    const optionObj = document.createElement("option");
    optionObj.textContent = "Orphee Mythic 18 (Offline)";
    document.getElementById("machineselect").appendChild(optionObj); 
  } 
}
else
{
  document.getElementById('data4').innerHTML = "Not Connected";

}
socket.close(); 
}); 

  $('.ui.dropdown').dropdown()


  function card(){

  var socket = io();   
socket.on('uptimedata', function(uptimedata) 
{
    document.getElementById("Connection1").innerHTML += String((parseFloat(uptimedata) / 60).toFixed(2)) + " Minutes";
    socket.close(); 
     });   
    firebase.auth().onAuthStateChanged(function(user) {
      var user = firebase.auth().currentUser;
      username = user.email;
      document.getElementById("opname").innerText += username ;  
      document.getElementById("usrLvl").innerText = "Medical Practitioner";   
      //count data

    db.collection("auditlog").where("Activity", "==", "Run Sample").get()
  .then( snapshot => document.getElementById("data1").innerHTML = snapshot.size) ;

  db.collection("auditlog").where("Activity", "==", "Update").get()
  .then( 
    snapshot => document.getElementById("data2").innerHTML = snapshot.size) ;
  
    db.collection("auditlog").where("Activity", "==", "Run Sample").get()
  .then( snapshot => document.getElementById("data3").innerHTML = String((parseFloat(snapshot.size) / 7).toFixed(2))) ;

  
  db.collection("users").get()
  .then( snapshot => document.getElementById("data4").innerHTML = snapshot.size) ;

  db.collection("Timestamp").doc("Constant").get().then((doc) => {
    var testdate1 = doc.data().date;
    var testsid1 = doc.data().sid;
  db.collection("patientvalues").doc(username + " Mythic 22").collection("DATE").doc(testdate1).collection("SID").doc(testsid1).collection("DATA")
     .get()  
     .then(snapshot => {
       snapshot.forEach(doc => {
           var date0 = doc.data().DATE;
           var sid1 = doc.data().SID;
           var wbc1 = doc.data().WBC;
           var lym1 = doc.data().LYM;
           var eos1 = doc.data().EOS;
           var rbc1 = doc.data().RBC;
           var hct1 = doc.data().HCT;
           var neu1 = doc.data().NEU;
           var mon1 = doc.data().MON;
           var bas1 = doc.data().BAS;
           var hgb1 = doc.data().HGB;
           var mcv1 = doc.data().MCV;
           var fname1 = doc.data().FirstName;
           var lname1 = doc.data().LastName;
           document.getElementById('date0').innerHTML += date0;
           document.getElementById('sid1').innerHTML += sid1;
           document.getElementById('wbc1').innerHTML += wbc1;
           document.getElementById('lym1').innerHTML += lym1;
           document.getElementById('eos1').innerHTML += eos1;
           document.getElementById('rbc1').innerHTML += rbc1;
           document.getElementById('hct1').innerHTML += hct1;
           document.getElementById('neu1').innerHTML += neu1;
           document.getElementById('mon1').innerHTML += mon1;
           document.getElementById('bas1').innerHTML += bas1;
           document.getElementById('mcv1').innerHTML += mcv1;
           document.getElementById('hgb1').innerHTML += hgb1;
           document.getElementById('fname1').innerHTML += fname1;
           document.getElementById('lname1').innerHTML += lname1;
       });
     })
     .catch(err => {
       console.log('Error getting documents', err);
     });
    })
   //-----------------------Card2---------------------------------//
   db.collection("Timestamp").doc("Constant2").get().then((doc) => {
    var testdate2 = doc.data().date;
    var testsid2 = doc.data().sid;
   db.collection("patientvalues").doc(username + " Mythic 22").collection("DATE").doc(testdate2).collection("SID").doc(testsid2).collection("DATA")
   .get()  
   .then(snapshot => {
     snapshot.forEach(doc => {
         var date2 = doc.data().DATE;
         var sid2 = doc.data().SID;
         var wbc2 = doc.data().WBC;
         var lym2 = doc.data().LYM;
         var eos2 = doc.data().EOS;
         var rbc2 = doc.data().RBC;
         var hct2 = doc.data().HCT;
         var neu2 = doc.data().NEU;
         var mon2 = doc.data().MON;
         var bas2 = doc.data().BAS;
         var hgb2 = doc.data().HGB;
         var mcv2 = doc.data().MCV;
         var fname2 = doc.data().FirstName;
         var lname2 = doc.data().LastName;
         document.getElementById('date2').innerHTML += date2;
         document.getElementById('sid2').innerHTML += sid2;
         document.getElementById('wbc2').innerHTML += wbc2;
         document.getElementById('lym2').innerHTML += lym2;
         document.getElementById('eos2').innerHTML += eos2;
         document.getElementById('rbc2').innerHTML += rbc2;
         document.getElementById('hct2').innerHTML += hct2;
         document.getElementById('neu2').innerHTML += neu2;
         document.getElementById('mon2').innerHTML += mon2;
         document.getElementById('bas2').innerHTML += bas2;
         document.getElementById('mcv2').innerHTML += mcv2;
         document.getElementById('hgb2').innerHTML += hgb2;
         document.getElementById('fname2').innerHTML += fname2;
         document.getElementById('lname2').innerHTML += lname2;
     });
   })
   .catch(err => {
     console.log('Error getting documents', err);
   });
  })


    })
    $(document).ready(function(){
      //loads when document is ready
      if (document.cookie.indexOf('modal_shown=') >= 0) {
       //do nothing if modal_shown cookie is present
      } else {
        $('#myModal').modal('show');  //show modal pop up
        document.cookie = 'modal_shown=seen'; //set cookie modal_shown
        //cookie will expire when browser is closed
      }
      
      })
}

