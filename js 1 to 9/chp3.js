// variables for numbers 
//Declare a variable called age & assign to it your age. Show
// your age in an alert box
// answer no 1

var age = 25;
alert("My age is " + age + " years old.");

//Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”.
// answer no 2

var visitCount = 0;

function incrementVisitCount() {
  visitCount++;

  document.getElementById("visit-message").textContent = "You have visited this site " + visitCount + " times.";
}

//Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser:
// answer no 3
var birthYear = 2006;
console.log("My birth year is " + birthYear);

//A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
// answer no 4

var visitorName = "John Doe";
var productTitle = "T-shirt";
var quantity = 5;

var message = visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store";
document.write(message);
