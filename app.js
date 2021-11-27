const http = require('http');
const cookieParser = require("cookie-parser");
const csrf = require("csurf"); 
const bodyParser = require("body-parser")
const express = require('express')
const Regex = require('@serialport/parser-regex')
const SerialPort = require('serialport')
const port = new SerialPort('COM1', {
  baudRate: 9600
}) 
var admin = require("firebase-admin"); 
const app = express()
const port1 = process.env.PORT || 3000
let server = http.createServer(app);
var serviceAccount = require("./serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://analyzerdb-default-rtdb.firebaseio.com"
});
const Readline = SerialPort.parsers.Readline; 
const parsers = new Readline(); 
const csrfMiddleware = csrf({cookie: true}); 
//------------------------------app usages---------------------------------------//
app.engine("html", require("ejs").renderFile); 
app.use(express.static('./'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(cookieParser()); 
app.use(csrfMiddleware); 
const io = require("socket.io")(server, {
    allowEIO3: true // false by default
  });
  app.all("*", (req, res, next) => {
    res.cookie("XSRF-TOKEN", req.csrfToken()); 
    next(); 
  }); 

  app.get("/", function(req,res)
  {
    const sessionCookie = req.cookies.session || "";
    admin
      .auth()
      .verifySessionCookie(sessionCookie, true)
      .then(() => {
        res.render("myth22/home.html");
      })
      .catch((error) => {
        res.redirect("/login");
      });
  });
  app.get("/login", function(req,res)
  {
    const sessionCookie = req.cookies.session || "";
    admin
      .auth()
      .verifySessionCookie(sessionCookie, true)
      .then(() => {
        res.render("myth22/home.html");
      })
      .catch((error) => {
        res.render("login.html");
      });
  });
  app.get("/myth22/run", function(req,res)
  {
    const sessionCookie = req.cookies.session || "";
    admin
      .auth()
      .verifySessionCookie(sessionCookie, true)
      .then(() => {
        res.render("myth22/runsamples.html");
      })
      .catch((error) => {
        res.redirect("/login");
      });
  });
  app.get("/myth18/run", function(req,res)
  {
    const sessionCookie = req.cookies.session || "";
    admin
      .auth()
      .verifySessionCookie(sessionCookie, true)
      .then(() => {
        res.render("myth18/runsamples.html");
      })
      .catch((error) => {
        res.redirect("/login");
      });
  });
  app.get("/myth60/run", function(req,res)
  {
    const sessionCookie = req.cookies.session || "";
    admin
      .auth()
      .verifySessionCookie(sessionCookie, true)
      .then(() => {
        res.render("myth60/runsamples.html");
      })
      .catch((error) => {
        res.redirect("/login");
      });
  });
  app.get("/myth22/records", function(req,res)
  {
    const sessionCookie = req.cookies.session || "";
    admin
      .auth()
      .verifySessionCookie(sessionCookie, true)
      .then(() => {
        res.render("myth22/managerecords.html");
      })
      .catch((error) => {
        res.redirect("/login");
      });
  });
  app.get("/myth18/records", function(req,res)
  {
    const sessionCookie = req.cookies.session || "";
    admin
      .auth()
      .verifySessionCookie(sessionCookie, true)
      .then(() => {
        res.render("myth18/managerecords.html");
      })
      .catch((error) => {
        res.redirect("/login");
      });
  });
  app.get("/myth60/records", function(req,res)
  {
    const sessionCookie = req.cookies.session || "";
    admin
      .auth()
      .verifySessionCookie(sessionCookie, true)
      .then(() => {
        res.render("myth60/managerecords.html");
      })
      .catch((error) => {
        res.redirect("/login");
      });
  });
  app.get("/settings", function(req,res)
  {
    const sessionCookie = req.cookies.session || "";

    admin
      .auth()
      .verifySessionCookie(sessionCookie, true)
      .then(() => {
        res.render("myth22/settings.html");
      })
      .catch((error) => {
        res.redirect("/login");
      });
  });
 
  app.get("/about", function(req,res)
  {
    const sessionCookie = req.cookies.session || "";
    admin
      .auth()
      .verifySessionCookie(sessionCookie, true)
      .then(() => {
        res.render("myth22/about.html");
      })
      .catch((error) => {
        res.redirect("/login");
      });
  });

  app.get("/home", function(req,res)
  {
    const sessionCookie = req.cookies.session || "";
    admin
      .auth()
      .verifySessionCookie(sessionCookie, true)
      .then(() => {
        res.render("myth22/home.html");
      })
      .catch((error) => {
        res.redirect("/login");
      });
  });
  app.post("/sessionLogin", (req, res) => {
    const idToken = req.body.idToken.toString();
    const expiresIn = 60 * 60 * 24 * 5 * 1000;
    admin
      .auth()
      .createSessionCookie(idToken, { expiresIn })
      .then(
        (sessionCookie) => {
          const options = { maxAge: expiresIn, httpOnly: true};
          res.cookie("session", sessionCookie, options);
        //   async function start() {
        //     await db.collection('auditlog').delete();
        //  }
        //  start();
          res.end(JSON.stringify({ status: "success" }));
        },
        (error) => {
          res.status(401).send("UNAUTHORIZED REQUEST!");
        }
      );
  });
  app.get("/sessionLogout", (req, res) => {
    res.clearCookie("session");
    res.redirect("/login");
  });
    //System Uptime
   
    io.on('connection', function(io) {
      
      let uptimedata = process.uptime(); 
      io.emit('uptimedata', uptimedata)
      let status; 
      let barcode; 
      port.on('readable', function () {
     console.log("Message" + port.read())
    })  
    SerialPort.list().then(function(ports){
      ports.forEach(function(port){
        console.log(port); 
        status = JSON.stringify(port)
        io.emit('status', status)
      })
    });

      
      port.open(function (err) {
        if (err) {
          barcode = "Error " + err.message; 
          io.emit('barcode', barcode)
        }
        
      })
    })
   
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^app usages^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^//
io.on('connection', function(io) {
}) 
const parser = port.pipe(new Regex({ regex: /[\r\n]+/ }))
parser.on('data', function(data) {
  io.emit('data', data)
  //Analyzer Model Data
  let AMD = data.match(/^MYTHIC 1;/);
  io.emit('AMD', AMD)
    //SID Datat 
    let SID = data.match(/^SID;.+/);
    io.emit('SID', SID)
     //DATE Data
     let DATE = data.match(/^DATE;.+/);
     io.emit('DATE', DATE)
      //TIME Data
        let TIME = data.match(/^TIME;.+/);
        io.emit('TIME', TIME)
      //SEQ Data
             let SEQ = data.match(/^SEQ;.+;/);
             io.emit('SEQ', SEQ)
  //1 WBC Data
  let WBC = data.match(/^WBC;.+/);
  io.emit('WBC', WBC)
  //WBCL Data
  let WBCL = data.match(/^WBC;.+/);
  io.emit('WBCL', WBCL)  
  //2 NEU Data
let NEU = data.match(/^NEU%;.+/);
io.emit('NEU', NEU)
//NEUL Data
let NEUL = data.match(/^NEU%;.+/);
io.emit('NEUL', NEUL)
  //3 LYM Data
    let LYM = data.match(/^LYM%;.+/);
    io.emit('LYM',LYM)
    //LYML Data
  let LYML = data.match(/^LYM%;.+/);
  io.emit('LYML', LYML)   
     //4 MON Data
  let MON = data.match(/^MON%;.+/);
  io.emit('MON', MON)
 //MONL Data
 let MONL = data.match(/^MON%;.+/);
 io.emit('MONL', MONL)  
 //5 EOS Data
let EOS = data.match(/^EOS%;.+/)
io.emit('EOS', EOS)
//EOSL Data
let EOSL = data.match(/^EOS%;.+/);
io.emit('EOSL', EOSL)
//12 BAS Data
let BAS = data.match(/^BAS%;.+/)
io.emit('BAS', BAS)
//BAS Data
let BASL = data.match(/^BAS%;.+/)
io.emit('BASL', BASL)
    //6 RBC Data
  let RBC = data.match(/^RBC;.+/);
  io.emit('RBC', RBC)
    //RBCL Data
    let RBCL = data.match(/^RBC;.+/);
    io.emit('RBCL', RBCL)
 //7 HGB Data
 let HGB = data.match(/^HGB;.+/);
 io.emit('HGB', HGB)
 //HGBL Data
 let HGBL = data.match(/^HGB;.+/);
 io.emit('HGBL', HGBL)
//8 HCT Data
let HCT = data.match(/^HCT;.+/);
io.emit('HCT', HCT)
//HGBL Data
let HCTL = data.match(/^HCT;.+/);
io.emit('HCTL', HCTL)
//9 MCV Data
let MCV = data.match(/^MCV;.+/);
io.emit('MCV', MCV)
//MCVL Data
let MCVL = data.match(/^MCV;.+/);
io.emit('MCVL', MCVL)
//10 MCH Data
let MCH = data.match(/^MCH;.+/);
io.emit('MCH', MCH)
 //MCHL Data
 let MCHL = data.match(/^MCH;.+/);
 io.emit('MCHL', MCHL)
//11 MCHC Data
let MCHC = data.match(/^MCHC;.+/);
io.emit('MCHC', MCHC)
//MCHCL Data
let MCHCL = data.match(/^MCHC;.+/);
io.emit('MCHCL', MCHCL)
//12 PLT Data
let PLT = data.match(/^PLT;.+/);
io.emit('PLT', PLT)
//PLTL Data
let PLTL = data.match(/^PLT;.+/);
io.emit('PLTL', PLTL)
})


 server.listen(80, "127.0.0.1");
 console.log('Server running at http://127.0.0.1:80/');

