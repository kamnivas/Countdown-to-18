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
        switch (unit) {
            case 'days':
                resultText = `${totalDays} Days`;
                break;
            case 'months':
                const totalMonths = years * 12 + months;  // Convert years into months
                resultText = `${totalMonths} Months, ${days} Days`;
                break;
            case 'years':
                resultText = `${years} Years, ${months} Months, ${days} Days`;
                break;
        }
    } else {
        resultText = "You are already 18!";
    }

    const resultDiv = document.getElementById('result');
    resultDiv.textContent = resultText;
}