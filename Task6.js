//TASK 6:Using Python or PHP or Java or Ruby or JavaScript
// Write a program that lets the user input a password. Give them only 4 attempts to check the passwords entered against “admin@123”. If the password is correct access is granted. After you show them a message , the account is blocked.


const correctPassword = "admin@123";
var attempts = 4;

while (attempts > 0) {
    var password = prompt("Enter password:");

    if (password === correctPassword) {
        alert("Access granted");
        break;  // Exit loop if password is correct
    }

    attempts--;  // Reduce attempts

    if (attempts > 0) {
        alert(`Incorrect password. ${attempts} attempts left.`);
    } else {
        alert("Account blocked");
    }
}
