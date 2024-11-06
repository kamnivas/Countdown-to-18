function calculateDays() {
    const targetDate = new Date(2028, 12, 24); // December 24, 2028 (local time, not UTC)
    const today = new Date(); // This will give the current date in your local time zone (Los Angeles)

    // Calculate the difference in milliseconds
    const timeDifference = targetDate - today;

    // Convert milliseconds to days
    const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    // Display the result
    const resultDiv = document.getElementById('result');
    if (daysLeft > 0) {
        resultDiv.textContent = `You have ${daysLeft} days until you're 18`;
    } else {
        resultDiv.textContent = "You are already 18!";
    }
}