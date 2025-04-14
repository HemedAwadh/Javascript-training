// TASK 2: Using Python or PHP or Java or Ruby or JavaScript
// Prompt the user for a number either on a form input or the terminal. Depending on whether the number is even or odd, display  either “odd” or “even” to the user.
// Hint: how does an even / odd number react differently when divided by 2?
//  Once you learn functions,revisit this and write this code inside a function.
// Extras:
//  If the number is a multiple of 4, print out “divisible by 4”.
//  Once you learn functions,revisit this and write this code inside a function.
// Prompt the user for a number
var num = (prompt("Enter a number: "))

// # Check if the number is even or odd
if (num % 2 == 0) {
    console.log("even");
    alert("The number is even");
} else {
    console.log("odd");
    alert(" The number is odd");
}

//Check if the number is a multiple of 4
if (num % 4 == 0)
    console.log("divisible by 4");
    alert("divisible by 4");
