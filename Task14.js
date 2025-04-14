// TASK 14: Using Python or PHP or Java or Ruby or JavaScript
// Write a program that takes input of 2 values and adds them. The program should only accept numbers and floats only or otherwise display an error “invalid character entered” and take the user to re-enter the inputs .
while (true) {

    let num1 = parseFloat(prompt("Enter the first number: "));
    let num2 = parseFloat(prompt("Enter the second number: "));
    if (!isNaN(num1) && !isNaN(num2)) {
        
        let result = num1 + num2
        alert("The result is:" +  result)
        break;
    } else {
        alert("Invalid character entered.");
    }

}        
