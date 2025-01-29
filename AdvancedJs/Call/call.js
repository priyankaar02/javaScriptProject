/*The .call() method in JavaScript allows you to invoke a function with a specified this value and pass arguments one by one.

Why Use call()?

To borrow methods from other objects.
To set the this context explicitly.
To reuse functions across multiple objects. */

/*-------------------Using call() for Constructor Inheritance---------------------------------------------------------------- */

//Example 1
function SetUsername(username) {
  this.username = username;
}

function createUser(username, email, password) {
  SetUsername.call(this, username); //holds the reference
  this.email = email;
  this.password = password;
}

const userOne = new createUser("Sam", "sam@google.com", "12344");
console.log(userOne);

//Example 2
function Animal(name) {
  this.name = name;
}

function Dog(name, breed) {
  Animal.call(this, name); // Borrowing Animal's constructor
  this.breed = breed;
}

const dog1 = new Dog("Buddy", "Golden Retriever");
console.log(dog1.name); // "Buddy"
console.log(dog1.breed); // "Golden Retriever"

/*-------------------------------------- Reusing Methods (Avoid Code Duplication)-------------------------------------------------------
Suppose we have objects representing employees and managers, and they need the same function. */

//Example 1
const employee = { name: "John", role: "Developer" };
const manager = { name: "Emma", role: "Project Manager" };

function introduce(company) {
  console.log(`Hi, I'm ${this.name}, working as a ${this.role} at ${company}.`);
}

introduce.call(employee, "Google"); // "Hi, I'm John, working as a Developer at Google."
introduce.call(manager, "Microsoft"); // "Hi, I'm Emma, working as a Project Manager at Microsoft."

//Example 2
const person1 = { name: "Alice" };
const person2 = { name: "Bob" };

function greet(city, country) {
  console.log(
    `Hello, my name is ${this.name} and I'm from ${city}, ${country}.`
  );
}

// Using call() to borrow the greet function
greet.call(person1, "New York", "USA"); // "Hello, my name is Alice and I'm from New York, USA."
greet.call(person2, "London", "UK"); // "Hello, my name is Bob and I'm from London, UK."

/*-----------------------------------------NOTE------------------------------------------
. call() calls a function immediately with a specified this value.
. It helps in method borrowing, constructor inheritance, and explicit this binding.
. It is useful when we need to pass arguments one by one. */
