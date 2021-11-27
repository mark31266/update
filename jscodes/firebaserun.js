  var DATESTRING;
  var SEQSTRING;
  var TIMESTRING;
  var SIDSTRING;
//--------------WBC DATA----------------------//
  var WBCSTRING;
  var WBClSTRING;
  var WBChSTRING;
 //--------------NEU DATA----------------------//
   var NEUSTRING;
   var NEUlSTRING;
   var NEUhSTRING;
 //--------------LYM DATA----------------------//
 var LYMSTRING;
 var LYMlSTRING;
 var LYMhSTRING;
 //--------------MON DATA----------------------//
 var MONSTRING;
 var MONlSTRING;
 var MONhSTRING;
 //--------------EOS DATA----------------------//
 var EOSSTRING;
 var EOSlSTRING;
 var EOShSTRING;
 //--------------BAS DATA----------------------//
 var BASSTRING;
 var BASlSTRING;
 var BAShSTRING;
 //--------------RBC DATA----------------------//
  var RBCSTRING;
  var RBClSTRING;
  var RBChSTRING;
//--------------HGB DATA----------------------//
  var HGBSTRING;
  var HGBlSTRING;
  var HGBhSTRING;
 //--------------HCT DATA----------------------//
   var HCTSTRING;
   var HCTlSTRING;
   var HCThSTRING;
 //--------------MCV DATA----------------------//
  var MCVSTRING;
  var MCVlSTRING;
  var MCVhSTRING;
//--------------MCH DATA----------------------//
  var MCHSTRING;
  var MCHlSTRING;
  var MCHhSTRING;
  //--------------MCHC DATA----------------------//
  var MCHCSTRING;
  var MCHClSTRING;
  var MCHChSTRING;
//--------------PLT DATA----------------------//
  var PLTSTRING;
  var PLTlSTRING;
  var PLThSTRING;


     
     //--------------names----------------------//
 let Fnameinput = document.getElementById('fnameinputs'); 
let Lnameinput = document.getElementById('lnameinputs');
let Ageinput = document.getElementById('ageinputs'); 
let Genderinput = document.getElementById('genderinputs');
     //--------------names----------------------//
     var idSTRING; 
     //--------------end----------------------//
