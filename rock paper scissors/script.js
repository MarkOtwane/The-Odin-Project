function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function playRound() {
	function getRandomIntInclusive(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	let humanScore = 0;
	let computerScore = 0;

	let computerChoice = getRandomIntInclusive(0, 2);

	if (computerChoice === 0) {
		computerChoice = "Rock";
	} else if (computerChoice === 1) {
		computerChoice = "Paper";
	} else {
		computerChoice = "Scissors";
	}
	console.log(computerChoice);

	let humanChoice = prompt("Enter between rock, scissors and paper");
	if (humanChoice === "") {
		alert("Enter something");
	} else if (humanChoice !== "Rock" && humanChoice !== "Paper" && humanChoice !== "Scissors") {
		alert("Stick to the game");
	} else if (humanChoice === "Rock" && computerChoice === "Scissors") {
		humanScore += 1;
	} else if (humanChoice === "Scissors" && computerChoice === "Paper") {
		humanScore += 1;
	} else if (humanChoice === "Paper" && computerChoice === "Rock") {
		humanScore += 1;
	} else if (humanChoice === "Scissors" && computerChoice === "Rock") {
		computerScore += 1;
	} else if (computerChoice === "Scissors" && humanChoice === "Paper") {
		computerScore += 1;
	} else if (computerChoice === "Paper" && humanChoice === "Rock") {
		computerScore += 1;
	} else {
		console.log("its a tie" + computerChoice + humanChoice);
	}
}

function playGame() {
	let i;
	for (i = 1; i <= 5; i++) {
		playRound();
	}
}
console.log(playGame());
