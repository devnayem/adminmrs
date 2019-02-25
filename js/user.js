(function(){
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

  var rootRef = firebase.database().ref().child("User");

  rootRef.on("child_added", snap => {
    var name = snap.child("Name").val();
    var email = snap.child("Email").val();

    $("#table_body").append("<tr><td>"+name+"</td><td>"+email+"</td>")
  });
});