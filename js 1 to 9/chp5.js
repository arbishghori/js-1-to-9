// var num1 = parseInt(prompt("Enter first number to add in second number:"));
// var num2 = parseInt(prompt("Enter second number:"));
// var result = num1 + num2;
// document.write("Sum of "+ num1+ " + "+ num2 + " is: "+ result + "<br>");

// ////////

// var number1 = prompt("Enter first number to subtract with second number");
// var number2 = prompt("Enter second number");
// var subtract = number1 - number2;
// document.write("Sum of " + number1 + " - " + number2 + " is: " + subtract + "<br>");

// // /////////////

// var number1 = prompt("Enter first number to multiply with second number");
// var number2 = prompt("Enter second number");
// var multiply = number1 * number2;
// document.write("Sum of " + number1 + " * "+ number2 + " is: " + multiply + "<br>");

// // ////////////

// var number1 = prompt("Enter first number to divide with second number ");
// var number2 = prompt("Enter second number");
// var divide = number1 / number2;
//document.write("Sum of " + number1 + " / " + number2 + " is: " + divide + "<br>")

///////////
//////////   ANSWER 3  //////////////
//Declare a variable
var num = 2;

// Show the value of the variable after declaration
document.write("Value after variable declaration is: " + num + "<br>");

// Initialize the variable with some number
num = 5;

// Show the initial value of the variable
document.write("Initial value: " + num + "<br>");

// Increment the variable
num++;

// Show the value of the variable after increment
document.write("Value after increment is: " + num + "<br>");

// Add 7 to the variable
num += 7;

// Show the value of the variable after addition
document.write("Value after addition is: " + num + "<br>");

// Decrement the variable
num--;

// Show the value of the variable after decrement
document.write("Value after decrement is: " + num + "<br>");

// Show the remainder after dividing the variable's value by 3
var remainder = num % 3;
document.write("The remainder is: " + remainder + "<br>");

var num = 2;
document.write("Value after variable declaration is: " + num + "</br>" );
num = 5;
document.write("Initial value: " + num + "<br>");
num++;
document.write("Value after increment is: " + num + "<br>");
num += 7;
document.write("Value after addition is " + num + "<br>");
num--;
document.write("Value after decrement is:" + num + "<br>");
var remainder = num % 3;
document.write("The remainder is: " + remainder + "<br>");



// ////////////////////////////////////////
// //////////  ANSWER 4  ///////////

var ticketPrice = 1500 ;
var numbersOfTickets = 3;
var totalCost = ticketPrice * numbersOfTickets;
document.write("The total cost for " + numbersOfTickets + " tickets is: " + totalCost +" PKR");



// //////////////////////////////////////////////

// ///////// ANSWER 5  /////////////
// ///////  TABLE code method 1  /////////

// Prompt the user to enter a number
var number = parseInt(prompt("Enter a number:"));

// Check if the input is a valid number
if (isNaN(number)) {
  document.write("Invalid input. Please enter a valid number.");
} else {
  document.write("<h2>Multiplication Table of " + number + "</h2>");
  document.write("<ul>");

  // Display the multiplication table
  for (var i = 1; i <= 10; i++) {
    var result = number * i;
    document.write("<li>" + number + " x " + i + " = " + result + "</li>");
  }

  document.write("</ul>");
}

//////// table code method 2 /////////////

// // Get the number from the user
// const number = parseInt(prompt('Enter a number:'));

// // Create a table element
// const table = document.createElement('table');

// // Create the table header row
//  const headerRow = document.createElement('tr');
//  const headerCell = document.createElement('th');
//  headerCell.textContent = ' Table of  ' +  +  number;
//  headerRow.appendChild(headerCell);
//  table.appendChild(headerRow);

// // Generate the table rows and cells
//  for (let i = 1; i <= 10; i++) {
//    const row = document.createElement('tr');
  
//    const multiplicandCell = document.createElement('td');
//    multiplicandCell.textContent = number + ' x ' + i;
  
//    const productCell = document.createElement('td');
//    productCell.textContent = number * i;
  
//    row.appendChild(multiplicandCell);
//    row.appendChild(productCell);
  
//    table.appendChild(row);
//  }

// // Append the table to the body of the HTML document
// document.body.appendChild(table);

// //////////////////////////////////////
// //////  ANSWER 6  ////////////

var celsius = 30;
var fahrenheit = (celsius * 3 / 2) + 20;
document.write(celsius + "°C is " + fahrenheit + "°F");

var fahrenheit2 = 50;
var celsius2 = (fahrenheit2 - 40) * 2 / 3;
document.write(fahrenheit2 + "°F is " + celsius2 + "°C");

/////////////////////////////////////
////////  ANSWER 7  ////////////////

