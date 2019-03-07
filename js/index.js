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
        var id = snap.child("id").val();
        var name = snap.child("name").val();
        var email = snap.child("email").val();
        var phone = snap.child("phone").val();
        var pass = snap.child("password").val();
      
        $("#tbl_users_list").append("<tr><td>"+ id +"</td><td>"+ name+"</td><td>"+ email +"</td><td>"+ phone +"</td><td>"+ pass +"</td></tr>")
        
      });
      

     
      //-----------------------------------------------------------
      
      var rootRef2 = firebase.database().ref().child("Tools");

      rootRef2.on("child_added", snap => {
        var tlID = snap.child("ToolsId").val();
        var tlName = snap.child("Name").val();
        var tlStock = snap.child("Stock").val();

        $("#table_reports").append("<tr><td>"+ tlID +"</td><td>"+ tlName +"</td><td>"+ tlStock + "</td><td><button>Edit</button><button>Delete</button></td></tr>")
      });

      var rootRef3 = firebase.database().ref().child("Requests");

      rootRef3.on("child_added", snap => {
        var reqName = snap.child("name").val();
        var reqPhone = snap.child("phone").val();
        var reqTime = snap.child("date").val();
      
        $("#table_request").append("<tr><td>"+ reqName +"</td><td>"+ reqPhone +"</td><td>"+ reqTime +"</td></tr>")
    
      });
      

  }());