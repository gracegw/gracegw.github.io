
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


function type_funct() {
  document.getElementById("text").contentEditable = true;
}
