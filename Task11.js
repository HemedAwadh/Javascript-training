//TASK 11: Using Python or PHP or Java or Ruby or JavaScript
// Write a program that takes the date of birth of a person and the program outputs the age in terms of years,months,days TODAY.

// Get user's date of birth
let dobInput = prompt("Enter your date of birth (YYYY-MM-DD):");

if (!dobInput || !dobInput.match(/^\d{4}-\d{2}-\d{2}$/)) {
    alert("Invalid input! Please enter date in YYYY-MM-DD format.");
} else {
    let dob = new Date(dobInput); // Convert input to Date object
    let today = new Date(); // Get today's date

    // Calculate age in years, months, and days
    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();

    // Adjust for negative values (if the birth month/day hasn't occurred yet this year)
    if (days < 0) {
        months--;
        let lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += lastMonth.getDate(); // Add the days of the previous month
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    // Display the age
    alert(`You are ${years} years, ${months} months, and ${days} days old.`);
    console.log(`You are ${years} years, ${months} months, and ${days} days old.`);
}
