// Create an array to use as your shopping list with 3 items: "Milk," "Bread," and
// "Apples."
// 2. Check your list length in the console.
// 3. Update "Bread" to "Bananas."
// 4. Output your entire list to the console.
// shopping_list = ["Milk", "Bread", "Apples"];
// console.log(shopping_list.length);
// shopping_list[1] = "Bananas";
// console.log(shopping_list);

const { totalmem } = require("os");

// Create an empty array to use as a shopping list.-
// 2. Add Milk, Bread, and Apples to your list.-
// 3. Update "Bread" with Bananas and Eggs.-
// 4. Remove the last item from the array and output it into the console.
// 5. Sort the list alphabetically.-
// 6. Find and output the index value of Milk.-
// 7. After Bananas, add Carrots and Lettuce.
// 8. Create a new list containing Juice and Pop.
// 9. Combine both lists, adding the new list twice to the end of the first list.
// 10. Get the last index value of Pop and output it to the console.

shopping_list1 = [];
shopping_list1.push("Milk", "Bread", "Apples");
shopping_list1.splice(1, 1, "Bananas", "Eggs");

console.log(shopping_list1);
//delete the last element and print
console.log(shopping_list1.pop());

//sorting
console.log(shopping_list1.sort());

//findIndex
console.log(shopping_list1.indexOf("Milk"));

//after bananas ad carrot and lettuce
shopping_list1.splice(1, 0, "carrot", "lettuce");
console.log(shopping_list1);

fruitJuice = ["Juice", "Pop"];

total = shopping_list1.concat(fruitJuice);
console.log(total);

console.log(total.indexOf("Pop"));