document.getElementById('refreshbtn').onclick=function()
{
  //--------------ID DATA----------------------//
  var idinput  = document.getElementById('opname'); 
    //--------------DATA----------------------//
  var SEQinput = document.getElementById('SEQ'); 
  var DATEinput = document.getElementById('DATE'); 
  var TIMEinput = document.getElementById('TIME'); 
  var SIDinput = document.getElementById('SID'); 
  //--------------WBC DATA----------------------//
var WBCinput = document.getElementById('WBC'); 
var WBClinput = document.getElementById('WBCl'); 
var WBChinput = document.getElementById('WBCh'); 
//--------------NEU DATA----------------------//
  var NEUinput = document.getElementById('NEU'); 
  var NEUlinput = document.getElementById('NEUl'); 
  var NEUhinput = document.getElementById('NEUh'); 
 //--------------LYM DATA----------------------//
 var LYMinput = document.getElementById('LYM'); 
 var LYMlinput = document.getElementById('LYMl'); 
 var LYMhinput = document.getElementById('LYMh'); 
 //--------------MON DATA----------------------//
 var MONinput = document.getElementById('MON'); 
 var MONlinput = document.getElementById('MONl'); 
 var MONhinput = document.getElementById('MONh'); 
 //--------------EOS DATA----------------------//
 var EOSinput = document.getElementById('EOS'); 
 var EOSlinput = document.getElementById('EOSl'); 
 var EOShinput = document.getElementById('EOSh'); 
 //--------------BAS DATA----------------------//
 var BASinput = document.getElementById('BAS'); 
 var BASlinput = document.getElementById('BASl'); 
 var BAShinput = document.getElementById('BASh'); 
//--------------RBC DATA----------------------//
  var RBCinput = document.getElementById('RBC'); 
  var RBClinput = document.getElementById('RBCl'); 
  var RBChinput = document.getElementById('RBCh'); 
//--------------HGB DATA----------------------//
  var HGBinput = document.getElementById('HGB'); 
  var HGBlinput = document.getElementById('HGBl'); 
  var HGBhinput = document.getElementById('HGBh'); 
  //--------------HCT DATA----------------------//
   var HCTinput = document.getElementById('HCT'); 
   var HCTlinput = document.getElementById('HCTl'); 
   var HCThinput = document.getElementById('HCTh'); 

//--------------MCV DATA----------------------//
  var MCVinput = document.getElementById('MCV'); 
  var MCVlinput = document.getElementById('MCVl'); 
  var MCVhinput = document.getElementById('MCVh'); 
//--------------MCH DATA----------------------//
  var MCHinput = document.getElementById('MCH'); 
  var MCHlinput = document.getElementById('MCHl'); 
  var MCHhinput = document.getElementById('MCHh'); 
//--------------MCHC DATA----------------------//
  var MCHCinput = document.getElementById('MCHC'); 
  var MCHClinput = document.getElementById('MCHCLl'); 
  var MCHChinput = document.getElementById('MCHCLh'); 
  //--------------PLT DATA----------------------//
  var PLTinput = document.getElementById('PLT'); 
  var PLTlinput = document.getElementById('PLTLl'); 
  var PLThinput = document.getElementById('PLTLh'); 
  

     

  if (idinput.innerHTML)
  idSTRING = idinput.innerHTML;
else if (XMLSerializer)
idSTRING = new XMLSerializer().serializeToString(idinput); 

  if (DATEinput.innerHTML)
  DATESTRING = DATEinput.innerHTML;
else if (XMLSerializer)
DATESTRING = new XMLSerializer().serializeToString(DATEinput); 

  if (TIMEinput.innerHTML)
  TIMESTRING = TIMEinput.innerHTML;
else if (XMLSerializer)
TIMESTRING = new XMLSerializer().serializeToString(TIMEinput); 

  if (SIDinput.innerHTML)
  SIDSTRING = SIDinput.innerHTML;
else if (XMLSerializer)
  SIDSTRING = new XMLSerializer().serializeToString(SIDinput);
  
  if (SEQinput.innerHTML)
  SEQSTRING = SEQinput.innerHTML;
else if (XMLSerializer)
SEQSTRING = new XMLSerializer().serializeToString(SEQinput); 

//--------------WBC DATA----------------------//
  if (WBCinput.innerHTML)
  WBCSTRING = WBCinput.innerHTML;
else if (XMLSerializer)
  WBCSTRING = new XMLSerializer().serializeToString(WBCinput); 

  if (WBClinput.innerHTML)
  WBClSTRING = WBClinput.innerHTML;
else if (XMLSerializer)
  WBClSTRING = new XMLSerializer().serializeToString(WBClinput); 

  if (WBChinput.innerHTML)
  WBChSTRING = WBChinput.innerHTML;
else if (XMLSerializer)
  WBChSTRING = new XMLSerializer().serializeToString(WBChinput); 


//--------------RBC DATA----------------------//
if (RBCinput.innerHTML)
  RBCSTRING = RBCinput.innerHTML;
else if (XMLSerializer)
  RBCSTRING = new XMLSerializer().serializeToString(RBCinput); 

  if (RBClinput.innerHTML)
  RBClSTRING = RBClinput.innerHTML;
else if (XMLSerializer)
  RBClSTRING = new XMLSerializer().serializeToString(RBClinput); 

  if (RBChinput.innerHTML)
  RBChSTRING = RBChinput.innerHTML;
else if (XMLSerializer)
  RBChSTRING = new XMLSerializer().serializeToString(RBChinput); 

//--------------HGB DATA----------------------//
if (HGBinput.innerHTML)
  HGBSTRING = HGBinput.innerHTML;
else if (XMLSerializer)
  HGBSTRING = new XMLSerializer().serializeToString(HGBinput); 

  if (HGBlinput.innerHTML)
  HGBlSTRING = HGBlinput.innerHTML;
else if (XMLSerializer)
  HGBlSTRING = new XMLSerializer().serializeToString(HGBlinput); 

  if (HGBhinput.innerHTML)
  HGBhSTRING = HGBhinput.innerHTML;
else if (XMLSerializer)
  HGBhSTRING = new XMLSerializer().serializeToString(HGBhinput); 

  //--------------MCV DATA----------------------//
if (MCVinput.innerHTML)
  MCVSTRING = MCVinput.innerHTML;
else if (XMLSerializer)
  MCVSTRING = new XMLSerializer().serializeToString(MCVinput); 

  if (MCVlinput.innerHTML)
  MCVlSTRING = MCVlinput.innerHTML;
else if (XMLSerializer)
  MCVlSTRING = new XMLSerializer().serializeToString(MCVlinput); 

  if (MCVhinput.innerHTML)
  MCVhSTRING = MCVhinput.innerHTML;
else if (XMLSerializer)
  MCVhSTRING = new XMLSerializer().serializeToString(MCVhinput); 

 //--------------MCH DATA----------------------//

if (MCHinput.innerHTML)
  MCHSTRING = MCHinput.innerHTML;
else if (XMLSerializer)
  MCHSTRING = new XMLSerializer().serializeToString(MCHinput); 

  if (MCHlinput.innerHTML)
  MCHlSTRING = MCHlinput.innerHTML;
else if (XMLSerializer)
  MCHlSTRING = new XMLSerializer().serializeToString(MCHlinput); 

  if (MCHhinput.innerHTML)
  MCHhSTRING = MCHhinput.innerHTML;
else if (XMLSerializer)
  MCHhSTRING = new XMLSerializer().serializeToString(MCHhinput); 

//--------------MCHC DATA----------------------//
  
if (MCHCinput.innerHTML)
  MCHCSTRING = MCHCinput.innerHTML;
else if (XMLSerializer)
  MCHCSTRING = new XMLSerializer().serializeToString(MCHCinput); 
  
  if (MCHClinput.innerHTML)
  MCHClSTRING = MCHClinput.innerHTML;
else if (XMLSerializer)
  MCHClSTRING = new XMLSerializer().serializeToString(MCHClinput); 

  if (MCHChinput.innerHTML)
  MCHChSTRING = MCHChinput.innerHTML;
else if (XMLSerializer)
  MCHChSTRING = new XMLSerializer().serializeToString(MCHChinput); 

//--------------PLT DATA----------------------//
if (PLTinput.innerHTML)
  PLTSTRING = PLTinput.innerHTML;
else if (XMLSerializer)
  PLTSTRING = new XMLSerializer().serializeToString(PLTinput); 

    if (PLTlinput.innerHTML)
  PLTlSTRING = PLTlinput.innerHTML;
else if (XMLSerializer)
  PLTlSTRING = new XMLSerializer().serializeToString(PLTlinput); 

  if (PLThinput.innerHTML)
  PLThSTRING = PLThinput.innerHTML;
else if (XMLSerializer)
  PLThSTRING = new XMLSerializer().serializeToString(PLThinput); 

  

    //--------------HCT DATA----------------------//

  if (HCTinput.innerHTML)
  HCTSTRING = HCTinput.innerHTML;
else if (XMLSerializer)
HCTSTRING = new XMLSerializer().serializeToString(HCTinput); 

if (HCTlinput.innerHTML)
HCTlSTRING = HCTlinput.innerHTML;
else if (XMLSerializer)
HCTlSTRING = new XMLSerializer().serializeToString(HCTlinput); 

if (HCThinput.innerHTML)
HCThSTRING = HCThinput.innerHTML;
else if (XMLSerializer)
HCThSTRING = new XMLSerializer().serializeToString(HCThinput); 

    //--------------LYM DATA----------------------//

    if (LYMinput.innerHTML)
    LYMSTRING = LYMinput.innerHTML;
  else if (XMLSerializer)
  LYMSTRING = new XMLSerializer().serializeToString(LYMinput); 
  
  if (LYMlinput.innerHTML)
  LYMlSTRING = LYMlinput.innerHTML;
  else if (XMLSerializer)
  LYMlSTRING = new XMLSerializer().serializeToString(LYMlinput); 
  
  if (LYMhinput.innerHTML)
  LYMhSTRING = LYMhinput.innerHTML;
  else if (XMLSerializer)
  LYMhSTRING = new XMLSerializer().serializeToString(LYMhinput); 



    //--------------MON DATA----------------------//

    if (MONinput.innerHTML)
    MONSTRING = MONinput.innerHTML;
  else if (XMLSerializer)
  MONSTRING = new XMLSerializer().serializeToString(MONinput); 
  
  if (MONlinput.innerHTML)
  MONlSTRING = MONlinput.innerHTML;
  else if (XMLSerializer)
  MONlSTRING = new XMLSerializer().serializeToString(MONlinput); 
  
  if (MONhinput.innerHTML)
  MONhSTRING = MONhinput.innerHTML;
  else if (XMLSerializer)
  MONhSTRING = new XMLSerializer().serializeToString(MONhinput); 


//--------------NEU DATA----------------------//

if (NEUinput.innerHTML)
NEUSTRING = NEUinput.innerHTML;
else if (XMLSerializer)
NEUSTRING = new XMLSerializer().serializeToString(NEUinput); 

if (NEUlinput.innerHTML)
NEUlSTRING = NEUlinput.innerHTML;
else if (XMLSerializer)
NEUlSTRING = new XMLSerializer().serializeToString(NEUlinput); 

if (NEUhinput.innerHTML)
NEUhSTRING = NEUhinput.innerHTML;
else if (XMLSerializer)
NEUhSTRING = new XMLSerializer().serializeToString(NEUhinput); 


//--------------BAS DATA----------------------//

if (BASinput.innerHTML)
BASSTRING = BASinput.innerHTML;
else if (XMLSerializer)
BASSTRING = new XMLSerializer().serializeToString(BASinput); 

if (BASlinput.innerHTML)
BASlSTRING = BASlinput.innerHTML;
else if (XMLSerializer)
BASlSTRING = new XMLSerializer().serializeToString(BASlinput); 

if (BAShinput.innerHTML)
BAShSTRING = BAShinput.innerHTML;
else if (XMLSerializer)
BAShSTRING = new XMLSerializer().serializeToString(BAShinput); 


//--------------EOS DATA----------------------//

if (EOSinput.innerHTML)
EOSSTRING = EOSinput.innerHTML;
else if (XMLSerializer)
EOSSTRING = new XMLSerializer().serializeToString(EOSinput); 

if (EOSlinput.innerHTML)
EOSlSTRING = EOSlinput.innerHTML;
else if (XMLSerializer)
EOSlSTRING = new XMLSerializer().serializeToString(EOSlinput); 

if (EOShinput.innerHTML)
EOShSTRING = EOShinput.innerHTML;
else if (XMLSerializer)
EOShSTRING = new XMLSerializer().serializeToString(EOShinput); 
}
let fnamevariable = fnameinputs.value; 
let lnamevariable = lnameinputs.value; 
let gendervariable = genderinputs.value; 
let agevariable = ageinputs.value;

