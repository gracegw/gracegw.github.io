var firebaseConfig = {
    apiKey: "AIzaSyD1kVDKLBm5jnmrmlNhxOYbpXdqGWt3pa4",
    authDomain: "notepad-b6c82.firebaseapp.com",
    databaseURL: "https://notepad-b6c82.firebaseio.com",
    projectId: "notepad-b6c82",
    storageBucket: "notepad-b6c82.appspot.com",
    messagingSenderId: "945242521131",
    appId: "1:945242521131:web:88cbbb4a5d690143f3f46e",
    measurementId: "G-VDDT3W67NP"
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

        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
          .then(function() {
          return firebase.auth().signInWithEmailAndPassword(email, password);
           })

          .catch(function(error) {
             // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
      
            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
               } 

        });
           


    }

    function log_out(){
         firebase.auth().signOut();
         alert('Logout successful!');

    }


