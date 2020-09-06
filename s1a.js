
today = new Date();
currentMonth = today.getMonth();
currentYear = today.getFullYear();
selectYear =  currentYear;//document.getElementById("year");
selectMonth = currentMonth; //document.getElementById("month");

months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);

function skip(m) {
    //currentYear = parseInt(selectYear.value);
    //selectMonth = document.getElementById("month");
    currentMonth = parseInt(0);
    showCalendar(m, currentYear);
}


function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
}

function prev() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendar(currentMonth, currentYear);
}



function showCalendar(month, year) {

    let firstDay = (new Date(year, month)).getDay();

    tbl = document.getElementById("calendar-body"); // body of the calendar

    // clearing all previous cells
    tbl.innerHTML = "";


    // filing data about month and in the page via DOM.
    monthAndYear.innerHTML = months[month] + " " + year;
    selectYear.value = year;
    selectMonth.value = month;

    // creating all cells
    let date = 1;


    for (let i = 0; i < 6; i++) {

        // creates a table row
        let row = document.createElement("tr");

        //creating individual cells, filing them up with data.
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                cell = document.createElement("td");
                cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            else if (date > daysInMonth(month, year)) {
                break;
            }

            else {
                cell = document.createElement("td");
                cellText = document.createTextNode(date);
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.classList.add("bg-info");
                } // color today's date
                cell.appendChild(cellText);
                row.appendChild(cell);
                date++;
            }


        }

        tbl.appendChild(row); // appending each row into calendar body.
    }


        //insert extra row
        var table1 = document.getElementById("calendar-body");
        var row1 = table1.insertRow(0);


        
        for(let i = 0; i < 7; i++){
             cell1 = document.createElement("td");
             row1.appendChild(cell1);
        }
              


       

}


// check how many days in a month code from https://dzone.com/articles/determining-number-days-month
function daysInMonth(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth, 32).getDate();
}



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
