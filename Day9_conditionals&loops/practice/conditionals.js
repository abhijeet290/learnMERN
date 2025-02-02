// ✅ 1. Practice Questions
// Try solving these in your code editor:

// 🔹 If-Else & Switch Case
// Check Even or Odd: Write a function to check whether a number is even or odd.
function isEvenOrOdd(number) {
  if (number % 2 == 0) {
    console.log(`${number} is even`);
  } else {
    console.log(`${number} is odd`);
  }
}
isEvenOrOdd(23);
isEvenOrOdd(24);

// Grade Calculator: Take a student's score and return their grade based on the following:
// 90+ → A
// 80-89 → B
// 70-79 → C
// 60-69 → D
// Below 60 → F
// let grade = 67;

// if (grade >= 90 && grade <= 100) {
//   console.log("A");
// } else if (grade >= 80 && grade <= 89) {
//   console.log("B");
// } else if (grade >= 70 && grade <= 79) {
//   console.log("C");
// } else if (grade >= 60 && grade <= 69) {
//   console.log("D");
// } else if (grade < 60) {
//   console.log("F");
// } else {
//   console.log("Invalid grade");
// }

// with function

function calculateGrade(grade) {
  if (grade >= 90 && grade <= 100) {
    return "A";
  } else if (grade >= 80 && grade <= 89) {
    return "B";
  } else if (grade >= 70 && grade <= 79) {
    return "C";
  } else if (grade >= 60 && grade <= 69) {
    return "D";
  } else if (grade < 60) {
    return "F";
  } else {
    return "Invalid grade";
  }
}

let grade = 67;
console.log(calculateGrade(grade));

// Leap Year Checker: Write a function that checks if a year is a leap year.
function isLeapYear(year) {
  // Check if the year is divisible by 4
  if (year % 4 === 0) {
    // If divisible by 100, it must also be divisible by 400
    if (year % 100 === 0) {
      return year % 400 === 0;
    }
    return true; // Divisible by 4 but not by 100
  }
  return false; // Not divisible by 4
}
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
// Positive, Negative, or Zero: Given a number, determine whether it's positive, negative, or zero.
function numCheck(num) {
  if (num > 0) {
    return `${num} is positive`;
  } else if (num < 0) {
    return `${num} is negative`;
  } else {
    return `${num} is zero`;
  }
}
console.log(numCheck(23));
console.log(numCheck(-2));
console.log(numCheck(0));
// Days of the Week: Use a switch-case to return the name of a day when given a number (1 for Monday, 2 for Tuesday, etc.).
function dayCheck(num) {
  switch (num) {
    case 0:
      return `Sunday`;
    case 1:
      return `Monday`;
    case 2:
      return `Tuesday`;
    case 3:
      return `Wednesday`;
    case 4:
      return `Thursday`;
    case 5:
      return `Friday`;
    case 6:
      return `Saturday`;
    default:
      return `Invalid day`;
  }
}
console.log(dayCheck(0));
console.log(dayCheck(3));
console.log(dayCheck(6));
console.log(dayCheck(7));
function dayCheck(num) {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return days[num] || "Invalid day";
}

console.log(dayCheck(0)); // Output: "Sunday"
console.log(dayCheck(3)); // Output: "Wednesday"
console.log(dayCheck(6)); // Output: "Saturday"
console.log(dayCheck(7)); // Output: "Invalid day"
// Simple Calculator: Write a calculator using switch-case that performs +, -, *, / operations.
function calculator(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2; // Addition
    case "-":
      return num1 - num2; // Subtraction
    case "*":
      return num1 * num2; // Multiplication
    case "/":
      if (num2 === 0) {
        return "Error: Division by zero is not allowed."; // Handle division by zero
      }
      return num1 / num2; // Division
    default:
      return "Error: Invalid operator."; // Handle invalid operators
  }
}

// Test cases
console.log(calculator(10, 5, "+")); // Output: 15
console.log(calculator(10, 5, "-")); // Output: 5
console.log(calculator(10, 5, "*")); // Output: 50
console.log(calculator(10, 5, "/")); // Output: 2
console.log(calculator(10, 0, "/")); // Output: "Error: Division by zero is not allowed."
console.log(calculator(10, 5, "%")); // Output: