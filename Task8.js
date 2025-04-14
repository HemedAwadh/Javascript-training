// TASK 8: Using Python or PHP or Java or Ruby or JavaScript
// Write a program that takes as input the speed of a car e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.
// For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.
// Prompt the user to enter the speed of the car
let speed = parseFloat(prompt("Enter the speed of the car:"));
const speedLimit = 70;

if (isNaN(speed) || speed < 0) {
    alert("Invalid input! Please enter a valid speed.");
} else if (speed < speedLimit) {
    alert("Ok");
} else {
    let points = Math.floor((speed - speedLimit) / 5); // 1 point for every 5 km above 70
    alert("Points: " + points);

    if (points > 12) {
        alert("License suspended");
    }
}
