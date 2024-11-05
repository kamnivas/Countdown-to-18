function calculateDays() {
    const birthDate = new Date('2006-01-01'); // Replace with your birthdate (YYYY-MM-DD format)
    const today = new Date();

    // Calculate the date of the 18th birthday
    const eighteenthBirthday = new Date(birthDate);
    eighteenthBirthday.setFullYear(birthDate.getFullYear() + 18);

    // Calculate the difference in time
    const timeDifference = eighteenthBirthday - today;
    
    // Calculate days left
    const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    // Display result
    const resultDiv = document.getElementById('result');
    if (daysLeft > 0) {
        resultDiv.textContent = `You have ${daysLeft} days left until you turn 18.`;
    } else {
        resultDiv.textContent = "You're already 18 or older!";
    }
}