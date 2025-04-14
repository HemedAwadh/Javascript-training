// TASK 13: Using Python or PHP or Java or Ruby or JavaScript or C# or Go
// Write a program that takes the email and password as input from a user and checks if they are equal to “admin@mail.com” and password is “Admin@123” ,
//  if so then print  “Login is Successful” and if not print “Invalid username or password”. ONLY accept 3 tries after which it notifies you that you have been blocked.

var username = "admin@mail.com"
var password = "Admin@123"
var attempts = 3

while (attempts > 0){
    var entered_username = prompt("Enter username: ")
    var entered_password = prompt("Enter password: ")

    if (entered_username === username && entered_password == password){
        alert("Login is Successful");
         console.log("Login is Successful");
        break;
    }else{
        attempts -= 1;
        alert(`Invalid username or password. ${attempts} attempts left.`);
    }
    
}

if (attempts === 0);
    alert("You have been blocked.");
    console.log("You have been blocked");
