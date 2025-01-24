/****************ARRAY ******************************/

//Defining Arrays
const myArr = [0, 1, 2, 3, 4, 5]; //method 1
const myCountries = ["Germany", "India", "Switzerland", "USA"]; // method 2
const mixedArr = [0, 1, 2, 3, true, "Munich"]; // method 3
const myArr2 = new Array(1, 2, 3, 4); //method 4
console.log(myArr2[1]); //accessing elements of array

//Reference links: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

//Array Methods
console.log("PUSH Operation:", myArr.push(9));
console.log("Array:", myArr);
console.log("POP Operation:", myArr.pop());

console.log("Array before unshift:", myArr);
console.log("UNSHIFT Operation:", myArr.unshift(9));
console.log("Array after unshift:", myArr);
console.log("UNSHIFT Operation:", myArr.shift());
console.log("Array after shift:", myArr);

console.log("INCLUDES:", myArr.includes(9)); //false
console.log("INDEXOF:", myArr.indexOf(9)); // -1

const newArr = myArr.join(); // join operation converts array to String
console.log("JOIN operation:", newArr); //0, 1, 2, 3, 4, 5
console.log(typeof newArr);

//Slice and Splice methods:
console.log("Original Array:", myArr);
console.log(
  "SLICE Operation => slice(1,3):",
  myArr.slice(1, 3)
); /* Slice method does not include the last range (eg: 1 to 2 and 3 is not included) 
                                                     and also does not alter original array */
console.log("Original Array after slice:", myArr);

console.log("Original Array:", myArr);
console.log(
  "SPLICE Operation => splice(1,3):",
  myArr.splice(1, 3)
); /* Splice method includes the last range (eg: includes 1, 2 and 3) and 
                                                           also alter original array by removing the range elements */
console.log("Original Array after Splice:", myArr);

//MERGING TWO ARRAYS

const myFruits = ["orange", "apple", "blueberry", "stawberry"];
const myVeggies = ["tomato", "carrot", "beans", "brocolli"];

//Method 1 =>
//myFruits.push(myVeggies) /* this push operation inserts an array inside an array which is not recommended */
console.log("PUSH operation:", myFruits); //This pushes the array inside the existing array
//console.log("Accessing array elements:", myFruits[4][1]) // to access the elements of the array inside the array

//Method 2 =>
//const newArr1 = myFruits.concat(myVeggies) /* array method which is also not so recommended */
//console.log("CONCAT operation:", newArr1) //This returns a new array

//Method 3 =>
const newArr2 = [...myFruits, ...myVeggies]; //highly recommended method
console.log("SPREAD operation:", newArr2);

//Method 4 =>
const newArr3 = [1, 2, 3, [4, 5], 6, [7, 8, [3, 4, 5, [2, 3]]]]; //when you have a nested array
const newArr4 = newArr3.flat(Infinity); //concatenate as a single array upto infinity level
console.log("New concatenated array using flat operation:", newArr4);

// isArray and from Methods => Useful during data scraping => can be used for strings and objects
console.log(
  "check if the data obtained is an array using ISARRAY function: ",
  Array.isArray("Priyanka")
);

//FROM Method--- IMPORTANT
console.log(
  "convert the data obtained into an array using FROM operation: ",
  Array.from("Priyanka")
);

console.log(
  "From operation for an object",
  Array.from({ name: "Priyanka" })
); /*Here you need to specify whether you need an array from all keys or values */

// OF Method => Returns a new array from a set of elements
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(
  "Add all values into an Array using OF operation:",
  Array.of(score1, score2, score3)
);
