// 1.Create 2 variables to hold the name and message text.
let name = "Jean";
let messageText = "template message";
//2. Get the element with an id of name.
let nameElement = document.getElementById("name");

//3.Replace the content of this elementby using innerHTML
nameElement.innerHTML = name;

//4.Get the element with an id of note.
let noteElement = document.getElementById("note");

//5.Replace the content of this element using innerHTML.
noteElement.innerHTML = messageText;




