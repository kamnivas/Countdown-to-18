function calculateCountdown(unit) {
    const targetDate = new Date(2028, 11, 24);  // December 24, 2028
    const today = new Date();

    let resultText = '';
    if (targetDate > today) {
        const totalDays = Math.ceil((targetDate - today) / (1000 * 60 * 60 * 24));

        // Calculate exact years, months, and days
        let years = targetDate.getFullYear() - today.getFullYear();
        let months = targetDate.getMonth() - today.getMonth();
        let days = targetDate.getDate() - today.getDate();

        // Adjust if days are negative (crossed into the next month)
        if (days < 0) {
            months -= 1;
            const lastMonth = new Date(targetDate.getFullYear(), targetDate.getMonth(), 0); // Get last day of previous month
            days += lastMonth.getDate();  // Add the days from the last month
        }

        // Adjust if months are negative (crossed into the next year)
        if (months < 0) {
            years -= 1;
            months += 12;  // Add 12 months to adjust
        }

        // Display the results based on the chosen unit
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = ''; // Clear previous content

        // Create and display the result based on the chosen unit
        const message = document.createElement('p');
        message.textContent = "You have:";

        let resultTextElement;
        switch (unit) {
            case 'days':
                resultTextElement = document.createElement('span');
                resultTextElement.textContent = `${totalDays} Days`;
                resultTextElement.style.fontSize = '2em';
                resultTextElement.style.fontWeight = 'bold';
                break;
            case 'months':
                const totalMonths = years * 12 + months;  // Convert years into months
                resultTextElement = document.createElement('span');
                resultTextElement.textContent = `${totalMonths} Months, ${days} Days`;
                resultTextElement.style.fontSize = '1.5em';
                resultTextElement.style.fontWeight = 'bold';
                break;
            case 'years':
                resultTextElement = document.createElement('span');
                resultTextElement.textContent = `${years} Years, ${months} Months, ${days} Days`;
                resultTextElement.style.fontSize = '1.25em';
                resultTextElement.style.fontWeight = 'bold';
                break;
        }

        const untilText = document.createElement('p');
        untilText.textContent = "until you turn 18";

        // Append the message and result to the resultDiv
        resultDiv.appendChild(message);
        resultDiv.appendChild(resultTextElement);
        resultDiv.appendChild(untilText);
    } else {
        const message = document.createElement('p');
        message.textContent = "You are already 18!";
        resultDiv.appendChild(message);
    }
}