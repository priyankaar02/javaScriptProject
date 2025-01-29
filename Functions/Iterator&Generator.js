/*---------------------------------------------------------Creating a Simple Generator--------------------------------------------- */
/*In JavaScript, generator functions are defined using the function* syntax and allow you to yield values one by one when the generator is iterated over.*/

/*Task 1: Creating a Simple Generator

Create a generator function numberGenerator() that yields numbers from 1 to 3. */

// Generator function that yields numbers from 1 to 3
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

// Using the generator
const generator = numberGenerator();

// Iterating through the generator values using .next()
console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
console.log(generator.next().value); // 3
console.log(generator.next().value); // undefined (end of generator)

/*Code Explanation
    function* numberGenerator(): This is a generator function. The * indicates it's a generator function, and yield is used inside it to return values one at a time.
    
    yield 1, yield 2, yield 3: These are the values that the generator will yield when called. When the generator function is invoked, the value of 1 will be yielded first, then 2, and finally 3.

    const generator = numberGenerator(): This calls the generator function and returns a generator object.

    .next(): The .next() method is used to get the next value from the generator. Each time .next() is called, it returns an object with two properties:
        value: The value yielded by the generator.
        done: A boolean indicating whether the generator has finished yielding values.
    
    console.log(generator.next().value): This prints the yielded values one by one. After the generator has finished, calling .next() again will return { value: undefined, done: true }. */

/*-----------------------------------------------------------------Creating a Custom Iterator---------------------------------------------------------------------------------------
To create a custom iterator in JavaScript, you need to define an object with a .next() method that controls the iteration behavior. 
Custom iterators are useful when you need custom iteration logic, like creating ranges, traversing complex data structures, or even implementing your own data processing pipelines.

In this case, we’ll create a custom iterator called rangeIterator(start, end) that will iterate over a range of numbers, from start to end. */

/*++++++++++++++++++++++Task 2: Create a Custom Iterator++++++++++++++++++++++++++++++++++++++++++++++++++++

Create a custom iterator called rangeIterator(start, end) that returns an object that iterates over numbers from start to end.

Each call to .next() should return the next number in the range until it reaches end. */

// Custom iterator function to iterate over a range of numbers
function rangeIterator(start, end) {
  let current = start; // Initialize the current number to start

  // Return an object with a `next` method
  return {
    next() {
      if (current <= end) {
        return { value: current++, done: false }; // Return current number and increment it
      } else {
        return { value: undefined, done: true }; // Return done when the end is reached
      }
    },
  };
}

// Example usage
const iterator = rangeIterator(1, 5); // Create an iterator to go from 1 to 5

console.log(iterator.next().value); // 1
console.log(iterator.next().value); // 2
console.log(iterator.next().value); // 3
console.log(iterator.next().value); // 4
console.log(iterator.next().value); // 5
console.log(iterator.next().value); // undefined (iteration done)

/*Code Explanation
    rangeIterator(start, end): This is a custom iterator function that accepts start and end values.
        It defines a variable current that keeps track of the current value being iterated.
    next(): This method controls the iteration. Each time .next() is called:
        If current is less than or equal to end, it returns an object with value: current and done: false, and increments current.
        If current exceeds end, it returns an object with value: undefined and done: true, signaling that the iteration is complete.
    Using the iterator: You call .next() on the iterator object, and each time it returns the next value in the range until it reaches the end.
 */

/*-----------------------------------------------------Generator Function for Fibonacci Sequence---------------------------------------------------------------------------
A generator function for the Fibonacci sequence allows us to yield each Fibonacci number on demand, one at a time, without computing the entire sequence upfront. This is efficient because Fibonacci numbers can grow very large quickly.

We can create a generator function fibonacciGenerator() that indefinitely yields Fibonacci numbers. */

/*+++++++++++++++++++++++Task 3: Generator Function for Fibonacci Sequence++++++++++++++++++++++++++++++++++++++++++++++++

Create a generator function fibonacciGenerator() that yields numbers from the Fibonacci sequence indefinitely (1, 1, 2, 3, 5, 8, etc.).

Use the next() method to get the next Fibonacci number. */

// Fibonacci generator function
function* fibonacciGenerator() {
  let a = 1,
    b = 1;

  // Yield the first Fibonacci number (1)
  yield a;
  // Yield the second Fibonacci number (1)
  yield b;

  while (true) {
    // Indefinite loop to continue generating Fibonacci numbers
    let next = a + b; // Calculate the next Fibonacci number
    yield next; // Yield the next number in the sequence
    a = b; // Update `a` to the previous `b`
    b = next; // Update `b` to the new Fibonacci number
  }
}

// Example usage
const fibGen = fibonacciGenerator();

console.log(fibGen.next().value); // 1
console.log(fibGen.next().value); // 1
console.log(fibGen.next().value); // 2
console.log(fibGen.next().value); // 3
console.log(fibGen.next().value); // 5
console.log(fibGen.next().value); // 8

/*Code Explanation
    function* fibonacciGenerator(): This is a generator function, marked by the *. Inside, we use yield to produce Fibonacci numbers.
    
    let a = 1, b = 1;: These are the first two Fibonacci numbers. We initialize them as a and b to start the sequence (1, 1).
    
    yield a; yield b;: We yield the first two numbers, 1 and 1, separately.
    
    while (true): This creates an infinite loop. Since Fibonacci numbers are infinite, we use an indefinite loop to keep generating numbers.
    
    let next = a + b; yield next;: The next Fibonacci number is the sum of the last two numbers (a and b). We calculate it and yield it.
    
    a = b; b = next;: After yielding a Fibonacci number, we update a and b to continue the sequence: a becomes the old b, and b becomes the new number (next). */
