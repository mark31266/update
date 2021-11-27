           //--------------DATA----------------------//
           var DATEinput = document.getElementById('DATE'); 
           var TIMEinput = document.getElementById('timeinputs'); 
           var SIDinput = document.getElementById('SID'); 
                //-----------------WBC--------------------/
                const results1 = document.querySelector('#results');
                let tr_wbc = document.getElementById('wbc');
                let th_wbc = document.getElementById('th_wbc');
                let th_wbcunit = document.getElementById('th_wbcunit');
                let th_wbcnormal =document.getElementById('th_wbcnormal');
                 //-----------------NEU--------------------/
                let tr_neu = document.getElementById('neu');
                let th_neu = document.getElementById('th_neu');
                let th_neuunit = document.getElementById('th_neuunit');
                let th_neunormal =document.getElementById('th_neunormal');
                    //-----------------LYM--------------------/
                let tr_lym = document.getElementById('lym');
                let th_lym = document.getElementById('th_lym');
                let th_lymunit = document.getElementById('th_lymunit');
                let th_lymnormal =document.getElementById('th_lymnormal');
                 //-----------------MON--------------------/
                let tr_mon = document.getElementById('mon');
                let th_mon = document.getElementById('th_mon');
                let th_monunit = document.getElementById('th_monunit');
                let th_monnormal =document.getElementById('th_monnormal');
                 //-----------------EOS--------------------/
                let tr_eos = document.getElementById('eos');
                let th_eos = document.getElementById('th_eos');
                let th_eosunit = document.getElementById('th_eosunit');
                let th_eosnormal =document.getElementById('th_eosnormal');
                 //-----------------GRA--------------------/
                let tr_gra = document.getElementById('gra');
                let th_gra = document.getElementById('th_gra');
                let th_graunit = document.getElementById('th_graunit');
                let th_granormal =document.getElementById('th_granormal');
                  //-----------------RBC--------------------/
                let tr_rbc = document.getElementById('rbc');
                let th_rbc = document.getElementById('th_rbc');
                let th_rbcunit = document.getElementById('th_rbcunit');
                let th_rbcnormal =document.getElementById('th_rbcnormal');
                //-----------------HGB--------------------/
                let tr_hgb = document.getElementById('hgb');
                let th_hgb = document.getElementById('th_hgb');
                let th_hgbunit = document.getElementById('th_hgbunit');
                let th_hgbnormal =document.getElementById('th_hgbnormal');
                 //-----------------HCT--------------------/
                let tr_hct = document.getElementById('hct');
                let th_hct = document.getElementById('th_hct');
                let th_hctunit = document.getElementById('th_hctunit');
                let th_hctnormal =document.getElementById('th_hctnormal');
                //-----------------MCV--------------------/
                let tr_mcv = document.getElementById('mcv');
                let th_mcv = document.getElementById('th_mcv');
                let th_mcvunit = document.getElementById('th_mcvunit');
                let th_mcvnormal =document.getElementById('th_mcvnormal');
                //-----------------MCH--------------------/
                let tr_mch = document.getElementById('mch');
                let th_mch = document.getElementById('th_mch');
                let th_mchunit = document.getElementById('th_mchunit');
                let th_mchnormal =document.getElementById('th_mchnormal');
                //-----------------MCHC--------------------/
                let tr_mchc = document.getElementById('mchc');
                let th_mchc = document.getElementById('th_mchc');
                let th_mchcunit = document.getElementById('th_mchcunit');
                let th_mchcnormal = document.getElementById('th_mchcnormal');
                 //-----------------PLT--------------------/
                let tr_plt = document.getElementById('plt');
                let th_plt = document.getElementById('th_plt');
                let th_pltunit = document.getElementById('th_pltunit');
                let th_pltnormal =document.getElementById('th_pltnormal');
                let Fnameinput = document.getElementById('fnameinputs'); 
                let Lnameinput = document.getElementById('lnameinputs');
                let genderinputs = document.getElementById('genderselect'); 
                let ageinputs = document.getElementById('ageinputs');
                let bloodinputs = document.getElementById('bloodselect');
                let fnamevariable = fnameinputs.value; 
                let lnamevariable = lnameinputs.value; 
                let pinputs = document.getElementById('physicianinputs');
                var date2 = document.getElementById("date");  
                var clock1 = document.getElementById("clock");  
                var machinename = document.getElementById("machinename").innerHTML; 
                function Update(val,type) 
                {
                  if(type=='FirstName') fnamevariable=val; 
                  else if(type=='LastName') lnamevariable=val; 
                }
         
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
               firebase.firestore().enablePersistence()
               .catch((err) => {
                   if (err.code == 'failed-precondition') {
                       // Multiple tabs open, persistence can only be enabled
                       // in one tab at a a time.
                       console.log(err)
                       // ...
                   } else if (err.code == 'unimplemented') {
                       // The current browser does not support all of the
                       // features required to enable persistence
                       // ...
                       console.log(err)
                   }
                   else{
                     console.log("Error")
                   }
           
                   firebase.firestore().settings({
                     cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED
                 });
                 
               });
         
               let db = firebase.firestore(); 
               var idSTRING = "blc2@labx.com"; 
             
             //-----------------------------------------String to Date Function-------------------------------//
               //--------------writing data---------------------//
             
               function doc_withautoincrement(){
                
                var doc = db.collection("patientvalues").doc(idSTRING + " Mythic 18").collection("DATE").doc(DATEinput.innerText).collection("SID").doc(SIDinput.innerText);
                doc.get().then((docSnapshot) => {
                  if (docSnapshot.exists) {
                    $('#myModal1').modal('show');
                    // window.location.reload(); 
                  } else {
                    // document does not exist (only on online)
                  
                  db.collection("patientvalues").doc(idSTRING + " Mythic 18").collection("DATE").doc(DATEinput.innerText).collection("SID").doc(SIDinput.innerText).set(
                    {
                    id : idSTRING
                    })
                    db.collection("patientvalues").doc(idSTRING + " Mythic 18").collection("DATE").doc(DATEinput.innerText).set(
                    {
                      id : idSTRING
                    })
                  
                    db.collection("patientvalues").doc(idSTRING + " Mythic 18").set(
                      {
                        id : idSTRING
                      })
                
                  db.collection("patientvalues").doc(idSTRING + " Mythic 18").collection("DATE").doc(DATEinput.innerText).collection("SID").doc(SIDinput.innerText).collection("DATA").add(
                    {
                    /**WBC**/
                    WBC : th_wbc.innerHTML,
                    WBCUNIT : th_wbcunit.innerHTML,
                    WBCNORMAL : th_wbcnormal.innerHTML,
            
                    /**LYM**/
                    LYM : th_lym.innerHTML,
                    LYMUNIT  : th_lymunit.innerHTML,
                    LYMNORMAL  : th_lymnormal.innerHTML,
          
                    /**MON**/
                    MON : th_mon.innerHTML,
                    MONUNIT  : th_monunit.innerHTML,
                    MONNORMAL: th_monnormal.innerHTML,
                    
                    /**GRA**/
                    GRA : th_gra.innerHTML,
                    GRAUNIT  : th_graunit.innerHTML,
                    GRANORMAL : th_granormal.innerHTML,
                    
                    /**RBC**/
                    RBC : th_rbc.innerHTML,
                    RBCUNIT : th_rbcunit.innerHTML,
                    RBCNORMAL  : th_rbcnormal.innerHTML,
          
                    /**HGB**/
                    HGB : th_hgb.innerHTML,
                    HGBUNIT : th_hgbunit.innerHTML,
                    HGBNORMAL   : th_hgbnormal.innerHTML, 
          
                    /**HCT**/
                    HCT : th_hct.innerHTML,
                    HCTUNIT : th_hctunit.innerHTML,
                    HCTNORMAL  : th_hctnormal.innerHTML,
          
                    /**MCV**/
                    MCV : th_mcv.innerHTML,
                    MCVUNIT   : th_mcvunit.innerHTML,
                    MCVNORMAL : th_mcvnormal.innerHTML,
                    
                    /**MCH**/
                    MCH : th_mch.innerHTML,
                     MCHUNIT: th_mchunit.innerHTML,
                     MCHNORMAL  : th_mchnormal.innerHTML,
          
                    /**MCHC**/
                    MCHC : th_mchc.innerHTML,
                    MCHCUNIT : th_mchcunit.innerHTML,
                    MCHCNORMAL  : th_mchcnormal.innerHTML,
          
                    /**PLT**/
                    PLT : th_plt.innerHTML,
                    PLTUNIT: th_pltunit.innerHTML,
                   PLTNORMAL   : th_pltnormal.innerHTML,
                    
                    /**DATA**/
                    FirstName : fnamevariable, 
                    LastName : lnamevariable,
                    Gender : genderinputs.value, 
                    Age : ageinputs.value,
                    BLOOD: bloodinputs.value,
                    DATE : DATEinput.innerText, 
                    TIME : TIMEinput.value, 
                    SID : SIDinput.innerText,
                    Doctor: pinputs.value,
                    Machine : machinename, 
                    barcode : DATEinput.innerText + " "  + SIDinput.innerText
                   }).then(function (){
                     console.log("Data Written! " + "SID: " + SIDinput.innerText); 
         
                 }).catch(function(error)
                 {
                   console.log("Error Writing Document" + error);
                 }); 
               }
               
               }).catch((fail) => {
               });
             }
                           var socket = io();
              //SID DATA
                 socket.on('data', function(data) {
                   if (data !== null ){
                   console.dir(data);
                   } 
                 });     
                      //SID DATA
                 socket.on('SID', function(SID) {
                   if (SID !== null ){
                     document.getElementById('SID').innerHTML += String(SID).substr(4);
                     
                   } 
                 });
                       //DATE DATA
                       socket.on('DATE', function(DATE) {
                         if (DATE !== null ){
                           document.getElementById('DATE').innerHTML += String(DATE).substr(5).replace("/", "-").replace("/", "-");
                         } 
                       });
                         //TIME DATA
                         socket.on('TIME', function(TIME) {
                           if (TIME !== null ){
                             document.getElementById('timeinputs').value = String(TIME).substr(5);
                           } 
                         });
           //WBC DATA
           socket.on('WBC', function(WBC) {
             if (WBC !== null ){
               th_wbcunit.innerHTML += "<b>x10<sup>3</sup>/µL</b>" ;     
               var wbca = String(WBC).substr(3,5).replace(";", "").replace(";", ""); 
              /*low */ var wbcb = String(WBC).substr(12,6).replace(";", "").replace(";", "") ; 
              /* high */ var wbcc = String(WBC).substr(29,6).replace(";", "").replace(";", "");    
            
                if (parseFloat(wbca) > parseFloat(wbcc))
                    {
                     th_wbc.innerHTML += "<b>" + wbca + "&nbsp↑</b>" 
                    }
                   else if (parseFloat(wbca) < parseFloat(wbcb))
                    {
                     th_wbc.innerHTML += "<b>" + wbca + "&nbsp↓</b>" 
                    }
                    else 
                    {
                     th_wbc.innerHTML += "" + wbca + "" 
                    }
             } 
           });
           //WBCL DATA
              socket.on('WBCL', function(WBCL) {
              if (WBCL !== null ){
              th_wbcnormal.innerHTML += "<b>" + String(WBCL).substr(12,6).replace(";", "").replace(";", "") 
              + " - " + String(WBCL).substr(29,6).replace(";", "").replace(";", "") + "</b>";
            } 
          });
               
         
          //LYM DATA
            socket.on('LYM', function(LYM) {
             if (LYM !== null ){
                th_lymunit.innerHTML += "%" ;
                var lyma =  String(LYM).substr(5,4); 
                /*low */ var lymb = String(LYM).substr(12,5).replace(";", "").replace(";", ""); 
                /* high */ var lymc = String(LYM).substr(27,5).replace(";", "").replace(";", "");    
              
                  if (parseFloat(lyma) > parseFloat(lymc))
                      {
                       th_lym.innerHTML += "<b>" + lyma + "&nbsp↑</b>" 
                      }
                     else if (parseFloat(lyma) < parseFloat(lymb))
                      {
                       th_lym.innerHTML += "<b>" + lyma + "&nbsp↓</b>" 
                      }
                      else 
                      {
                       th_lym.innerHTML += "" + lyma + "" 
                      }
                 }
             });
         
          //LYML DATA
            socket.on('LYML', function(LYML) { 
             if (LYML !== null ){
                th_lymnormal.innerHTML +=  /* Low */ String(LYML).substr(12,5).replace(";", "").replace(";", "")
                + /* High */" - " + String(LYML).substr(27,5).replace(";", "").replace(";", "");
               }   
             });
         
          //MON DATA
            socket.on('MON', function(MON) {   
             if (MON !== null ){
               th_monunit.innerHTML += "%" ;
               var mona =  String(MON).substr(5,4); 
               /*low */ var monb = String(MON).substr(12,5).replace(";", "").replace(";", ""); 
               /* high */ var monc = String(MON).substr(27,5).replace(";", "").replace(";", "");    
             
                 if (parseFloat(mona) > parseFloat(monc))
                     {
                      th_mon.innerHTML += "<b>" + mona + "&nbsp↑</b>" 
                     }
                    else if (parseFloat(mona) < parseFloat(monb))
                     {
                      th_mon.innerHTML += "<b>" + mona + "&nbsp↓</b>" 
                     }
                     else 
                     {
                      th_mon.innerHTML += "" + mona + "" 
                     }
              }
            });
         
          //MONL DATA
            socket.on('MONL', function(MONL) {
             if (MONL !== null ){
             th_monnormal.innerHTML += /*low*/  String(MONL).substr(12,5).replace(";", "").replace(";", "")
             + /*High*/ " - " + String(MONL).substr(27,5).replace(";", "").replace(";", "");
             }
           }); 
         
          //GRA DATA
            socket.on('GRA', function(GRA) {
            if (GRA !== null ){
               th_graunit.innerHTML += "%" ;
               var graa =  String(GRA).substr(5,4); 
               /*low */ var grab = String(GRA).substr(12,5).replace(";", "").replace(";", "").replace(";", "").replace(".0", ""); 
               /* high */ var grac = String(GRA).substr(26,5).replace(";", "").replace(";", "").replace("0", "").replace(".", ""); 
             
                 if (parseFloat(graa) > parseFloat(grac))
                     {
                      th_gra.innerHTML += "<b>" + graa + "&nbsp↑</b>" 
                     }
                    else if (parseFloat(graa) < parseFloat(grab))
                     {
                      th_gra.innerHTML += "<b>" + graa + "&nbsp↓</b>" 
                     }
                     else 
                     {
                      th_gra.innerHTML += "" + graa + "" 
                     }
              }   
            });
          //GRAL DATA
             socket.on('GRAL', function(GRAL) {
             if (GRAL !== null ){
                 th_granormal.innerHTML += String(GRAL).substr(12,5).replace(";", "").replace(";", "").replace(";", "").replace(".0", "")
                 + " - " + String(GRAL).substr(26,5).replace(";", "").replace(";", "").replace("0", "").replace(".", ""); 
               } 
           });
         
           document.getElementById("submitbtn").addEventListener("click", function(event) {
             var fn = document.getElementById("fnameinputs");
             var ln = document.getElementById("lnameinputs");
             let gn = document.getElementById('genderselect'); 
             let an = document.getElementById('ageinputs');
             let pn = document.getElementById('physicianinputs');
             let bn = document.getElementById('bloodselect');
             let bnn1 = document.getElementById('bloodselect'); 
             let bnn2 = document.getElementById('th_blood'); 
             if (fn !== null && fn.value === "" || ln !== null && ln.value === "" || an !== null && an.value === "" || gn !== null && gn.value === "" || pn !== null && pn.value === "" || bn !== null && bn.value === "" )
             {
              $('#myModal').modal('show');
               bnn2.innerHTML += "<b>" + bnn1.value + "</b>"; 
             }
             else{
               bnn2.innerHTML += "<b>" + bnn1.value + "</b>"; 
               socket.close(); 
               doc_withautoincrement(); 
              window.print(); 
              JsBarcode("#barcode1", (DATEinput.innerText + " " + SIDinput.innerText), {
                format: "CODE39",
                flat : true,
              lineColor: "#0aa",
                              width: 1,
                              height: 50,
                              displayValue: true
              })
              db.collection("auditlog").doc(date2.innerText + " " + clock1.innerText).set(
                {
                id : idSTRING,
                SID : SIDinput.innerText,
                Test_Run_Date : DATEinput.innerText,
                Activity : "Run Sample",
                Machine : machinename,
                DateDid : date2.innerText + " " + clock1.innerText 
                })
              alert("Data Written! " + "SID: " + SIDinput.innerText); 
             setTimeout(function(){    
                window.location.reload();  
             }, 1000);
             }
         
           }); 
           
           //RBC DATA
             socket.on('RBC', function(RBC) {
             if (RBC !== null ) {
               th_rbcunit.innerHTML += "<b>x10<sup>6</sup>/µL</b>" ;
               var rbca =  String(RBC).substr(4,4); 
               /*low */ var rbcb = String(RBC).substr(18,6).replace(";", "").replace(";", "")
               /* high */ var rbcc =  String(RBC).substr(30,6).replace(";", "").replace(";", "") + "</b>";   
             
                 if (parseFloat(rbca) > parseFloat(rbcc))
                     {
                      th_rbc.innerHTML += "<b>" + rbca + "&nbsp↑</b>" 
                     }
                    else if (parseFloat(rbca) < parseFloat(rbcb))
                     {
                      th_rbc.innerHTML += "<b>" + rbca + "&nbsp↓</b>" 
                     }
                     else 
                     {
                      th_rbc.innerHTML += "" + rbca + "" 
                     }
             } 
           });
         
          //RBCL DATA
             socket.on('RBCL', function(RBCL) {
             if (RBCL !== null ){
              th_rbcnormal.innerHTML += "<b>" + /*low*/  String(RBCL).substr(18,6).replace(";", "").replace(";", "")
               + /*High*/ " - " + String(RBCL).substr(30,6).replace(";", "").replace(";", "") + "</b>";
             } 
           });
               
          //HGB DATA
            socket.on('HGB', function(HGB) {
              if (HGB !== null ){
                th_hgbunit.innerHTML += "<b>g/dL</b>" ;
                var hgba =   String(HGB).substr(4,4).replace(";", ""); 
                /*low */ var hgbb =  String(HGB).substr(9,5).replace(";", "").replace(";", "").replace(/[^0-9.]/, "")
                /* high */ var hgbc =  String(HGB).substr(21,5).replace(";", "").replace(";", "").replace(/[^0-9.]/, "") + "</b>";   
              
                  if (parseFloat(hgba) > parseFloat(hgbc))
                      {
                       th_hgb.innerHTML += "<b>" + hgba + "&nbsp↑</b>" 
                      }
                     else if (parseFloat(hgba) < parseFloat(hgbb))
                      {
                       th_hgb.innerHTML += "<b>" + hgba + "&nbsp↓</b>" 
                      }
                      else 
                      {
                       th_hgb.innerHTML += "" + hgba + "" 
                      }
               } 
             });
             
          //HGBL DATA
            socket.on('HGBL', function(HGBL) {
            if (HGBL !== null ){
                th_hgbnormal.innerHTML += "<b>" + /*low*/  String(HGBL).substr(9,5).replace(";", "").replace(";", "").replace(/[^0-9.]/, "")
                 + /*High*/ " - " + String(HGBL).substr(22,5).replace(";", "").replace(";", "").replace(/[^0-9.]/, "") + "</b>";
               } 
             });
         
          //HCT DATA
            socket.on('HCT', function(HCT) {
             if (HCT !== null ){
                th_hctunit.innerHTML += "<b>L/L</b>" ;
               var hcta =  String(HCT).substr(4,5); 
               /*low */ var hctb = String(HCT).substr(12,6).replace(";", "").replace(";", "");
               /* high */ var hctc = String(HCT).substr(24,6).replace(";", "").replace(";", "") + "</b>";   
             
                 if (parseFloat(hcta) > parseFloat(hctc))
                     {
                      th_hct.innerHTML += "<b>" + hcta + "&nbsp↑</b>" 
                     }
                    else if (parseFloat(hcta) < parseFloat(hctb))
                     {
                      th_hct.innerHTML += "<b>" + hcta + "&nbsp↓</b>" 
                     }
                     else 
                     {
                      th_hct.innerHTML += "" + hcta + "" 
                     }
               } 
             });
                   
          //HCTL DATA
            socket.on('HCTL', function(HCTL) {
            if (HCTL !== null ){
                th_hctnormal.innerHTML += "<b>" + /*low*/  String(HCTL).substr(12,6).replace(";", "").replace(";", "")
                + /*High*/ " - " + String(HCTL).substr(24,6).replace(";", "").replace(";", "") + "</b>";
               } 
             });
          
          //MCV DATA
            socket.on('MCV', function(MCV) {
            if (MCV !== null ){
                th_mcvunit.innerHTML += "fL" ;
                var mcva = String(MCV).substr(4,6).replace(";", ""); 
                /*low */ var mcvb =  String(MCV).substr(12,5).replace(";", "").replace(";", "")
                /* high */ var mcvc =  String(MCV).substr(30,6).replace(";", "").replace(";", "") + "</b>";   
              
                  if (parseFloat(mcva) > parseFloat(mcvc))
                      {
                       th_mcv.innerHTML += "<b>" + mcva + "&nbsp↑</b>" 
                      }
                     else if (parseFloat(mcva) < parseFloat(mcvb))
                      {
                       th_mcv.innerHTML += "<b>" + mcva + "&nbsp↓</b>" 
                      }
                      else 
                      {
                       th_mcv.innerHTML += "" + mcva + "" 
                      }
              } 
            });
         
          //MCVL DATA
             socket.on('MCVL', function(MCVL) {
              if (MCVL !== null ){
                  th_mcvnormal.innerHTML += /*low*/  String(MCVL).substr(12,5).replace(";", "").replace(";", "")
                  + /*High*/ " - " + String(MCVL).substr(30,6).replace(";", "").replace(";", "");
                 } 
               });
                     
          //MCH DATA
             socket.on('MCH', function(MCH) {
              if (MCH !== null ){
                 th_mchunit.innerHTML += "Pg" ;
                 var mcha =  String(MCH).substr(4,4); 
                 /*low */ var mchb = String(MCH).substr(12,5).replace(";", "").replace(";", "")
                 /* high */ var mchc = String(MCH).substr(29,8).replace(";", "").replace(";", "") + "</b>";   
               
                   if (parseFloat(mcha) > parseFloat(mchc))
                       {
                        th_mch.innerHTML += "<b>" + mcha + "&nbsp↑</b>" 
                       }
                      else if (parseFloat(mcha) < parseFloat(mchb))
                       {
                        th_mch.innerHTML += "<b>" + mcha + "&nbsp↓</b>" 
                       }
                       else 
                       {
                        th_mch.innerHTML += "" + mcha + "" 
                       }
                } 
              });
          //MCHL DATA
             socket.on('MCHL', function(MCHL) {       
             if (MCHL !== null ){
                th_mchnormal.innerHTML +=  /*low*/  String(MCHL).substr(12,5).replace(";", "").replace(";", "")
                + /*High*/ " - " + String(MCHL).substr(29,8).replace(";", "").replace(";", "");
          
         }
              });
         
          //MCHC DATA
            socket.on('MCHC', function(MCHC) {
              if (MCHC !== null ){
                  th_mchcunit.innerHTML += "g/dL" ;
                  var mchca =  String(MCHC).substr(5,4); 
                 /*low */ var mchcb = String(MCHC).substr(13,5).replace(";", "").replace(";", "")
                 /* high */ var mchcc = String(MCHC).substr(30,7).replace(";", "").replace(";", "");   
               
                   if (parseFloat(mchca) > parseFloat(mchcc))
                       {
                        th_mchc.innerHTML += "<b>" + mchca + "&nbsp↑</b>" 
                       }
                      else if (parseFloat(mchca) < parseFloat(mchcb))
                       {
                        th_mchc.innerHTML += "<b>" + mchca + "&nbsp↓</b>" 
                       }
                       else 
                       {
                        th_mchc.innerHTML += "" + mchca + "" 
                       } 
                 } 
               });
         
          //MCHCL DATA
            socket.on('MCHCL', function(MCHCL) {
            if (MCHCL !== null ){
                th_mchcnormal.innerHTML +=  /*low*/  String(MCHCL).substr(13,5).replace(";", "").replace(";", "")
                + /*High*/ " - " + String(MCHCL).substr(30,7).replace(";", "").replace(";", "");
          if (! $('#th_mchcnormal').children().length > 0 ) 
               {
                 var fn = document.getElementById("fnameinputs");
                 var ln = document.getElementById("lnameinputs");
                 let gn = document.getElementById('genderselect'); 
                 let an = document.getElementById('ageinputs');
                 let pn = document.getElementById('physicianinputs');
                 let bn = document.getElementById('bloodselect');
                 let bnn1 = document.getElementById('bloodselect'); 
                 let bnn2 = document.getElementById('th_blood'); 
                 if (fn !== null && fn.value === "" || ln !== null && ln.value === "" || an !== null && an.value === "" || gn !== null && gn.value === "" || pn !== null && pn.value === "" || bn !== null && bn.value === ""  )
                 {
                   socket.close(); 
                   $('#myModal').modal('show');
                
                 }
                 else{
                   bnn2.innerHTML += "<b>" + bnn1.value + "</b>"; 
                   socket.close(); 
                   doc_withautoincrement(); 
                  window.print(); 
                  JsBarcode("#barcode1", (DATEinput.innerText + " " + SIDinput.innerText), {
                    format: "CODE39",
                    flat : true,
                  lineColor: "#0aa",
                                  width: 1,
                                  height: 50,
                                  displayValue: true
                  })
                  db.collection("auditlog").doc(date2.innerText + " " + clock1.innerText).set(
                    {
                    id : idSTRING,
                    SID : SIDinput.innerText,
                    Test_Run_Date : DATEinput.innerText,
                    Activity : "Run Sample",
                    Machine : machinename,
                    DateDid : date2.innerText + " " + clock1.innerText 
                    })
                  alert("Data Written! " + "SID: " + SIDinput.innerText); 
                 setTimeout(function(){    
                    window.location.reload();  
                 }, 1000);
                 }
                        
         }    
           } 
            });
         
          //PLT DATA
            socket.on('PLT', function(PLT) {
            if (PLT !== null ){
                th_pltunit.innerHTML += "<b>x10<sup>3</sup>/µL</b>" ;
                var plta = String(PLT).substr(4,4); 
                /*low */ var pltb =  String(PLT).substr(12,6).replace(";", "").replace(";", "").replace(/[^0-9.]/, "")
                /* high */ var pltc =  String(PLT).substr(29,6).replace(";", "").replace(";", "") + "</b>";   
              
                  if (parseFloat(plta) > parseFloat(pltc))
                      {
                       th_plt.innerHTML += "<b>" + plta + "&nbsp↑</b>" 
                      }
                     else if (parseFloat(plta) < parseFloat(pltb))
                      {
                       th_plt.innerHTML += "<b>" + plta + "&nbsp↓</b>" 
                      }
                      else 
                      {
                       th_plt.innerHTML += "" + plta + "" 
                      }
              } 
            });
         
          //PLTL DATA
            socket.on('PLTL', function(PLTL) {
            if (PLTL !== null ){
                th_pltnormal.innerHTML +=  "<b>" + String(PLTL).substr(12,6).replace(";", "").replace(";", "").replace(/[^0-9.]/, "")
                + " - " + String(PLTL).substr(29,6).replace(";", "").replace(";", "") + "</b>"
           
              } 
            });
               
            function printfunction() {
              window.print();
          }

          function dataonload() {
            var myimg = document.getElementById("signatories1"); 
            var myimg2 = document.getElementById("logo1"); 
            var myimg3 = document.getElementById("header1"); 
            //Automatic Image Data (Signatories)!!
            var docRef = db.collection("Images").doc("signatories.png");
          docRef.get().then((doc) => {
              if (doc.exists) {
                 myimg.src = doc.data().ImageURL; 
                 console.log("Signatories Present")
              } else {
                  // doc.data() will be undefined in this case
                  console.log("No such document!");
              }
          }).catch((error) => {
              console.log("Error getting document:", error);
          });
          //Automatic Image Data (Logo)!!
          var docRef = db.collection("Images").doc("logo.png");
          docRef.get().then((doc) => {
              if (doc.exists) {
                 myimg2.src = doc.data().ImageURL; 
                 console.log("Logo Present")
              } else {
                  // doc.data() will be undefined in this case
                  console.log("No such document!");
              }
          }).catch((error) => {
              console.log("Error getting document:", error);
          });
          //Automatic Image Data (Header)!!
          var docRef = db.collection("Images").doc("header.png");
          docRef.get().then((doc) => {
              if (doc.exists) {
                 myimg3.src = doc.data().ImageURL; 
                 console.log("Header Present")
              } else {
                  // doc.data() will be undefined in this case
                  console.log("No such document!");
              }
          }).catch((error) => {
              console.log("Error getting document:", error);
          });
          }
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