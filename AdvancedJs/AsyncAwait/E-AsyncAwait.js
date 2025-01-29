/*------------Using Async-Await with Promise.all----------------------------

To fetch data simultaneously and handle multiple promises concurrently, we can use Promise.all() in combination with async/await. 
This allows us to wait for all promises to resolve at once. */

/*++++++++++++++++++++++Task 1: Async-Await with Promise.all+++++++++++++++++++++++++++++++++++++++++++++++

Create two functions fetchUser() and fetchPosts(), both returning promises that resolve in 1 second.

Use async-await and Promise.all to fetch both simultaneously and log the results as part of fetchAllData() */

// Simulate fetching user data (resolves after 1 second)
function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "Alice", age: 25 });
    }, 1000);
  });
}

// Simulate fetching posts data (resolves after 1 second)
function fetchPosts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{ title: "Post 1" }, { title: "Post 2" }]);
    }, 1000);
  });
}

//fetchUser() and fetchPosts() each return a promise that resolves after 1 second, simulating API calls.

// Async function to fetch all data using Promise.all
async function fetchAllData() {
  try {
    // Wait for both fetchUser() and fetchPosts() to resolve simultaneously
    const [user, posts] = await Promise.all([fetchUser(), fetchPosts()]);

    // Log the results
    console.log("User:", user);
    console.log("Posts:", posts);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

/*fetchAllData() is an async function that =>
Uses await to wait for both fetchUser() and fetchPosts() to resolve at the same time.
Promise.all() ensures both promises are executed concurrently and the results are returned as an array [user, posts].
*/

// Call the fetchAllData function to see the results
fetchAllData();

/*--------------------------------Error Handling in Async/Await with Promise.all()-----------------------------------------------------

When using Promise.all(), if one promise rejects, all promises are rejected, even if the other promises succeed. You need to handle the errors gracefully.

We can use try-catch within an async function to catch the error from Promise.all(). Additionally, we can handle individual promise failures separately by using Promise.allSettled() (for handling both fulfilled and rejected promises). */

/*+++++++++++++++++++++++++++++++++++++++++Task 2: Error Handling in Async/Await with Promise.all++++++++++++++++++++++++++++++++++++++++++++++++++++

Write two functions fetchSuccess() and fetchFailure(), where fetchSuccess() returns a promise that resolves successfully after 1 second, and fetchFailure() returns a promise that rejects with an error after 1 second.

Create a function handlePromises() that calls both functions using Promise.all and handles success and failure cases. */

// Simulate a successful fetch (resolves after 1 second)
function fetchSuccess() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 1000);
  });
}

// Simulate a failed fetch (rejects with an error after 1 second)
function fetchFailure() {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Failed to fetch data."));
    }, 1000);
  });
}

// Async function to handle promises using Promise.all with error handling
async function handlePromises() {
  try {
    // Use Promise.all to handle both promises concurrently
    const results = await Promise.all([fetchSuccess(), fetchFailure()]);

    // This line won't execute if any promise is rejected
    console.log("Results:", results);
  } catch (error) {
    // Catch any error if a promise is rejected
    console.error("Error:", error.message);
  }
}

// Call the function to see the results
handlePromises();

/*NOTE. Handling Multiple Promises with Mixed Results
If you want to handle successful and failed promises separately, you could use Promise.allSettled(), which allows handling both resolved and rejected promises without terminating early. */

/*----------------------------------------------------Timeout with Async/Await and Promise.race()-----------------------------------------------------------------------------------
In this task, we can use Promise.race() to trigger multiple promises and return the result of the first one that resolves or rejects. This can be useful for scenarios like setting a timeout for promises.

We'll create a function fetchWithTimeout() that:

Takes a promise and a timeout (in milliseconds).
Uses Promise.race() to either return the result of the promise or "Timeout exceeded" if the timeout is reached first. */

/*+++++++++++++++++++++++++++++++++++++++Task 3: Timeout with Async/Await and Promise.race++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Create a function fetchWithTimeout(promise, timeout) that takes a promise and a timeout value in milliseconds. Use Promise.race() to return the result of the promise if it resolves within the timeout, otherwise return "Timeout exceeded". */

// Function to simulate a fetch with a delay (can be successful or long)
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 2000); // Simulates a delay of 2 seconds
  });
}

// Function to simulate a timeout scenario
function fetchWithTimeout(promise, timeout) {
  // Create a timeout promise
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => {
      reject("Timeout exceeded");
    }, timeout);
  });

  // Use Promise.race() to return whichever finishes first
  return Promise.race([promise, timeoutPromise]);
}

// Usage
async function testFetch() {
  try {
    const result = await fetchWithTimeout(fetchData(), 1000); // Timeout set to 1 second
    console.log(result); // This will not be logged because the timeout will exceed
  } catch (error) {
    console.log(error); // Expected: "Timeout exceeded"
  }
}

testFetch();

/*+++++++CODE EXPLANATION+++++++++++

fetchData(): This function simulates fetching data that takes 2 seconds.
    It returns a Promise.
    Inside the Promise, setTimeout() is used to delay the resolution of the promise for 2 seconds (2000 ms).
    After 2 seconds, it resolves with the string "Data fetched!".

fetchWithTimeout(promise, timeout): This function takes two arguments:

    promise: A promise (like fetchData()) that may take some time to resolve.
    timeout: The maximum time in milliseconds to wait for the promise to resolve.

timeoutPromise: This creates a promise that will reject after the specified timeout period.

    setTimeout() is used again to create a delay. After timeout milliseconds, the promise rejects with the message "Timeout exceeded".
    The underscore (_) is used to indicate that we don't care about the resolve callback, only the reject callback.

Promise.race([promise, timeoutPromise]): This is the key line:

    Promise.race() takes an array of promises and races them, meaning it returns the result of the first promise that either resolves or rejects.
    If fetchData() resolves first, its result will be returned. If the timeoutPromise rejects first (before fetchData() resolves), the function will reject with "Timeout exceeded".

testFetch(): This is an async function where we use await to call the fetchWithTimeout() function.

    The function is wrapped in a try-catch block to handle any potential errors (such as the timeout rejection).
    The await expression waits for the result of fetchWithTimeout(fetchData(), 1000).
        fetchData() is the promise, and 1000 is the timeout (1 second).

If the promise resolves within 1 second: If the fetchData() promise resolves before the timeout, the result would be logged using console.log(result).

If the timeout occurs first: If the timeoutPromise rejects before fetchData() resolves (which will happen since fetchData() takes 2 seconds and the timeout is 1 second), the error will be caught in the catch block, and console.log(error) will output "Timeout exceeded".

*/
