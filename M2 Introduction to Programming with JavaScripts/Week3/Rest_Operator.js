// Define a function that takes any number of arguments
function sum(...numbers) {
    let total = 0;
    // Loop through each argument and add it to the total
    for (let number of numbers) {
        total += number;
    }
    return total;
}

// Call the function with different numbers of arguments
console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(4, 5)); // Output: 9
console.log(sum(6)); // Output: 6
console.log(sum()); // Output: 0
