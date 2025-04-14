// TASK 4: Using Python or PHP or Java or Ruby or JavaScript
// Write a program which accepts email as form input or from terminal. Validate the email by checking if it's a valid email. 
// Hint: Check if it contains an “@” symbol and “.” symbol.

function validateEmail(email) {
    // Trim whitespace
    email = email.trim();

    // Check if email contains "@" and "." and is in a valid format
    if (email.includes("@") && email.includes(".") && email.indexOf("@") < email.lastIndexOf(".")) {
        return "Valid Email";
    } else {
        return "Invalid Email";
    }
}

// Prompt user for input
let email = prompt("Enter your Email:");

// Validate the email
let result = validateEmail(email);

// Display the result
alert(result);
