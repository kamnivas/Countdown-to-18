function calculateDays() {
    const targetDate = new Date('2028-12-24'); // Target date: 12/24/2028
    const today = new Date();

    // Calculate the difference in time (milliseconds)
    const timeDifference = targetDate - today;

    // Convert time difference from milliseconds to days
    const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    // Display the result
    const resultDiv = document.getElementById('result');
    if (daysLeft > 0) {
        resultDiv.textContent = `You have ${daysLeft} days left before you turn 18`;
    } else if (daysLeft === 0) {
        resultDiv.textContent = "You turned 18 today!";
    } else {
        resultDiv.textContent = "You are over 18!";
    }
}