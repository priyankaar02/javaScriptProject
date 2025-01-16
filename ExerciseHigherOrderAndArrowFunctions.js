/*Task 1: Using Array Methods

Write a function squareNumbers(arr) using map() and arrow functions*/

const squareNumbers = (arr) => {
    return arr.map(num => num ** 2);
}
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = squareNumbers(numbers);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

/*NOTE
Explanation:
map() Method: Creates a new array by applying a function to each element of the original array. Does not modify the original array.
Arrow Function: The arrow function num => num ** 2 computes the square of each element in the array.
Return Value: The function returns a new array containing the squared values of the input numbers.
Key Characteristics: It doesn’t modify the original array. The combination of map() and arrow functions makes it compact and easy to understand.*/

/*Task 2: Custom Filter Function

Create a function filterEvenNumbers(arr) using filter() and arrow functions*/

const filterEvenNumbers = (arr) => {
    return arr.filter((item) => item % 2 === 0)
}
const myNumbers = [2, 1, 6, 8, 20, 11, 34]
const evenNumbers = filterEvenNumbers(myNumbers);
console.log(evenNumbers);

/* Task 3: Sum of Positive Numbers

Write a function sumPositiveNumbers(arr) that takes an array of numbers and returns the sum of all positive numbers using filter() and reduce() with arrow functions */

const sumPositiveNumbers = (arr) => {
    return arr
        .filter(num => num > 0) // Filter only positive numbers
        .reduce((sum, num) => sum + num, 0); // Sum up the filtered numbers
}
const numbers = [-1, 2, -3, 4, 5];
const sum = sumPositiveNumbers(numbers);
console.log(sum); // Output: 11

/* NOTE
Explanation:
filter(): Filters the array to include only positive numbers (num > 0). Creates a new array containing only the values that satisfy the condition.
reduce(): Combines the filtered numbers into a single value (the sum in this case).
Arrow function (sum, num) => sum + num takes the accumulated sum (sum) and adds the current number (num).
The second argument (0) is the initial value of sum. */

/*Task 4: Transform Array of Objects

Write a function getNames(arr) that takes an array of objects where each object has a name property, and returns an array of just the names using map() and arrow functions */

const getNames = (arr) => {
    return arr.map(obj => obj.name);
}
const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];
const names = getNames(people);
console.log(names);

/* Task 5: Find the Longest Word

Write a function findLongestWord(arr) that takes an array of strings and returns the longest word using reduce() and an arrow function */

const findLongestWord = (arr) => {
    return arr.reduce((longest, currentWord) => 
        currentWord.length > longest.length ? currentWord : longest, "");
}
const words = ["apple", "banana", "strawberry", "kiwi", "grape"];
const longestWord = findLongestWord(words);
console.log(longestWord); // Output: "strawberry"

/*NOTE
Explanation:
reduce(): iterates through the array and compares each word's length with the length of the current longest word.
The arrow function (longest, currentWord) => currentWord.length > longest.length ? currentWord : longest:
  1. longest: Keeps track of the longest word found so far.
  2. currentWord: The word currently being checked.
  3. The function returns the currentWord if it’s longer than longest, otherwise, it keeps the longest.
Initial Value (""): The second argument of reduce() is an empty string "", which serves as the initial value of the longest word. This ensures that the first word in the array is considered during the first iteration.
Return Value: The function returns the longest word in the array. */
