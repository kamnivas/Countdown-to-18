function calculateDays() {
    const targetDate = new Date(Date.UTC(2028, 11, 24)); // December 24, 2028 in UTC (months are 0-indexed)
    const today = new Date();

    // Get today's date in UTC to avoid timezone issues
    const todayUTC = new Date(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()));

    // Calculate the difference in milliseconds
    const timeDifference = targetDate - todayUTC;

    // Convert milliseconds to days
    const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    // Display the result
    const resultDiv = document.getElementById('result');
    if (daysLeft > 0) {
        resultDiv.textContent = `You have ${daysLeft} days left until December 24, 2028.`;
    } else if (daysLeft === 0) {
        resultDiv.textContent = "Today is December 24, 2028!";
    } else {
        resultDiv.textContent = "December 24, 2028 has already passed!";
    }
}