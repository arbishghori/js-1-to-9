/////////  ANSWER # 1  /////////////



/////////////////////
////////  ANSWER # 2  //////////////

var a = 8;
var b = 5;
var result = --a - --b + ++b + b--;
document.write("a is :" + a + "<br>b is :" + b + "<br>result" + result)




/////////////
///////  ANSWER # 3  /////////

// Prompt the user to enter their name
var userName = prompt("Please enter your name:");

// Greet the user
console.log("Hello, " + userName + "! Welcome!");

/////////////
/////  ANSWER # 4  //////////

// Prompt the user to enter a number
var inputNumber = prompt("Enter a number for the multiplication table:");

// Convert the input to a number, or use 5 as default
var number = parseFloat(inputNumber) || 7;

// Display the multiplication table
document.write("<h2>Multiplication Table of " + number + "</h2>");
document.write("<ul>");

for (var i = 1; i <= 10; i++) {
  var result = number * i;
  document.write("<li>" + number + " x " + i + " = " + result + "</li>");
}

document.write("</ul>");

/////////////////////////////////////
////////////  ANSWER # 5  ///////////

// Take inputs from the user for subject names
var subject1 = prompt("Enter the name of subject 1:");
var subject2 = prompt("Enter the name of subject 2:");
var subject3 = prompt("Enter the name of subject 3:");

// Total marks for each subject
var totalMarks = 100;

// Take obtained marks for each subject from the user
var obtainedMarks1 = parseFloat(prompt("Enter obtained marks for " + subject1 + ":"));
var obtainedMarks2 = parseFloat(prompt("Enter obtained marks for " + subject2 + ":"));
var obtainedMarks3 = parseFloat(prompt("Enter obtained marks for " + subject3 + ":"));

// Calculate total obtained marks and percentage
var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

// Display the result in a table format
document.write("<table border='1'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td></tr>");
document.write("<tr><td colspan='2'>Total Obtained Marks</td><td>" + totalObtainedMarks + "</td></tr>");
document.write("<tr><td colspan='2'>Percentage</td><td>" + percentage.toFixed(2) + "%</td></tr>");
document.write("</table>");