
   // Your web app's Firebase configuration
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


//the var database thing
//// Get a reference to the database service-creates the node
//firebase.database.Reference:
const rootRef = firebase.database().ref('notes/');

//add the rootRef.push to get node
/*
rootRef.push ({
  category: "Logo does not show up on screen 3",
  note: "yes"
});

*/

//  Read and listen for changes to the entire contents of a path.

rootRef.on("value",

//snapshot of entire tree, data snapshot provided by firebase
  (snapshot) => {
    const listTableBody = document.getElementById("table1");

    // clear all the table rows first
    listTableBody.textContent = "";
//take in an array, "child", and call this function for each elem in array
//create rows for each issue
    snapshot.forEach((child) => {
      //getting val, not key of issue
      issue = child.val();
      //creating a row
      var row = document.createElement("tr");
      //create a table cell for issue "severity", other two has spaceholders-that changed

      //this.value is new value after field is changed-
     
      row.innerHTML = "<td>" + issue.category + "</td><td>" + issue.note

      //+ after </td> instead of a ; because there is an extra column
      + "</td>"+

//pass in key of that row to deleteNote
      "<td><input type='button' class='btn btn-danger' value='X' onclick='deleteNote(\"" + child.key + "\")'/></td>";
      table1.append(row);
    });

  },
//error handle-if there is error in retrieve data
  (error) => {
    console.log("Error: " + error.code);
  }

);



  function addNewNote() {
  //pull value out of the first dropdown box of a severity option
  const category = document.getElementById("category-text").value;
  const note = document.getElementById("note-text").value;

  if (category.length == 0) {
    //alert = popup
    alert("Please add a category!");
    return;
  }

  if (note.length == 0) {
    //alert = popup
    alert("Please add a Note!");
    return;
  }

  // variables get data from web
rootRef.push ({
  note: note,
  category: category
});

  document.getElementById("note-text").value="";
}



function deleteNote(issueKey) {
  if (confirm("confirm delete note")) {

    var recordRef = firebase.database().ref("notes/"+issueKey);

    recordRef.remove()
       .catch(function(error) {
         alert("Delete failed: " + error.message)
       });
  }
}

// Utility function to encode special HTML characters so that the
// web browser does not treat them as HTML tags
// but as literal characters

function encodeHtml(str) {
  str = str.replace(/&/g, '&amp;');
  str = str.replace(/</g, '&lt;');
  str = str.replace(/>/g, '&gt;');
  str = str.replace(/ /g, '&nbsp;');
  return str;
}


