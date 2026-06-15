let computer_choice = Math.floor(Math.random() * 4);
let human_choice = prompt("Choose between rock, scissor and paper");
let rock = 1;
let scissor = 2;
let paper = 3;
// for loop it should run 3 times
if (computer_choice === 1 && human_choice === "rock") {
	console.log("You tired, rock");
} else if (computer_choice === 2 && human_choice === "scissor") {
	console.log("You tired");
} else if (computer_choice === 3 && human_choice === "paper") {
	console.log("You tired, paper");
} else if (computer_choice === 1 && human_choice === "scissor") {
	console.log("computer has won, rock is greater than scissor");
} else if (computer_choice === 1 && human_choice === "paper") {
	console.log("You've won, paper is greater than rock");
} else if (computer_choice === 3 && human_choice === "rock") {
	console.log("computer has won paper is greater than rock");
} else if (computer_choice === 2 && human_choice === "paper") {
	console.log("The computer has won scissors is greater than paper");
} else {
	console.log("Enter the correct choices");
}
