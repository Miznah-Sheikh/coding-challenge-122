
    // Task 1 - Created Revenue Metric Card
    const dashboard = document.getElementById("dashboard"); // Using getElementById
    const dashboardAlt = document.querySelector("#dashboard"); // Using querySelector

    // Create a new metric card for Revenue
    const revenueCard = document.createElement("div");
    revenueCard.setAttribute("class", "metric-card");
    revenueCard.setAttribute("id", "revenueCard");

    // Populate the card
    revenueCard.innerHTML = `<h3>Revenue</h3><p>$0</p>`;

    // Append to the dashboard
    dashboard.appendChild(revenueCard);

// Task 2 - Updated Metric Cards via Array Conversion
    const metricCards = document.querySelectorAll(".metric-card");
    const metricCardsArray = Array.from(metricCards); // Converting NodeList to Array

    metricCardsArray.forEach(card => {
        card.innerHTML += " - Updated"; // Appending text update
        card.style.backgroundColor = "#f0f0f0"; // Changing background color
    });