/*The .bind() method in JavaScript creates a new function where this is permanently set to the value provided. bind() returns a new function, preserving this for future execution.
Does not call the function immediately (unlike call() and apply()).
Use it for:
-- Fixing this in callbacks
-- Pre-filling arguments (partial application)
-- Keeping class methods bound in event listeners
-- Borrowing methods from other objects */

//----------------------------------Example 1: Basic bind() Usage-------------------------------------------------------------------

const person = {
  name: "Alice",
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

const greetFn = person.greet.bind(person); // `this` is bound to `person`
greetFn(); //"Hello, my name is Alice"
/* greetFn is a function with this permanently set to person, preventing this from changing when called in different contexts.*/

/*----------------------------------Example 2: Fixing this in a Callback Function-------------------------------------------------
When passing methods as callbacks, this can get lost. */

const user = {
  name: "Bob",
  sayHello: function () {
    console.log(`Hi, I'm ${this.name}`);
  },
};

//setTimeout(user.sayHello, 1000); //`this` is undefined (or `window` in non-strict mode)
setTimeout(user.sayHello.bind(user), 1000); // "Hi, I'm Bob"
/* setTimeout runs sayHello as a standalone function, losing this.
bind(user) ensures this always refers to user. */

/*-------------------------------------Example 3: Partial Application (Pre-filling Arguments)---------------------------------
bind() can pre-fill arguments, creating partially applied functions.*/

function multiply(a, b) {
  return a * b;
}

const double = multiply.bind(null, 2); // Pre-fills `a` as 2
console.log(double(5)); // 10 (2 * 5)
console.log(double(10)); // 20 (2 * 10)
/* multiply.bind(null, 2) creates a new function where a is always 2.
We only need to pass b when calling double(). */

/*------------------------------Example 4: bind() in Class Methods-----------------------------------------------------
When using class methods with event listeners, this can be lost.*/

class Button {
  constructor(label) {
    this.label = label;
  }

  click() {
    console.log(`Button ${this.label} clicked!`);
  }
}

const btn = new Button("Submit");
//document.getElementById("myButton").addEventListener("click", btn.click);  // `this` will be undefined because `click` is called in a different context.
document
  .getElementById("myButton")
  .addEventListener("click", btn.click.bind(btn));

/*----------------------Example 5: Using bind() for Method Borrowing-----------------------------------------------------
We can borrow functions from one object and use them in another. */

const person1 = { name: "Alice" };
const person2 = { name: "Bob" };

function introduce() {
  console.log(`Hi, my name is ${this.name}`);
}

const introduceBob = introduce.bind(person2);
introduceBob(); // "Hi, my name is Bob"
/*introduce.bind(person2) creates a function where this is permanently person2. */
