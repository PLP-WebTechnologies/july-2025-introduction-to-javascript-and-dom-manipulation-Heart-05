// ================= Part 1: Variables and Conditionals =================
let age = 20;
let name = "Brenda";

if (age >= 18) {
    console.log(`${name} is an adult.`);
} else {
    console.log(`${name} is not an adult.`);
}

// DOM interaction example for Part 1
document.getElementById("demo1").textContent = `${name} is ${age} years old.`;

// ================= Part 2: Custom Functions =================
function greetUser(userName) {
    return `Hello, ${userName}! Welcome to the site.`;
}

function calculateSquare(number) {
    return number * number;
}

// DOM interaction example for Part 2
document.getElementById("demo2").textContent = greetUser(name);

// ================= Part 3: Loops =================
// Loop example 1: for loop
for (let i = 1; i <= 5; i++) {
    console.log(`Number ${i}`);
}

// Loop example 2: while loop
let count = 1;
while (count <= 3) {
    console.log(`Count is ${count}`);
    count++;
}

// DOM interaction example for Part 3
let loopOutput = "";
for (let i = 1; i <= 3; i++) {
    loopOutput += `Loop ${i} | `;
}
document.getElementById("demo3").textContent = loopOutput;

// ================= Part 4: DOM Interactions =================
let button = document.getElementById("clickBtn");
button.addEventListener("click", () => {
    alert("Button was clicked!");
});

// Additional DOM interactions
document.body.style.backgroundColor = "#f0f0f0"; // Change background
document.title = "JavaScript Assignment Completed"; // Change title
