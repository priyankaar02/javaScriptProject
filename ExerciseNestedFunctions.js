//--------------------Nested Functions and Context-----------------------------------------
/*Task 1: Using this in Objects

Create an object person with a method introduce() that uses `this`
Additionally add properties of name & age that will result in Hi, my name is Priyanka and I am 19.5 years old on calling introduce()*/

const person = {
  name: "Priyanka",
  age: 19.5,
  introduce: function() {
    return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
  }
};
console.log(person.introduce());

/*NOTE 
Explanation:
The person object has two properties: name and age.
The introduce method makes use of this to refer to the current object's properties name and age.
When you call person.introduce(), it will output: "Hi, my name is Priyanka and I am 19.5 years old." */

/*Task 2: Function within a function

Write a function outer() that contains another function inner() and returns a value of 'Inner function called' on calling outer() */

function outer() {
  function inner() {
    return 'Inner function called';
  }

  // Call inner() inside outer() and return its value
  return inner();
}

// Calling the outer function
console.log(outer());

/*NOTE
Explanation:
The outer function contains the inner function.
When outer() is called, it calls inner() and returns its value.
The output will be: "Inner function called". */
