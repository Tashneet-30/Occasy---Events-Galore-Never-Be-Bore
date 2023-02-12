// Get the current date
let today = new Date();

// Get the year and month of the current date
let year = today.getFullYear();
let month = today.getMonth();

// Get the element to display the year and month
let monthYear = document.getElementById("month-year");

// Set the year and month in the element
monthYear.innerHTML = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(today);

// Get the element to display the days
let days = document.getElementById("days");

// Set the days in the element
let daysInMonth = new Date(year, month + 1, 0).getDate();
let firstDayOfMonth = new Date(year, month, 1).getDay();

for (let i = 0; i < firstDayOfMonth; i++) {
  let emptyDiv = document.createElement("div");
  days.appendChild(emptyDiv);
}

for (let i = 1; i <= daysInMonth; i++) {
  let dayDiv = document.createElement("div");
  dayDiv.innerHTML = i;
  days.appendChild(dayDiv);
  
  if (i === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
    dayDiv.classList.add("today");
  }
  
  dayDiv.addEventListener("click", function() {
    // Add event functionality here
  });
}
9