// Store the items in the shopping cart as an array of objects
 const cartItems = [
     { id: 1, name: 'Product 1', price: 10.99, quantity: 2 },
     { id: 2, name: 'Product 2', price: 5.99, quantity: 1 },
     { id: 3, name: 'Product 3', price: 7.49, quantity: 3 }
   ];
  
   // Calculate the total price of the items in the cart
   let totalPrice = 0;
  for (const item of cartItems) {
    totalPrice += item.price * item.quantity;
  }
  
  // Apply any discounts or coupons
  const discount = 2.5; // Example discount amount
  totalPrice -= discount;
  
  // Calculate the tax amount
  const taxRate = 0.1; // Example tax rate
  const taxAmount = totalPrice * taxRate;
  
  // Calculate the final total including tax
  const finalTotal = totalPrice + taxAmount;
  
  // Display the summary of the checkout process
  console.log('Items in Cart:');
  for (const item of cartItems) {
     console.log(`${item.name} - $${item.price} x ${item.quantity}`);
   }
   console.log('-----------------------------');
   console.log('Total Price: $' + totalPrice.toFixed(2));
   console.log('Discount: $' + discount.toFixed(2));
   console.log('Tax: $' + taxAmount.toFixed(2));
   console.log('-----------------------------');
   console.log('Final Total: $' + finalTotal.toFixed(2));
  
// /////////////////////////////////////////////
// //////////  ANSWER 8  //////////////////////

// Store the total marks and marks obtained by the student
const totalMarks = 500;
const marksObtained = 380;

// Calculate the percentage
const percentage = (marksObtained / totalMarks) * 100;

// Create a message to display the result
const message = `Total Marks: ${totalMarks}<br>
Marks Obtained: ${marksObtained}<br>
Percentage: ${percentage.toFixed(2)}%`;

// Create a div element to display the result
const resultDiv = document.createElement('div');
resultDiv.innerHTML = message;

// Append the div to the body of the HTML document
document.body.appendChild(resultDiv);

// ///////////////////////////////////
// //////////////  ANSWER 9  /////////

// Given exchange rates
const usdToPkrRate = 104.80;
const sarToPkrRate = 28;

// Total currency in US dollars and Saudi Riyals
const usdAmount = 10;
const sarAmount = 25;

// Convert the total currency to Pakistani Rupees
const totalPkr = (usdAmount * usdToPkrRate) + (sarAmount * sarToPkrRate);

// Display the result
console.log(`Total currency in Pakistani Rupees: ${totalPkr}`);

/////////////////////////////////////////
////////////  ANSWER # 10  /////////////

//Initialize the variable with a number
var num = 10;

// Perform arithmetic operations in a single expression
var result = (((num + 5) * 10) / 2);

// Output the final result
console.log("Final result:", result);

///////////////////////////////////
////////////  ANSWER # 11  /////////////

//Store the current year and birth year in variables
var currentYear = new Date().getFullYear();
var birthYear = 2002; // Replace this with the actual birth year

// Calculate possible ages based on the stored values
var age1 = currentYear - birthYear;
var age2 = age1 - 2;

// Output the calculated ages
//console.log("Possible ages are:", age1, "and", age2);

document.write("Current Year :" + currentYear + "<br>Birth Year :" + birthYear + "<br>Your Age is :" + age1 )  

//////////////////////////////////////////
///////////  ANSWER # 12  ///////////////

// Store the radius of the circle in a variable
var radius = 2; // Replace with the actual radius value

// Calculate the circumference
var circumference = 2 * Math.PI * radius;

// Calculate the area
var area = Math.PI * Math.pow(radius, 2);

// Output the results
console.log("Radius of a circle " + 2)
console.log("The circumference is " + circumference.toFixed(2));
console.log("The area is " + area.toFixed(2));

////////////////////////////////////////
///////////  ANSWER # 13  /////////////

// Store your favorite snack, current age, maximum age, and estimated amount per day
var favoriteSnack = "chocolate"; // Replace with your favorite snack
var currentAge = 21; // Replace with your current age
var maximumAge = 80; // Replace with your maximum age
var amountOfSnackPerDay = 1; // Replace with the estimated amount per day

// Calculate the total number of snacks you would need
var yearsRemaining = maximumAge - currentAge;
var totalSnacks = yearsRemaining * 365 * amountOfSnackPerDay;

// Output the result

document.write("<br><br>FINISH Favourite Snack: " + favoriteSnack + "<br>Current Age: " + currentAge + "<br>Maximum Age: " + maximumAge + "<br>Amount Of Snacks Per Day: " + amountOfSnackPerDay + "<br><br>You will need " + totalSnacks + " " + favoriteSnack + " to last you until the ripe old age of " + maximumAge + ".")
// document.write("<br><br>Favourite Snack: " + favoriteSnack)
// document.write("<br>Current Age: " + currentAge)
// document.write("<br>Maximum Age: " + maximumAge)
// document.write("<br>Amount Of Snacks Per Day: " + amountOfSnackPerDay)
//document.write("<br><br>You will need " + totalSnacks + " " + favoriteSnack + " to last you until the ripe old age of " + maximumAge + ".");