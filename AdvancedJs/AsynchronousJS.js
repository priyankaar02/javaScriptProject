// Asynchronous JavaScript is a programming paradigm that allows JavaScript to perform tasks in the background, without blocking the main thread. This is especially important for tasks that take time to complete, such as fetching data from a server, reading files, or waiting for user input.

let myString = "LearnAsynchronousJS";

function sayName() {
  console.log("Hello from function");
}

setTimeout(() => {
  sayName();
}, 2000);

for (let index = 0; index < myString.length; index++) {
  const element = myString[index];
  console.log(element);
}

/*NOTE
1. setTimeout and setInterval: Execute a function after a specified delay or repeatedly at intervals.
setTimeout(() => console.log("Run after delay"), 1000);
setInterval(() => console.log("Run every second"), 1000);

2.  Event Listeners: Listen for and handle asynchronous events, like user input. 
document.querySelector("button").addEventListener("click", () => {
  console.log("Button clicked!");
});

3. Fetching Data: Use APIs like fetch or libraries like Axios for making asynchronous HTTP requests.
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));

*/
