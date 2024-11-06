function calculateDays() {
    const targetDate = new Date(2028, 11, 24);
    const today = new Date();

    // Calculate the difference in milliseconds
    const timeDifference = targetDate - today;

    // Convert milliseconds to days
    const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    // Display the result
     // Display the result with larger text for days left
     const resultDiv = document.getElementById('result');
     resultDiv.innerHTML = ''; // Clear previous content
 
     if (daysLeft > 0) {
         // Create elements for structured display
         const message = document.createElement('p');
         message.textContent = "You have:";
 
         const daysText = document.createElement('span');
         daysText.textContent = `${daysLeft} Days`;
         daysText.style.fontSize = '2em'; // Larger font size for emphasis
         daysText.style.fontWeight = 'bold';
 
         const untilText = document.createElement('p');
         untilText.textContent = "until you turn 18";
 
         // Append elements to resultDiv
         resultDiv.appendChild(message);
         resultDiv.appendChild(daysText);
         resultDiv.appendChild(untilText);
     } else {
         resultDiv.textContent = "You are already 18!";
     }
}