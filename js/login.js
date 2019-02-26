(function() {

  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCrrWaTiXJDDocqPt5_dIUNdIa1TWDFjVY",
    authDomain: "metdrone247.firebaseapp.com",
    databaseURL: "https://metdrone247.firebaseio.com",
    projectId: "metdrone247",
    storageBucket: "metdrone247.appspot.com",
    messagingSenderId: "527708005922"
  };
  firebase.initializeApp(config);

  //variables
  const txtEmail = document.getElementById('txtEmail');
  const txtPass = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');


  // to login
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      window.location = "index.html";
    } else {
      console.log("Not Logged In");
    }
  });

  btnLogin.addEventListener('click', e => {
    const email = txtEmail.value;
    const pass = txtPass.value;
    const auth = firebase.auth();

    const promise = auth.signInWithEmailAndPassword(email,pass);
    promise.catch(e => console.log(e.messsage)); 
  });





}());