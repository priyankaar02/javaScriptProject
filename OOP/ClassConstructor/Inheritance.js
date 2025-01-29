//--------------------------Inheritance with extends-----------------------------------------------

//---------------------Example 1---------------------------------------
class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username is  ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username); //Use SUPER keyword to inherit the features of parent class
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`New course was added by ${this.username}`);
  }
}

const teacherDetails = new Teacher("John", "john@gmail.com", "123344");
teacherDetails.addCourse(); //New course was added by John
teacherDetails.logMe(); //Username is  John

const newTeacher = new User("SAM");
//newTeacher.addCourse(); //newTeacher does not have access to addCourse function
newTeacher.logMe(); //Username is  SAM

console.log(teacherDetails === newTeacher); //false
console.log(teacherDetails instanceof User); //true
console.log(teacherDetails instanceof Teacher); //true

//--------------------------------------Example 2--------------------------------------------------------------
class Vehicle {
  constructor(type) {
    this.type = type;
  }

  getType() {
    return `Type: ${this.type}`;
  }
}

class Car extends Vehicle {
  constructor(brand) {
    super("Car"); // Calls parent constructor
    this.brand = brand;
  }

  getBrand() {
    return `Brand: ${this.brand}`;
  }
}

const car3 = new Car("Mercedes");
console.log(car3.getType()); // "Type: Car"
console.log(car3.getBrand()); // "Brand: Mercedes"
console.log(car3 instanceof Car); // true
console.log(car3 instanceof Vehicle); // true
