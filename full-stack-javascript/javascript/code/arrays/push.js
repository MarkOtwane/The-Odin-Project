// Adding elements in an array
favoriteFruit = ["grapes", "orange", "lemon"];
favoriteFruit.push("tangerine");
console.log(favoriteFruit);

// Adding element in a certain index splice()
let arrOfShapes = ["circle", "trinage", "rectangle"];
arrOfShapes.splice(2, 0, "squire", "trapezoid");
console.log(arrOfShapes);
// slice (2, 0) tells js to start inserting elements from index 2, then delete 0 elements

// Adding array to another array
let num2 = [1, 2, 3];
let num34 = [4, 5, 6, 7];
let arr7 = num2.concat(num34);
console.log(arr7);

// deleting elements from array pop()
arr7.pop();
console.log(arr7); // 7 is removed/deleted last element
//delete the first element shift()
arr7.shift();
console.log(arr7);

// pop(1, 3) start deleting from index 1 and delete 3 elements

//Finding elements in an array find()
arr8 = [2, 3, 4, 5, 6, 7, 8, 9, 1];
let findValu = arr8.find(function (e) {
	return e === 6;
});
let findValue2 = arr8.find((e) => e === 10);

console.log(findValu, findValue2);

// sorting arrays
let names = ["James", "King", "Faith", "peace"];
names.sort();
console.log(names);

// reverse elements
names.reverse();
console.log(names);

let findIndex = arr8.indexOf(6);
let findIndex2 = arr8.indexOf(10);
console.log(findIndex, findIndex2);
