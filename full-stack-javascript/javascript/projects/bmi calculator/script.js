let height = Number(prompt("Enter your height in Inches"));
let weight = Number(prompt("Enter your weight in pounds"));
let height_m = (height * 2.54) / 100;
let weight_kg = weight * 2.2046;
let BMI = weight_kg / (height_m * height_m);
console.log(BMI);

if (BMI > 31) {
	console.log(`having a ${BMI} greater than 30 is obess`);
} else if (BMI >= 24) {
	console.log(`You got a good bmi of ${BMI}`);
} else {
	console.log(`Damn you're underweight you don't eat right? you've a BMI of ${BMI} which is below 24.5`);
}
