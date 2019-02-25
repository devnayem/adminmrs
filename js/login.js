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


  const txtEmail = document.getElementById('txtEmail');
  const txtPass = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignup = document.getElementById('btnSignup');
  const btnLogout = document.getElementById('btnLogout');

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      alert("Logged in");

    } else {
      // No user is signed in.

    }
  });


  btnLogin.addEventListener('click', e => {
    const email = txtEmail.value;
    const pass = txtPass.value;
    const auth = firebase.auth();

    const promise = auth.signInWithEmailAndPassword(email,pass);
    promise.catch(e => console.log(e.messsage)); 
    
  });

  btnSignup.addEventListener('click', e => {
    const email = txtEmail.value;
    const pass = txtPass.value;
    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email,pass);
    promise.catch(e => console.log(e.messsage)); 
  });

  btnLogout.addEventListener('click', e => {
    firebase.auth().signOut();
  });

  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
      console.log(firebaseUser);
    } else {
      console.log("Not Logged In");
    }
  });


}());