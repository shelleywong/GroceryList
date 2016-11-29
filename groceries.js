var myList = [];

function addItem(){
  //Get the value of what the user typed in the text box and assign it to a variable called input
  var input = document.getElementById("newItem").value;
  //if the item is not already in the list, add it to the list
  if(myList.indexOf(input) == -1) {
    //add item to myList array
    myList.push(input);
    console.log(myList);
    //Get the element listDisplay and assign it to a variable called list
    var list = document.getElementById("listDisplay");
    //Create a new variable called item and assign it to: document.createElement("li");
    //This creates a new list item element for the document object model (DOM).
    var item = document.createElement("li");
    //Create a new variable called itemName and assign it to: document.createTextNode(input);
    //This creates plain text element from the value of the variable input to put in the DOM.
    var itemName = document.createTextNode(input);
    //create a variable which contains a new button element
    var btnClose = document.createElement("button");
    btnClose.classList.add("button");
    btnClose.classList.add("btn-danger");
    btnClose.classList.add("btn-xs");
    var iconClose = document.createElement("span");
    iconClose.classList.add("glyphicon");
    iconClose.classList.add("glyphicon-remove");
    //when button is clicked, parent list item is removed
    btnClose.addEventListener("click",removeParentListItem);
    //make the span element a child to the button element
    btnClose.appendChild(iconClose);
    //This puts that plain text element as the innerHTML (child) of the li element called item
    item.appendChild(itemName);
    //make the btn element a child of the list element
    item.appendChild(btnClose);
    //This puts the li element (item) inside the ul in the document (list) so it can be seen on the screen
    list.appendChild(item);
    //Set the value attribute of the text input element to be an empty string so that
    //what the user typed in is no longer shown in the text box
    document.getElementById("newItem").value = "";
  }
}

function removeParentListItem() {
  var mom = this.parentNode;
  var grandma = mom.parentNode;
  var itemRemove = mom.firstChild.textContent;
  var itemIndex = myList.indexOf(itemRemove);
  grandma.removeChild(mom);
  myList.splice(itemIndex,1);
  console.log(myList);
}

//assign myList elements to a string with commas between elements
//save the list in a cookie
function saveList(){
  var text = myList.join(", ");
  setCookie("groceryItems",text,1);
}

//get element "listDisplay" and replace all of its children with nothing
//update myList so that it is an empty array
function clearList(){
  document.getElementById("listDisplay").innerHTML = "";
  myList = [];
}

//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