//SI UNITS
const wbcunit = document.getElementById("wbcunit").innerHTML; 
const neuunit = document.getElementById("neuunit").innerHTML; 
const lymunit = document.getElementById("lymunit").innerHTML; 
const monunit = document.getElementById("monunit").innerHTML; 
const eosunit = document.getElementById("eosunit").innerHTML; 
const basunit = document.getElementById("basunit").innerHTML; 
const rbcunit = document.getElementById("rbcunit").innerHTML; 
const hgbunit = document.getElementById("hgbunit").innerHTML; 
const hctunit = document.getElementById("hctunit").innerHTML; 
const mcvunit = document.getElementById("mcvunit").innerHTML; 
const mchunit = document.getElementById("mchunit").innerHTML; 
const mchcunit = document.getElementById("mchcunit").innerHTML; 
const pltunit = document.getElementById("pltunit").innerHTML; 

function Update(val,type) 
{
  if(type=='FirstName') fnamevariable=val; 
  else if(type=='LastName') lnamevariable=val; 

  if(type=='AGE') agevariable=val; 

  if(type=='GENDER') gendervariable=val; 
}
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
  firebase.analytics();
  let db = firebase.firestore(); 



//-----------------------------------------String to Date Function-------------------------------//

  //--------------writing data---------------------//

  firebase.auth().onAuthStateChanged(function(user) {
    var user = firebase.auth().currentUser;
    io = user.email;
    document.getElementById("opname").innerText += io ; 
  }); 

  function doc_withautoincrement(){
    const usersRef = db.collection("patientvalues").doc(idSTRING).collection("DATE").doc(DATESTRING).collection("SID").doc(SIDSTRING); 
    usersRef.get()
  .then((docSnapshot) => {
    if (docSnapshot.exists) { 
          alert("Data Exists in the Database"); 
    }
  else {
    db.collection("patientvalues").doc(idSTRING).collection("DATE").doc(DATESTRING).collection("SID").doc(SIDSTRING).set(
      {
      SEQ_NO : SEQSTRING,
      id : idSTRING
      })
      db.collection("patientvalues").doc(idSTRING).collection("DATE").doc(DATESTRING).set(
      {
      DATE : DATESTRING, 
      })
      db.collection("patientvalues").doc(idSTRING).set(
        {
        User_EMAIL : idSTRING, 
        })
    db.collection("patientvalues").doc(idSTRING).collection("DATE").doc(DATESTRING).collection("SID").doc(SIDSTRING).collection("DATA").add(
      {
      ID : usersRef.id,
      FirstName : fnamevariable, 
      LastName : lnamevariable,
      Age: agevariable, 
      Gender: gendervariable,
      DATE : DATESTRING, 
      TIME : TIMESTRING, 
      SID : SIDSTRING,
      SEQ_NO : SEQSTRING,
      WBC : WBCSTRING,
      WBCUNIT : wbcunit,
      WBCNORMAL : WBClSTRING + " - " + WBChSTRING, 
      NEU : NEUSTRING,
      NEUUNIT : neuunit, 
      NEUNORMAL : NEUlSTRING + " - " + NEUhSTRING,
      LYM : LYMSTRING,
      LYMUNIT : lymunit, 
      LYMNORMAL : LYMlSTRING + " - " + LYMhSTRING,
      MON : MONSTRING, 
      MONUNIT : monunit, 
      MONNORMAL : MONlSTRING + " - " + MONhSTRING,
      EOS : EOSSTRING, 
      EOSUNIT : eosunit, 
      EOSNORMAL : EOSlSTRING + " - " + EOShSTRING,
      BAS : BASSTRING, 
      BASUNIT : basunit, 
      BASNORMAL : BASlSTRING + " - " + BAShSTRING,
      RBC : RBCSTRING, 
      RBCUNIT : rbcunit, 
      RBCNORMAL : RBClSTRING + " - " + RBChSTRING,
      HGB : HGBSTRING,
      HGBUNIT : hgbunit, 
      HGBNORMAL : HGBlSTRING + " - " + HGBhSTRING,
      HCT : HCTSTRING,
      HCTUNIT : hctunit,
      HCTNORMAL : HCTlSTRING + " - " + HCThSTRING,
      MCV : MCVSTRING,
      MCVUNIT : mcvunit, 
      MCVNORMAL : MCVlSTRING + " - " + MCVhSTRING,
      MCH : MCHSTRING,
      MCHUNIT : mchunit, 
      MCHNORMAL : MCHlSTRING + " - " + MCHhSTRING,
      MCHC : MCHCSTRING, 
      MCHCUNIT : mchcunit, 
      MCHCNORMAL : MCHClSTRING + " - " + MCHChSTRING,
      PLT : PLTSTRING,
      PLTUNIT : pltunit, 
      PLTNORMAL : PLTlSTRING + " - " + PLThSTRING
      }).then(function (){
        alert("Data Written! " + "SID: " + SIDSTRING); 
    }).catch(function(error)
    {
      alert("Error Writing Document" + error);
    }); 
  }
  })
  
}
  //-----------------------Button---------------------//
  document.getElementById("insertBtn").addEventListener("click", function(event) {
    var fn = document.getElementById("fnameinputs");
    var ln = document.getElementById("lnameinputs");
    if (fn !== null && fn.value === "" || ln !== null && ln.value === "")
    {
     alert("Invalid Details")
    }
    else{
      event.preventDefault() ; 
    doc_withautoincrement(); 
      }

    
  }); 

  function myFunction5() {
   
    $(document).ready(function(){
      if ($("wbc").html().length > 0) {
alert("yey")
      }                                           
        else {
          alert("failed")
           }
          });
        }
