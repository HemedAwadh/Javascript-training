//  TASK 3: Using Python or PHP or Java or Ruby or JavaScript
//  Write a program which gets a phone number from a form input or terminal. Validates the phone number by checking if it starts with +254.. or 07.. or 7… or 254.. or 01... or  1.. Convert the number to start with +254… 
//  e.g if a user enters “0712345678”, the program should display “+254712345678”
// e.g if a user enters “0112345678”, the program should display “+254112345678”
// e.g if a user enters “712345678”, the program should display “+254712345678”
// Once you learn functions,revisit this and write this code inside a function.

 

function formatPhoneNumber(phoneNumber) {
      // Trim whitespace
    phoneNumber = phoneNumber.trim();

    if (phoneNumber.startsWith("+254") && phoneNumber.length === 13) {
        return phoneNumber;
    } else if (phoneNumber.startsWith("07") && phoneNumber.length === 10) {
        return "+254" + phoneNumber.slice(1);
    } else if (phoneNumber.startsWith("7") && phoneNumber.length === 9) {
        return "+254" + phoneNumber;
    } else if (phoneNumber.startsWith("01") && phoneNumber.length === 10) {
        return "+254" + phoneNumber.slice(1);
    } else if (phoneNumber.startsWith("1") && phoneNumber.length === 9) {
        return "+254" + phoneNumber;
    } else if (phoneNumber.startsWith("254") && phoneNumber.length === 12) {
        return "+" + phoneNumber;
    } else {
        return "Invalid Phone Number";
    }
}

// Prompt user for input
var phoneNumber = prompt("Enter your Number:");

// Format the phone number
let formattedNumber = formatPhoneNumber(phoneNumber);

// Display the result
alert(formattedNumber);
