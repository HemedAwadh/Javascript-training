
//TASK 12: Using Python or PHP or Java or Ruby or JavaScript
//Write a program that prints the largest of 4 inputs taken as input from a user.

var a = parseFloat(prompt("Enter first number: "));
var b = parseFloat(prompt("Enter second number: "));
var c = parseFloat(prompt("Enter third number: "));
var d = parseFloat(prompt("Enter fourth number: "));

let largest = a;
if (b > largest) largest = b;
if (c > largest) largest = c;
if (d > largest) largest = d;

console.log("The largest number is :" + largest);
alert("The largest number is :" + largest);
