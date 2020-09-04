var firebaseConfig = {
    apiKey: "AIzaSyBiP64drpnaRk1cFTkjX6vAyOKpsBn3y5k",
    authDomain: "authenticate-e0f5d.firebaseapp.com",
    databaseURL: "https://authenticate-e0f5d.firebaseio.com",
    projectId: "authenticate-e0f5d",
    storageBucket: "authenticate-e0f5d.appspot.com",
    messagingSenderId: "344513831016",
    appId: "1:344513831016:web:d283cf7026d64919c3dbdd",
    measurementId: "G-WQQYZG4C01"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();



//*************
     //sign up
     /*
    function Sign_in() {

      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      if (email.length < 4) {
        alert('Please enter an email address.');
        return;
      }
      if (password.length < 4) {
        alert('Please enter a password.');
        return;
      }


                
      // Create user with email and pass.
      // [START createwithemail]

    firebase.auth().signInWithEmailAndPassword(email, password);
      // [END createwithemail]

      
      
    }
*/
     var n = 1;

    function Sign_in() {

      if (n==3 && firebase.auth().currentUser) {
        // [START signout]
        //firebase.auth().signOut();
        alert('you are already signed in');

        // [END signout]
      } 

      else {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        if (email.length < 4) {
          alert('Please enter an email address.');
          return;
        }
        if (password.length < 4) {
          alert('Please enter a password.');
          return;
        }

        // Sign in with email and pass.
        // [START authwithemail]
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          } else {
            //alert(errorMessage);
            n=3;
            alert('Sucessfully signed in!')

          }
         // console.log(error);
          // [END_EXCLUDE]

        });
        // [END authwithemail]


      }

    }

    function log_out(){
         firebase.auth().signOut();
         alert('Logout successful!');

    }


