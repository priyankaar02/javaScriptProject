/*----------------------------------------------------Prototype-Based Inheritance in JavaScript--------------------------------------------------


In JavaScript, prototypes allow objects to inherit properties and methods from other objects. We'll use constructor functions and the .prototype property to create inheritance.*/

//Example 1
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`Hello my name is ${this.name}`);
};

let myName = new Person("Priyanka");
myName.greet();

//Example 2: Inheritance

const Teacher = {
  name: "Anita",
};

const TeachingSupport = {
  subject: "JS",
};

Object.setPrototypeOf(TeachingSupport, Teacher);

//-----------------------------------------------------EXERCISES----------------------------------------------------------------

/*+++++++++++++++++Task 1: Create Inheritance Using Prototypes++++++++++++++++++++++++++++++++++++++++

Create a constructor Animal with a method makeSound(). Then create a constructor Dog that inherits from Animal and adds a method bark()*/

function Animal(name) {
  this.name = name;
}

// Prototype Method
Animal.prototype.makeSound = function () {
  return `${this.name} makes a sound.`;
};

// Child Constructor
function Dog(name) {
  Animal.call(this, name); // Inherit properties
}

// Inherit Methods
Dog.prototype = new Animal();

// Add Dog-Specific Method
Dog.prototype.bark = function () {
  return `${this.name} barks: Woof! Woof!`;
};

// Usage
const dog1 = new Dog("Buddy");

console.log(dog1.makeSound()); // "Buddy makes a sound." (inherited)
console.log(dog1.bark()); // "Buddy barks: Woof! Woof!"
console.log(dog1 instanceof Dog); // true
console.log(dog1 instanceof Animal); // true (due to prototype inheritance)

/*++++++++++++++++++++++++++++++++Task 2: Shape and Rectangle Inheritance++++++++++++++++++++++++++++++++++

Create a constructor function Shape that takes color as a parameter and has a method getColor() that returns the color.

Create another constructor Rectangle that inherits from Shape and adds properties width and height. Add a method getArea() to Rectangle that returns the area of the rectangle. */

// Parent Constructor (Shape)
function Shape(color) {
  this.color = color;
}

// Add getColor() method to Shape prototype
Shape.prototype.getColor = function () {
  return this.color;
};

// Child Constructor (Rectangle)
function Rectangle(color, width, height) {
  Shape.call(this, color); // Inherit color property
  this.width = width;
  this.height = height;
}

// Inherit Shape prototype
Rectangle.prototype = new Shape();

// Add getArea() method to Rectangle prototype
Rectangle.prototype.getArea = function () {
  return this.width * this.height;
};

// Usage
const rect = new Rectangle("red", 10, 5);
console.log(rect.getColor()); //"red" (inherited)
console.log(rect.getArea()); // 50 (10 * 5)
console.log(rect instanceof Rectangle); // true
console.log(rect instanceof Shape); // true (inherits from Shape)
