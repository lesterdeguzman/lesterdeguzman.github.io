// var x = 1;

// function addCard() {
//   var ul = document.getElementById("tasks");
//   var li = document.createElement("li");
//   var inner = "New card " + x;
//   li.appendChild(document.createTextNode(inner));
//   ul.appendChild(li);
//   x++;
//   return x;
// }

// $(document).ready(function() {
// var l = 0;

//   for( l = 0; l &lt; localStorage.length; l++)
//     $("#tasks").append("<li id='task-"+ l +"'>" + localStorage.getItem('task-'+l) +
//                        " <a href='#'>Delete</a></li>");




function addList() {

  var div = document.getElementById("lists-section");
  var i = 0;
 
  var inDiv = document.createElement("div");
  var nm = document.getElementById("list-name").value;
  var inner = '<h3 class="list-title">' + nm + '</h3><ul class="list-items" id="myUl"></ul><span onclick="myFunction()" class="def">+ Add Another Card</span><div id="myDIV" class="hide"><input type="text" id="newItem" placeholder="Item name..."><span onclick="add()" class="addBtn">Add Card</span>'
  inDiv.setAttribute("class", "list");


  inDiv.innerHTML = inner;
  div.appendChild(inDiv);

var ul = document.getElementById("lists-section");
localStorage["lists"] = ul.innerHTML


}

function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

var ul = document.getElementById("myUl");

function add() {
  var item = document.getElementById("newItem").value;
  var itemTxt = document.createTextNode(item);
  var li = document.createElement("li");
  // var btn = document.createElement("button");
  // var btnx = document.createTextNode("x");
  // li.appendChild(itemTxt);
  // span.className = "buttons";

var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "button";
  span.appendChild(txt);
  li.appendChild(span);

  if (item === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUl").appendChild(li);
  }
  document.getElementById("newItem").value = "";

  span.setAttribute("onclick", "remove()");
  span.appendChild(txt);
  li.appendChild(itemTxt);
  li.appendChild(span);
  ul.appendChild(li).value;
  localStorage["lists"] = ul.innerHTML
}

function remove() {
  var task = this.event.currentTarget.parentNode;
  ul.removeChild(task);
  localStorage["lists"] = ul.innerHTML // updating localstorage
}

if (localStorage["lists"]) {
  ul.innerHTML = localStorage["lists"];
}


