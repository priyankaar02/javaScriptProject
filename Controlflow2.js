/*----------- FOR-OF LOOP-----------*/
console.log("-------------For-of loop-----------------");
//This is an array specific loop

//Iterating through Arrays
const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num);
    
}

//Iteration through string
const str = "Hello world"
for (const num of str) {
    console.log(`Each character is ${num}`);
    
}

//MAP
const map = new Map()
map.set('IN', "INDIA")
map.set('USA', "UNITED STATES OF AMERICA")
map.set('FR', "FRANCE")

console.log(map);

//Method 1
for (const key of map) {
    console.log(key);
}

//Method 2
for (const [key, value] of map) {
    console.log(key, `=>`, value);
}

//Iterating through Objects
const myObject = {
    'country1' : 'Germany',
    'country2' : 'India'
}

for (const [key, value] of myObject) {
    console.log(key, `=>`, value);
}
//Output=> TypeError: myObject is not iterable
