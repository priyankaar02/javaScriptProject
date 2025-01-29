/*---------------------Closures in JavaScript-----------------------------------------------------------*/
/*Task 1: Creating a Counter Using Closures

Create a function createCounter() that returns a function which increments and returns a counter value each time it is called.*/

function createCounter() {
  let counter = 0;

  return function () {
    counter++;
    return counter;
  };
}

const counter1 = createCounter();
console.log(counter1()); //  1
console.log(counter1()); //  2
console.log(counter1()); //  3

const counter2 = createCounter(); // New independent counter
console.log(counter2()); // 1
console.log(counter2()); // 2

/*Task 2: Rate Limiter Function

Create a function rateLimiter(fn, limit) that returns a new function. The returned function allows calling fn only once within a limit time in milliseconds. If it is called again before the limit is reached, it should return "Rate limit exceeded".*/

function rateLimiter(fn, limit) {
  let lastCalled = 0; // Store last execution timestamp

  return function (...args) {
    const now = Date.now(); // Get current timestamp

    if (now - lastCalled < limit) {
      return "Rate limit exceeded"; // Reject call if within limit time
    }

    lastCalled = now; // Update last call time
    return fn(...args); // Execute function
  };
}

// Example Function
function fetchData() {
  return "Fetching data...";
}

// Create a rate-limited function with a 2-second limit
const limitedFetch = rateLimiter(fetchData, 2000);

setTimeout(() => {
  console.log(limitedFetch()); // ✅ "Fetching data..." (after 2 sec)
}, 2500);

/*Task 3: Memoization Function

Memoization is an optimization technique that stores the results of expensive function calls and returns the cached result when the same inputs occur again. This helps avoid redundant computations, improving performance.

Write a function memoize(fn) that returns a memoized version of fn. The memoized function should cache the results of function calls, and return the cached result if the same inputs are provided again.*/

function memoize(fn) {
  const cache = new Map(); // Store results of function calls

  return function (...args) {
    const key = JSON.stringify(args); // Convert arguments into a unique key

    if (cache.has(key)) {
      console.log("Fetching from cache:", key);
      return cache.get(key); // Return cached result
    }

    console.log("Computing result for:", key);
    const result = fn(...args); // Compute result
    cache.set(key, result); // Store result in cache
    return result;
  };
}

// Example Function: Expensive Computation
function slowFunction(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

const fastFunction = memoize(slowFunction);

console.log(fastFunction(100000)); // Computes and stores result
console.log(fastFunction(100000)); // Fetches from cache (instant)
console.log(fastFunction(50000)); // Computes and stores result
console.log(fastFunction(50000)); // Fetches from cache
