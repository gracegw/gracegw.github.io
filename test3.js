// JavaScript file for the web page "World Peace Issue Tracker"
// Created by Harrison Kong
// Copyright (C) Coursera 2020

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


// Paste the web app's configuration above this line
// Our code starts below

const rootRef = firebase.database().ref('notes/');



// Task 4 ------------------------------------------
//what you use to retrieve data from database
//ref to root node issues
//rootRef= reference to our root node issues, on is a function
//value is the name of the events- can be add, delete, etc.
//value is any time there are any changes in our data tree, this is called
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
      //see what it looks like, it's just the developter tools "console"
      //section you get from click 3 dots at top of chrome
    //  console.log(issue);
      var row = document.createElement("tr");
      //create a table cell for issue "severity", other two has spaceholders-that changed
      //replace 2 blanks with data we retrieve
      //creating table cells and rowa here in js instead html bc creating dynamically
      //replace line below with new code
      //row.innerHTML = "<td>" + issue.severity + "</td><td>" + encodeHtml(issue.description) + "</td><td>" + issue.resolved + "</td>";

      //created drop down box,this.value is new value after field is changed-if change dropdown from yes to no,
      //this.value is the "no"
      //saving key for this, call updateIssue
      row.innerHTML = "<td>" + issue.category + "</td><td>" + issue.note 

      //+ after </td> instead of a ; because there is an extra column
      + "</td>"+

//pass in key of that row to deleteIssue
      "<td><input type='button' class='btn btn-danger' value='X' onclick='deleteIssue(\"" + child.key + "\")'/></td>";

      listTableBody.append(row);
    });

  },
//error handle-if there is error in retrieve data
  (error) => {
    console.log("Error: " + error.code);
  }

);

// Task 5 ------------------------------------------

function addNewIssue() {
  //pull value out of the first dropdown box of a severity option
  //
  const category = document.getElementById("category-text").value;
  const note = document.getElementById("note-text").value;

  if (note.length == 0) {
    alert("Description cannot be blank!");
    return;
  }

  // Add code to insert into firebase here
//did this in task 3, with the push
//instead of hard coding these values, want to get data from web
//save values in variables above in line 67
rootRef.push ({
  note: note,
  category: category,
  severity: severity
});

  document.getElementById("note-text").value="";
}

// Task 6 ------------------------------------------


// Task 7 ------------------------------------------

function deleteIssue(issueKey) {
  if (confirm("Are you sure?")) {
    //alert pop-up
    //alert("delete function for issue key: " + issueKey);

    var recordRef = firebase.database().ref("note/"+issueKey);

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
