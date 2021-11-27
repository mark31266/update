
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-analytics.js";
  const firebaseConfig = {
    apiKey: "AIzaSyBJspFr6QSvhEAmONVu3Tl7lZrRFQSA-8I",
    authDomain: "analyzerdb.firebaseapp.com",
    databaseURL: "https://analyzerdb-default-rtdb.firebaseio.com",
    projectId: "analyzerdb",
    storageBucket: "analyzerdb.appspot.com",
    messagingSenderId: "326480477399",
    appId: "1:326480477399:web:2b7cf4d69a4895daeb8492",
    measurementId: "G-NHM4EMZ8HS"
  };
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  firebase.initializeApp(firebaseConfig);
  import {
    getFirestore, query, doc,setDoc,getDoc, where ,getDocs, onSnapshot, collection 
  }
  from "https://www.gstatic.com/firebasejs/9.3.0/firebase-firestore.js"
  
  import {
    getStorage, ref as sRef, uploadBytesResumable, getDownloadURL
  }
  from "https://www.gstatic.com/firebasejs/9.3.0/firebase-storage.js"




const db = getFirestore(); 
var auto_inc = 0; 
var logresultstable = document.getElementById("logresults"); 
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      var user = firebase.auth().currentUser;
      if(user != null){ 
        console.log(user.email);

      }
    } 
    var socket = io();
    var machinename; 
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
     function AddItemToTable (activity,date,machine,sid,testdate,username)
     {
       let tr_data = document.createElement('tr'); 
       let td1 = document.createElement('td');
       let td2 = document.createElement('td'); 
       let td3 = document.createElement('td'); 
       let td4 = document.createElement('td'); 
       let td5 = document.createElement('td'); 
       let td6 = document.createElement('td'); 
       let td7 = document.createElement('td'); 
       td1.innerHTML = ++auto_inc; 
       td2.innerHTML = activity; 
       td3.innerHTML = date; 
       td4.innerHTML = machine; 
       td5.innerHTML = sid; 
       td6.innerHTML = testdate; 
       td7.innerHTML = username;  
       tr_data.appendChild(td1); 
       tr_data.appendChild(td2); 
       tr_data.appendChild(td3); 
       tr_data.appendChild(td4); 
       tr_data.appendChild(td5); 
       tr_data.appendChild(td6); 
       tr_data.appendChild(td7); 
       logresultstable.appendChild(tr_data); 
     }

     function AddAllItemsToTable(auditlog) {
      auto_inc = 0 ; 
      logresultstable.innerHTML=""; 
      auditlog.forEach(element => {
        AddItemToTable(element.Activity, element.DateDid, element.Machine, element.SID, element.Test_Run_Date,element.id); 
      }); 
     }
     async function GetAllDataOnce() {
      const q = query(collection(db, "auditlog"));
       const querySnapshot = await getDocs(q); 
       var datalog = []; 
       querySnapshot.forEach(doc => {
      datalog.push(doc.data()); 
       }); 

       AddAllItemsToTable(datalog);
     }

     async function RealTimeData() {
       
      const dbRef = collection(db,"auditlog"); 
        onSnapshot(dbRef, (querySnapshot) => {
          var datalog = []; 
        querySnapshot.forEach(doc => {
datalog.push(doc.data()); 
        });  

      AddAllItemsToTable(datalog);
      
    })
  }
  RealTimeData(); 
  setTimeout(function() {
    $(document).ready(function () {
     
       $('#example').dataTable({
        iDisplayLength : 5,
        pagingType: "full_numbers",
        searching: true,
        paginate : true,
        select: true,
        sorting: true,
        order: true,
        lengthChange: false,
        pageLength: 12,
        scrollY: "260px",
        columnDefs: [
          { width: "10px", targets: 0 },
          { width: "25px", targets: 1 },
          { width: "150px", targets: 2 },
          { width: "10px", targets: 3 },
          { width: "20px", targets: 4 },
          { width: "130px", targets: 5 },
          { width: "200px", targets: 6 },
      ],
      fixedColumns: false,
      "dom": '<lf<t>ip>',
        info: true,
        scrollCollapse: true,
        processing: false,
        language: { 
          
            paginate: {first: "First", last: "Last", next: "Next", previous: "Previous"}
           
        },
        
        serverSide: false,
         select: {
           style: 'os',
           items: 'cell'
         }
       });

     });
    },2000);

   document.getElementById("advancedbtn").addEventListener('click',function ()
{
  setTimeout(function(){ 
    
  }, 1000);
 
   }); 
 
}); 
var barcode = '';
var interval;
document.addEventListener('keydown', function(evt) {
    if (interval)
        clearInterval(interval);
    if (evt.code == 'Enter') {
        if (barcode)
            handleBarcode(barcode);
        barcode = '';
        return;
    }
    if (evt.key != 'Shift')
        barcode += evt.key;
    interval = setInterval(() => barcode = '', 20);
});

