// Practice Tasks
// Try solving these problems to apply your knowledge:

// 1. Basic Date Operations
// Create a Date object for your birthday and log it in the format: DayName MonthName DD, YYYY.
// const date=new Date('1999-05-14')
// const day=date.getDay()
// const month=date.getMonth()
// const dt=date.getDate()
// const year=date.getFullYear()
// console.log(date.toDateString(day, month, dt, year))

// const date = new Date('1999-05-14');

// const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// const dayName = days[date.getDay()]; // "Friday"
// const monthName = months[date.getMonth()]; // "May"
// const day = date.getDate(); // 14
// const year = date.getFullYear(); // 1999

// console.log(`${dayName} ${monthName} ${day}, ${year}`); // "Friday May 14, 1999"

// Log today’s date in the format: YYYY-MM-DD HH:MM:SS.

const date = new Date()
console.log(date.toLocaleString())


// Calculate the number of days left until New Year’s Day (January 1st of next year).

// 2. Date Manipulation
// Write a function that adds 7 days to the current date and returns the new date.

// Create a Date object for December 31, 2024, and set its time to 23:59:59.

// Write code to check if today is a weekend (Saturday or Sunday).

// 3. Time Differences
// Calculate the difference in hours between two dates: 2025-03-15T10:00:00 and 2025-03-17T15:30:00.

// Write a function to calculate a person’s age in years, given their birthdate (e.g., 2000-05-30).

// 4. Advanced Challenges
// Build a real-time countdown timer for the next Olympics (July 14, 2028) that updates every second.

// Create a function to check if a given year is a leap year.

// Write code to find the next occurrence of Friday the 13th.