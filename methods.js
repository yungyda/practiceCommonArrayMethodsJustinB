// Task 1: Create the Order System (2D Array)
const orders = [
    ["Latte", "Tea", "Espresso"], // Drinks
    ["Croissant", "Muffin", "Bagel"] // Pastries
];

// Task 2: Log the number of drinks and pastries
console.log(`Number of drinks: ${orders[0].length}`);
console.log(`Number of pastries: ${orders[1].length}`);

// Task 3: Access orders using bracket notation (hardcoded numbers)
console.log(`First drink: ${orders[0][0]}`);
console.log(`Last pastry: ${orders[1][orders[1].length - 1]}`);
console.log(`Second drink: ${orders[0][1]}`);

// Task 4: Access orders dynamically with variables
let drinkIndex = 2;
let pastryIndex = 0;
console.log(`Selected drink: ${orders[0][drinkIndex]}`);
console.log(`Selected pastry: ${orders[1][pastryIndex]}`);

// Task 5: Loop through and log all drinks dynamically
console.log("Drink Orders:");
for (let i = 0; i < orders[0].length; i++) {
    console.log(orders[0][i]);
}

// Task 6: Add a new drink order dynamically
orders[0].push("Flat White");
console.log(`Updated number of drinks: ${orders[0].length}`);
console.log(`New drink added: ${orders[0][orders[0].length - 1]}`);
