function calculateDays() {
    const yourBirthDate = new Date('2006-01-01');  // replace with your birthdate
    const today = new Date();
    const eighteenthBirthday = new Date(yourBirthDate);
    eighteenthBirthday.setFullYear(yourBirthDate.getFullYear() + 18);

    const timeDifference = eighteenthBirthday - today;
    const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    const resultDiv = document.getElementById('result');
    if (daysLeft > 0) {
        resultDiv.textContent = `You have ${daysLeft} days left until you turn 18.`;
    } else {
        resultDiv.textContent = "You're already 18 or older!";
    }
}