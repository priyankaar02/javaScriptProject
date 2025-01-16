/*
Arrays and Methods
Utilise the inbuilt methods of arrays in Javascript to solve the below tasks:*/

/*Task 1: Array Filtering

Write a function filterNumbers(arr) that returns only numbers from a mixed array*/

function filterNumbers(arr) {
    return arr.filter(item => typeof item === 'number');
}

const mixedArray = [1, 'hello', 3, true, 42, 'world', null];
const numbersArray = filterNumbers(mixedArray);
console.log(numbersArray);

/* NOTE
Explanation:
arr.filter: This method creates a new array with all elements that pass the test implemented by the provided function.
typeof item === 'number': Checks if the current item is of type number.
The function returns a filtered array containing only the numeric elements.*/


/*Task 2: Array Reversal

Write a function reverseArray(arr) that reverses the array*/

function reverseArray(arr) {
    return arr.reverse();
}

// Example usage:
const originalArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(originalArray);
console.log(reversedArray); // Output: [5, 4, 3, 2, 1]

/*
NOTE
Explanation:
arr.reverse(): This is a built-in JavaScript method that reverses the order of the elements in an array in place.
The function simply returns the reversed array.
Note:
reverse() modifies the original array. If you want to keep the original array intact, you can create a copy of it before reversing:*/

function reverseArray(arr) {
    return [...arr].reverse(); // Spread operator to create a copy
}

// Example usage:
const originalArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(originalArray);
console.log(reversedArray); // Output: [5, 4, 3, 2, 1]
console.log(originalArray); // Output: [1, 2, 3, 4, 5]


/*Task 3: Find Maximum in an Array

Write a function findMax(arr) that returns the largest number in the array*/

function findMaximum(arr) {
    if (arr.length === 0) {
        throw new Error("Array is empty");
    }
    return Math.max(...arr);
}
const numbers = [3, 7, 1, 9, 4];
const maxNumber = findMaximum(numbers);
console.log(maxNumber);

/* NOTE
Explanation:
Math.max(...arr): The spread operator (...) spreads the array elements as individual arguments for the Math.max() function, which finds the largest value.
Error handling: If the array is empty, it throws an error to handle invalid input.*/

/*Task 4: Remove Duplicates from an Array

Write a function removeDuplicates(arr) that returns a new array with all duplicates removed*/

function removeDuplicates(arr) {
    return [...new Set(arr)];
}
const arrayWithDuplicates = [1, 2, 3, 4, 2, 5, 3, 6];
const uniqueArray = removeDuplicates(arrayWithDuplicates);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5, 6]

/*Task 5: Flatten a Nested Array

Write a function flattenArray(arr) that takes a nested array and returns a single flattened array
*/

function flattenArray(arr, depth = 1) {
    return arr.flat(depth);
}
const nestedArray = [1, [2, 3], [4, [5, 6]]];
const flatArray = flattenArray(nestedArray, Infinity);
console.log(flatArray);

/*NOTE The Array.prototype.flat() method flattens nested arrays up to the specified depth. 
depth: Specifies how deep the flattening should go. Use Infinity to completely flatten any deeply nested array.*/
