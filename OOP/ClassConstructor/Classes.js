//ES6

/*In ES6, classes are a cleaner way to define constructor functions, but they still work with prototypes under the hood. 
The new keyword is required when creating an instance of a class. */

//Example 1: Creating a class
class Car {
  constructor(brand) {
    this.brand = brand;
  }

  getBrand() {
    return `Brand: ${this.brand}`;
  }
}

const car1 = new Car("Tesla");
console.log(car1.getBrand()); // "Brand: Tesla"
console.log(car1 instanceof Car); // true

/*NOTE ------------Prototype Chain in Classes------------------------------
Even with ES6 classes, methods like getBrand() are not copied to each instance. They are still stored in the prototype.
*/

console.log(car1.__proto__ === Car.prototype); // true
console.log(car1.hasOwnProperty("getBrand")); // false (stored in prototype)

//Example 2

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  encryptPassword() {
    return `${this.password}abc`;
  }

  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const userOne = new User("sam", "sam@google.com", "1234");
console.log(userOne.encryptPassword());
console.log(userOne.changeUsername());

//-------------------Behind the scene -------------------------------------------------------------

function Userdetails(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

Userdetails.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};

Userdetails.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const userTwo = new Userdetails("John", "john@gmail.com", 123434);

console.log(userTwo.encryptPassword());
console.log(userTwo.changeUsername());
