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

  var rootRef = firebase.database().ref().child("Tools");

      rootRef.on("child_added", snap => {
        var tlDescription = snap.child("Description").val();
        var tlName = snap.child("Name").val();
        var tlStock = snap.child("Stock").val();
        var tlID = snap.child("ToolsId").val();
      
        $("#table_users").append("<tr><td>"+ tlDescription +"</td><td>"+ tlName +"</td><td>"+ tlStock +"</td>" + tlID + "</td><td><button>Delete</button></td></tr>")
        
      });
});