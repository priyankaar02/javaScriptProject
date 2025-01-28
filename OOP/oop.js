//-------------------------------OBJECT LITERALS--------------------------------------------------
const user = {
  username: "Sam",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    console.log("Got user details");
    console.log(`Username: ${this.username}`);
    console.log(this);
  },
};

//console.log(user.getUserDetails());

//----------------------------------CONSTRUCTOR FUNCTIONS--------------------------------------------

//create a constructor function. It allows you to create multiple instances from a single object literal
function User(username, loginCount, signedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.signedIn = signedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };
  return this; //Implicitly returns `this` whether you give return this or not
}

//call the constructor function using `new` keyword
const userOne = new User("John", 12, true);
const userTwo = new User("Samual", 15, true);

console.log(userOne);
console.log(userTwo);

console.log(userOne.constructor);
