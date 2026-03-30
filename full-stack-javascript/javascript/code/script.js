console.log("Hello Coder!");
console.log("Current time:", new Date());

// variable in javascript
let name = "Mark Otwane";
console.log(name);

const age = 22;
console.log(age);

// strings
const string = " The revolution will not be televised";
console.log(string);

const single = "Single quotes";
const double = "Double quotes";
const backtick = `Backtick`;

console.log(single);
console.log(double);
console.log(backtick);
// template literal
console.log(`hello, ${name}`);

// String concatination +
const greetings = "good morning";
const name2 = "Mark";
console.log(greetings + "," + name2);

// template literal
console.log(`${greetings}, ${name2}`);

const button = document.querySelector("button");

function greet() {
	const name3 = prompt("What's your name");
	const greeting = document.querySelector("#greeting");
	greeting.textContent = `Hello ${name3}, nice to see you!`;
}
button.addEventListener("click", greet);
