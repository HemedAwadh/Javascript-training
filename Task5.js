// TASK 5: Using Python or PHP or Java or Ruby or JavaScript
// Implement a program that takes 3 users  inputs from the terminal or the Browser, and stores them in three variables. Return the largest of the three. Do this without using the the inbuilt max () function!


// Prompt the user for three numbers
var a = parseFloat(prompt("Enter first number:"));
var b = parseFloat(prompt("Enter second number:"));
var c = parseFloat(prompt("Enter third number:"));


var largest;

// Compare the numbers manually
if (a >= b && a >= c) {
    largest = a;
} else if (b >= a && b >= c) {
    largest = b;
} else {
    largest = c;
}

// Display the result
alert("The largest number is: " + largest);
