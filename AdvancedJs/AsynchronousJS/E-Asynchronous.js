//Example 1
function simulateAsyncTask() {
  console.log("Task started");
  setTimeout(() => {
    console.log("Task finished");
  }, 2000); // 2-second delay
}

//simulateAsyncTask();

//Example 2: All tasks run asynchronously, meaning they are handled independently of one another.
function simulateMultipleTasks() {
  // Task 1: 1 second delay
  setTimeout(() => {
    console.log("Task 1 finished");
  }, 1000);

  // Task 2: 2 seconds delay
  setTimeout(() => {
    console.log("Task 2 finished");
  }, 2000);

  // Task 3: 3 seconds delay
  setTimeout(() => {
    console.log("Task 3 finished");
  }, 3000);
}

//simulateMultipleTasks();

//Example 3: Asynchronous tasks with callback functions

function fetchDataWithCallback(callback) {
  // Simulate fetching data with a 2-second delay
  setTimeout(() => {
    const data = "Fetched data";
    callback(data); // Invoke the callback with "Fetched data"
  }, 2000);
}

// Example usage with a callback function
fetchDataWithCallback((data) => {
  console.log(data); // Logs "Fetched data" once the callback is invoked
});
