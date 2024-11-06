function calculateDays() {
    const targetDate = new Date(2028, 11, 24);
    const today = new Date();

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