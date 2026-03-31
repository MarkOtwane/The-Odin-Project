// const { log } = require("console");

// console.log("Hello Coder!");
// console.log("Current time:", new Date());

// // variable in javascript
// let name = "Mark Otwane";
// console.log(name);

// const age = 22;
// console.log(age);

// // strings
// const string = " The revolution will not be televised";
// console.log(string);

// const single = "Single quotes";
// const double = "Double quotes";
// const backtick = `Backtick`;

// console.log(single);
// console.log(double);
// console.log(backtick);
// // template literal
// console.log(`hello, ${name}`);

// // String concatination +
// const greetings = "good morning";
// const name2 = "Mark";
// console.log(greetings + "," + name2);

// // template literal
// console.log(`${greetings}, ${name2}`);

// // const button = document.querySelector("button");

// // function greet() {
// // 	const name3 = prompt("What's your name");
// // 	const greeting = document.querySelector("#greeting");
// // 	greeting.textContent = `Hello ${name3}, nice to see you!`;
// // }
// // button.addEventListener("click", greet);

// // Javascript String Methods
// let text = "abcdefghijklmnopqrstuvwxyz";
// let length = text.length;
// console.log(length);

// // charAt()- returns the character at a specified index(position) in a string
// let char = text.charAt(0);
// console.log(char);

// // charCodeAt() return the code of the character at a specified index using UTF-16 code
// let txt = text.charCodeAt(0);
// console.log(txt);

// // The method takes 2 parameters: start position, and end position (end not included).
// let fruits = "Apple, Banana, kiwi"; //17 characters but remove from 7 to 12
// let part = fruits.slice(7, 13);
// console.log(part); //Banana

// let fruit = "Apple, Banana, kiwi"; //17 characters but remove from 7
// let parts = fruit.slice(7);
// console.log(parts); // Banana, kiwi
// let fruitie = "Apple, Banana, kiwi"; //17 characters but remove from 7
// let partis = fruitie.slice(-12);
// console.log(partis); // Banana, kiwi

// // trim() method removes whitespace from both sides of a string:
// let text1 = "      Hello World!      ";
// let text2 = text1.trim();
// console.log(text2);

// // trimStart() method works like trim(), but removes whitespace only from the start of a string.
// // The trimEnd() method works like trim(), but removes whitespace only from the end of a string.
// //The repeat() method returns a string with a number of copies of a string.
// let text4 = "Hello world!";
// let result = text4.repeat(2);
// console.log(result);

// //The replace() method replaces a specified value with another value in a string:
// let text12 = "Please visit Microsoft!";
// let newText = text12.replace("Microsoft", "W3Schools");
// console.log(newText);

// //The replaceAll() method allows you to specify a regular expression instead of a string to be replaced
// text = text.replaceAll(/Cats/g, "Dogs");
// text = text.replaceAll(/cats/g, "dogs");

// //converting a string to an array
// // split()
// let cdn = text.split(",");
// text.split(" ");
// text.split("|");
// console.log(cdn);

// // Conditional statements
// // if (condition) {
// //     // code runs here if the condition is true
// // } else {
// //     //runs if the statement false
// // }

// let shoppingDone = false;
// let childAllowance;

// if (shoppingDone === true) {
//     childAllowance = 10;

// } else {
//     childAllowance = 5;
// }

// // switch ():
// //     case:
// // break

// // ternary operator
// // condition ? run this code : run this code instead
const select = document.querySelector("select");
const html = document.querySelector("html");
document.body.style.padding = "10px";

function update(bgColor, textColor) {
	html.style.backgroundColor = bgColor;
	html.style.color = textColor;
}
select.addEventListener("change", () => (select.value === "black" ? update("black", "white") : update("white", "black")));
