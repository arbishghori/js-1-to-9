//variables and strings 
// Declare a variable called username.
// answer no 1 

let username = "your_username";

//Declare a variable called myName & assign to it a string
// that represents your Full Name.
// answer no 2

let myName = "Your Full Name";

//Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box.
// answer no 3

// (a) Declare a variable named 'message'
var message;

// (b) Assign the value "Hello World" to the variable 'message'
message = "Hello World";

//(c) Display the message in an alert box
alert(message);

//Write a script to save student’s bio data in JS variables and
// show the data in alert boxes.
// answer 4 

// Prompt the user to enter the student's bio data
var name = prompt("Enter student's name:");
var age = prompt("Enter student's age:");
var grade = prompt("Enter student's grade:");

// Display the student's bio data using alert boxes
alert("Student's Name: " + name);
alert("Student's Age: " + age);
alert("Student's Grade: " + grade);

// Write a script to display the following alert using one JS
// variable:
//answer no 5

// Define the variable
var message = "This is an alert message!";

// Display the alert
alert(message);

//Declare a variable called email and assign to it a string that
// represents your Email Address(e.g. example@example.com).
// Show the blow mentioned message in an alert box.(Hint: use
// string concatenation)
// answer no 6

var email = "example@example.com";

alert("Your email address is: ")

//Declare a variable called book & give it the value “A
// smarter way to learn JavaScript”. Display the following
// message in an alert box:
// answer no 7

var book = "A smarter way to learn JavaScript";
alert(book);

//Write a script to display this in browser through JS
// answer no 8

         // JavaScript code
        document.addEventListener('DOMContentLoaded', function() {
            // Get the element with id "message"
            var messageElement = document.getElementById('message');
            
            // Set the message text
            var message = 'Hello, world!';
            
            // Display the message in the browser
            messageElement.innerHTML = message;
        });
   
  //Store following string in a variable and show in alert and
// browser through JS
// “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”
  // answer no 9

  var myString = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";

alert(myString);

document.write(myString);