function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`Hello my name is ${this.name}`);
};

let myName = new Person("Priyanka");
myName.greet();
