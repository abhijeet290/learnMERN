// Create an object called student with the following properties:
const student = {
  name: "Student",
  age: 20,
  grade: "A2",
  subjects: ["Math", "Science", "History"],
  introduce: function () {
    console.log(
      `Hello my name is ${student.name} and I am in Grade ${student.grade} and studying ${student.subjects}`
    );
  },
};
console.log(student.name, student.age, student.grade, student.subjects);
console.log(
  student["name"],
  student["grade"],
  student["age"],
  student["subjects"]
);

// 2. Modifying Objects
// Using the student object from the previous exercise:

// Update the grade property to a new value.
student.grade = "A1";
// Add a new property called school (string).
student.school = "Ishan";
// Delete the age property.
delete student.age;
// Log the updated object to the console.
console.log(student);

student.introduce();

// 4. Object.keys(), Object.values(), and Object.entries()
// Given the following object:

const car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  color: "Blue"
};
// Use Object.keys() to log all the keys of the car object.
const keys=Object.keys(car)
console.log(keys)
// Use Object.values() to log all the values of the car object.
const value=Object.values(car)
console.log(value)
// Use Object.entries() to log all the key-value pairs of the car object.
const entries=Object.entries(car)
console.log(entries)

// creating copy using Object.assign or spread operator
const a={a:10,b:20}
const b={c:30,d:40}
const c=Object.assign({},a,b)
console.log(c)
const d={...a,...b}
console.log(d)

const company = {
  name: "Tech Corp",
  employees: [
    { name: "Alice", role: "Developer", salary: 80000 },
    { name: "Bob", role: "Designer", salary: 75000 },
    { name: "Charlie", role: "Manager", salary: 90000 }
  ]
};

// Log the name of the second employee (Bob) to the console.
console.log(company.employees[1].name);
// Update the salary of the third employee (Charlie) to 95000.
company.employees[2].salary=95000
// Add a new employee to the employees array.
company.employees.push({ name: "Diana", role: "QA Engineer", salary: 70000 })
// Log the updated company object to the console.
console.log(company)

const inventory = {
  apples: 50,
  bananas: 30,
  oranges: 40,
  grapes: 25
};

// Write a function called checkStock that takes an object like inventory and logs the following for each item:
function checkStock(inventory) {
  for (const item in inventory) {
    const stockLevel = inventory[item];
    const stockStatus = stockLevel > 30 ? "in stock" : "running low";
    console.log(`${item}: ${stockLevel} (${stockStatus})`);
  }
}



checkStock(inventory);