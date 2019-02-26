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
		
		const btnLogout = document.getElementById('btnLogout');
		

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          console.log("Yey! Logged In");
    
        } else {
          // No user is signed in.
          window.location = "login.html";
        }
			});
			
			btnLogout.addEventListener('click', e => {
				firebase.auth().signOut();
      });
      


      
      var rootRef1 = firebase.database().ref().child("User");

      rootRef1.on("child_added", snap => {
        var name = snap.child("Name").val();
        var password = snap.child("Password").val();
        var phone = snap.child("phone").val();
      
        $("#table_users").append("<tr><td>"+ name +"</td><td>"+ password +"</td><td>"+ phone +"</td><td><button>Delete</button></td></tr>")
        
      });


      var rootRef2 = firebase.database().ref().child("Tools");

      rootRef2.on("child_added", snap => {
        var tlID = snap.child("ToolsId").val();
        var tlName = snap.child("Name").val();
        var tlStock = snap.child("Stock").val();

        $("#table_reports").append("<tr><td>"+ tlID +"</td><td>"+ tlName +"</td><td>"+ tlStock + "</td><td><button>Delete</button></td></tr>")
        
      });
  
  }());