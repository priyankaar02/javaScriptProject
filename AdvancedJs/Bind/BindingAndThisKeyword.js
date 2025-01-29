const person = {
  name: "Priyanka",
  greet() {
    console.log(`Hi, I am ${this.name}`);
  },
};

person.greet(); //Hi, I am Priyanka

const greetFunction = person.greet;
//greetFunction(); //Hi, I am undefined

const boundGreet = person.greet.bind({ name: "John" });
boundGreet(); //Hi, I am John

//bind, call and apply

/*---------------------------------------------------EXERCISES------------------------------------------------ */

/*++++++++++++++++++++++++++Task 1: Bind the Correct Context++++++++++++++++++++++++++++

Create an object person with properties name and a method introduce(). Use the bind() method to ensure the method works correctly when passed to another function. */

// Define an object with a method
const personTwo = {
  name: "Alice",
  introduce: function () {
    return `Hi, my name is ${this.name}.`;
  },
};

// Create a bound function that always refers to 'person'
const boundIntroduce = personTwo.introduce.bind(personTwo);

// Example of calling it separately
console.log(boundIntroduce()); // "Hi, my name is Alice."

// Passing it as a callback (without bind, 'this' would be undefined or window)
setTimeout(boundIntroduce, 1000); // Still works correctly due to bind

/*++++++++++++++++++++++++++++++Task 2: Using call() to Invoke a Function with Different Contexts+++++++++++++++++++++++++++++++++++++++++++++++++++

Write a function introduce() that uses the this keyword to introduce a person by name. Then, invoke introduce() using call() to introduce different people with the same function. */

// Function using `this`
function introduce() {
  console.log(`Hi, my name is ${this.name}.`);
}

// Objects representing different people
const person1 = { name: "Alice" };
const person2 = { name: "Bob" };

// Using call() to invoke introduce() with different contexts
introduce.call(person1); // "Hi, my name is Alice."
introduce.call(person2); // "Hi, my name is Bob."

/*+++++++++++++++++++++++++++++++++++++Task 3: Using apply() to Pass Arguments with Context+++++++++++++++++++++++++++++++++++++++++++++++

Create a function sum() that accepts two numbers and uses this to access a multiplier value. Then, invoke sum() with different contexts using apply(), passing the numbers as an array. 

The .apply() method is similar to .call(), but instead of passing arguments one by one, you pass them as an array (or array-like object). This is useful when the number of arguments is dynamic or you want to pass an array of values.
*/

// Function that calculates the sum and uses this to access a multiplier
function sum(num1, num2) {
  return (num1 + num2) * this.multiplier;
}

// Objects with a multiplier property
const context1 = { multiplier: 2 }; // Multiplier is 2
const context2 = { multiplier: 3 }; // Multiplier is 3

// Using apply() to invoke the function with different contexts and arguments
const result1 = sum.apply(context1, [5, 3]); // (5 + 3) * 2 = 16
const result2 = sum.apply(context2, [4, 6]); // (4 + 6) * 3 = 30

console.log(result1); // 16
console.log(result2); // 30

//---------Solution with Spread Syntax-----------------------

// Function that calculates the sum with a multiplier
function sum(num1, num2) {
  return (num1 + num2) * this.multiplier;
}

// Contexts with multipliers
const context1 = { multiplier: 2 };
const context2 = { multiplier: 3 };

// Using call() with spread syntax
console.log(sum.call(context1, ...[5, 3])); // 16
console.log(sum.call(context2, ...[4, 6])); // 30

/*Spread Syntax (...[5, 3]) converts the array [5, 3] into individual arguments 5 and 3 when passed to sum().
sum.call(context, ...[5, 3]) invokes sum() with this set to context1 and passes the arguments 5 and 3. */
