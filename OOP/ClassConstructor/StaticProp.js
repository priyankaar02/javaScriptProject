/* ---------------------------------------------------------STATIC PROPERTY-------------------------------------------------------------------------

The static keyword in JavaScript is used inside a class to define methods or properties that belong to the class itself, rather than to instances of the class.

Key Points:

. Static methods are called directly on the class, not on instances.
. Static properties are also accessed via the class.
. Useful for utility functions, constants, and helper methods that don’t need access to instance-specific data. */

class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`User is ${this.username}`);
  }
  static createId() {
    return `123`;
  }
}

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }

  addCourse() {
    console.log(`New course was added by ${this.username}`);
  }
}

const newUser = new User("John");
//console.log(newUser.createId()); //newUser.createId is not a function

const newTeacher = new Teacher("Sam", "sam@gmail.com");
console.log(newTeacher.createId()); //newTeacher.createId is not a function
