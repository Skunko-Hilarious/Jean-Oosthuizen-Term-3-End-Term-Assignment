// 1. Store the greeting in a variable
let greeting = "Salutations my dear friend and esteemed comrade";
// 2. Store the users name in a variable
let username = "Jean!";
/* 3. Create the welcome message by concatenating the strings in the two variables */
let welcomeMessage = greeting + " " + username;

// 4. Get the element that has an id of greeting
let greetingElement = document.getElementById("greeting");
// 5. Replace the content of this element with the personal message. You can use innerHTML 
greetingElement.innerHTML = welcomeMessage;