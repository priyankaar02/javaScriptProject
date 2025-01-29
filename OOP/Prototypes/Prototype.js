//javascript's default behavior is prototypal behavior

const newHero = ["hulk", "spiderman"];

//Are functions Objects too

function multiplyBy5(num) {
  return num * 5;
}

multiplyBy5.power = 2;

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

//-------------------------------------------NEW KEYWORD-------------------------------------------------------------------

// The new keyword in JavaScript is used to create an instance of an object from a constructor function. It does four things behind the scenes:

// Creates a new empty object.
// Links (__proto__) the new object to the constructor's prototype.
// Binds this inside the constructor function to the new object.
// Returns the newly created object.

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function () {
  this.score++;
};

const userOne = new createUser("Sam", 25);
const userTwo = new createUser("Samuel", 35);

function Car(brand) {
  this.brand = brand;
}

//Example 1: Without new
const car1 = Car("Toyota"); // Forgetting 'new'
//console.log(car1); // undefined
//console.log(window.brand); // "Toyota" (pollutes global scope)

//Example 2: Using new Correctly

function Car(brand) {
  this.brand = brand;
}

const car2 = new Car("Toyota");
console.log(car2.brand); // "Toyota"
console.log(car2 instanceof Car); // true

//---------------------------------------------PROTOTYPE---------------------------------------------------------------------------

//Example 1: Adding Methods via Prototype
function CarBrand(brand) {
  this.brand = brand;
}

// Adding a method to all instances
CarBrand.prototype.getBrand = function () {
  return `Brand: ${this.brand}`;
};

const carOne = new CarBrand("Toyota");
console.log(carOne.getBrand()); // "Brand: Toyota"

//Example 2: Creating my own prototype called `Sam` on an Object => gives super power to Arrays, Strings and Objects. But creating prototypes on Arrays, does not give the access to Objects, functions or Strings

let myCountries = ["Germany", "Austria"];
let userDetails = {
  username: "John",
  email: "sam@google.com",
  age: 35,

  getUserDetails: function () {
    console.log(`Hello ${this.username}`);
  },
};

Object.prototype.sam = function () {
  console.log(`Sam is present in all objects`);
};

myCountries.sam(); //Available on Array
userDetails.sam(); //Available on Object

//Example 3: Another example of creating your own prototype called `trueLength`

let myName = "Samuel       ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`The true length of the String is: ${this.trim().length}`);
};

myName.trueLength();
"John     ".trueLength();
