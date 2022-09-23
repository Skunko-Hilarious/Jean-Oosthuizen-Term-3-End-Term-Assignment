// create three variables to store the information needed, namely:

// 1.the price of each letter = 5
let letterPrice = 5;
// 2. the quantity = 15
let letterCount = 15;
// 3. calculate the total by multipying the price by quantity
let total = (letterPrice*letterCount).toString();

//4. Get the element with an id "cost"
let costElement = document.getElementById("cost");

//lastly use innerHTML to update the total cost
costElement.innerHTML = "R"+total;

