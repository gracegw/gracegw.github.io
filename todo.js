
//**************
//sort abc order?


//create delete button
var list1 = document.getElementsByTagName("LI");
for (var i = 0; i < list1.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// actually delete
var close = document.getElementsByClassName("close");
for (var i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
} 



// Add a "checked" symbol when clicking on a list item

//api stuff
//returns the first Element within the document that matches the specified selector
var list = document.querySelector('ul');
//sets up a function that will be called whenever the specified event is delivered to the targe
list.addEventListener('click', function(ev) {

  //ev=click event?

  //The tagName property returns the tag name of the element.
  //the target is LI
  if (ev.target.tagName === 'LI') {
    //toggles between hide() and show() for the selected elements
    ev.target.classList.toggle('checked');
  }
}, false);


// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("input1").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Please enter an event");
  } else {
    document.getElementById("newUL").appendChild(li);
  }
  document.getElementById("input1").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}