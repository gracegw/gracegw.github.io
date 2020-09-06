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
     
    function handleSignUp() {

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

firebase.auth().createUserWithEmailAndPassword(email, password);
      // [END createwithemail]
            alert('Sucessfully created account!')

    }





//***************
//password auth
        
var myInput = document.getElementById("password");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}


// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}






