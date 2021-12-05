window.addEventListener("DOMContentLoaded", () => {
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
          console.log("yey")
        }

        firebase.firestore().settings({
          cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED
      });
      
    });
          document.getElementById("login")
            .addEventListener("submit", (event) => {
              event.preventDefault  ();
              const login = event.target.login.value;
              const password = event.target.password.value;
              firebase
                .auth()
                .signInWithEmailAndPassword(login, password)
                .then(({ user }) => {
                  return user.getIdToken().then((idToken) => {
                    return fetch("/sessionLogin", {
                      method: "POST",
                      headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        "CSRF-Token": Cookies.get("XSRF-TOKEN"),
                      },
                      body: JSON.stringify({ idToken }),
                    });
                  });
                }).then(() => {
                  firebase.auth().onAuthStateChanged(function(user) {
                    if (user) {
                      console.log("User " + login + " has logged in")
                      window.location.assign("/home");
                    } else {
                      return firebase.auth().signOut();
                    }
                }); 
                }).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    document.getElementById("info1").innerHTML = errorMessage
    $('#myModal1').modal('show');   

});
              return false;
          
            });
        });

       
//-------------------------------------dangerous code-----------------------------------------//
          document
          .getElementById("forgot-password")
        .addEventListener("submit", (event) => {
          event.preventDefault  ();
         var email = document.getElementById("email_field").value 
          forgotPassword(email)
        });
//-------------------------------------dangerous code-----------------------------------------//
      
        const forgotPassword = (email) => {
        firebase.auth()
          .sendPasswordResetEmail(email)
           .then(function () { 
          document.getElementById("info1").innerHTML = "Email Sent to " + email
            $('#myModal1').modal('show');
          }).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    document.getElementById("info1").innerHTML = errorMessage
    $('#myModal1').modal('show'); 
    console.log(error);
});
        }
  