function handleBarcode(scanned_barcode) {
    document.querySelector('#last-barcode').innerHTML = scanned_barcode;

    
}

//--------Image Upload---------//

 var reader = new FileReader(); 
 var proglab = document.getElementById("upprogress"); 
 var optionselect = document.getElementById("optionselect"); 
function readURL() {
  var $input = $(this);
  var $newinput =  $(this).parent().parent().parent().find('.portimg ');
  if (this.files && this.files[0]) {
      reader.onload = function (e) {
          reset($newinput.next('.delbtn'), true);
          $newinput.attr('src', e.target.result).show();
          $newinput.after('<input type="button" class="delbtn removebtn" value="✖">');
          if(optionselect.value == "Logo")
          {
            console.log("Logo Present")
            document.getElementById("filenamelabel").innerText = "logo.png"
          }
          else if(optionselect.value == "Header")
          {
            console.log("Header Present")
            document.getElementById("filenamelabel").innerText = "header.png"
          }
          else if(optionselect.value == "Signatories")
          {
            console.log("Signs Present")
            document.getElementById("filenamelabel").innerText = "signatories.png"
          }
          else {
            document.getElementById("info1").innerText = "ERROR!: Please Select Desired Category"
            $('#myModal1').modal('show');   
            window.location.reload(); 
          }
          
      }
      reader.readAsDataURL(this.files[0]);
     var ImgToUpload = this.files[0];
     var ImgName = document.getElementById("filenamelabel").innerText; 
     const metaData = {
      contentType : ImgToUpload.type
    }
     const storage = getStorage(); 
     const storageRef = sRef(storage, "Images/" +ImgName)
  const UploadTask = uploadBytesResumable(storageRef, ImgToUpload,metaData);
  
  UploadTask.on('state-changed', (snapshot)=>{
    var progress =(snapshot.bytesTransferred / snapshot.totalBytes) * 100; 
    proglab.innerHTML = "Upload " + progress + "%"; 
  },
  (error) => {
    console.log("error" + error); 
  },
  ()=> {
    getDownloadURL(UploadTask.snapshot.ref).then((downloadURL) => {
      SaveURLtoFirestore(downloadURL); 
    }); 
  }
  );
  }
}

$(".custom-file-input").change(readURL);
$("form").on('click', '.delbtn', function (e) {
  reset($(this));
});

function reset(elm, prserveFileName) {
  if (elm && elm.length > 0) {
      var $input = elm;
      $input.prev('.portimg').attr('src', '').hide();
      if (!prserveFileName) {
          $($input).parent().parent().parent().find('input.custom-file-input ').val("");
          //input.fileUpload and input#uploadre both need to empty values for particular div
      }
      elm.remove();
     
  }
}

async function SaveURLtoFirestore(url)
{
  var filename = document.getElementById("filenamelabel").innerText;

  var ref = doc(db, "Images/"+filename); 

  await setDoc(ref, {
    ImageName: filename,
    ImageURL : url
  })
}
