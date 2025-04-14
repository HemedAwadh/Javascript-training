
// TASK 10: Using Python or PHP or Java or Ruby or JavaScript
// Write a program that calculates the total stock in a company from the array/list below if we know that the stock is the last digit in every array/list.

//prods = [["omo","30kshs","300"], ["milk","50kshs","200"],["bread","45kshs","359"], ["coffee","5kshs","79"]]

// Product list with stock as the last element
const prods = [
    ["omo", "30kshs", "300"],
    ["milk", "50kshs", "200"],
    ["bread", "45kshs", "359"],
    ["coffee", "5kshs", "79"]
];

let totalStock = 0;

// Loop through each product and sum the stock
for (let i = 0; i < prods.length; i++) {
    let last = parseInt(prods[i][2]); // Convert stock to a number
    totalStock += last;
}

// Display the total stock
console.log("Total stock:", totalStock);
alert("Total stock: " + totalStock);
