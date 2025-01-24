/*--------------------- Singleton Object Creation-----------------------*/
const tinderUser = new Object();
console.log(tinderUser);

/*--------------------- Non Singleton Object Creation-----------------------*/
const tinderUser2 = {};
console.log(tinderUser2);

//Object literals

/*Object Declaration*/

const mySym = Symbol("key1"); //important

const JsUser = {
  name: "abc",
  "full name": "def",
  [mySym]: "myKey1", //Syntax: to use it as a symbol then declare it as a symbol with [] brackets and must be accessed by []
  age: 18,
  location: "India",
  email: "abc@gmailcom",
  isLoggedIn: false,
  lastLoggedInDays: ["Monday", "Thursday"],
};

/*--------------------Accessing Object values----------------------------------*/
console.log(JsUser.email); //not so recommended method
console.log(JsUser["email"]); //recommended
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

console.log(
  "Retrieve Object keys:",
  Object.keys(JsUser)
); /*Important and very useful */
console.log(
  "Retrieve Object values:",
  Object.values(JsUser)
); /*Important and very useful */

console.log(Object.entries(JsUser));

/* ----- To check if the object has a particular property---- */
console.log(
  "Check if an object has a property",
  JsUser.hasOwnProperty("email")
);

/*--------------------Changing values of an Object-----------------------------*/
/* JsUser.email = "abc@microsoft.com"
console.log("Before FREEZE Operation:", JsUser["email"])
Object.freeze(JsUser)
JsUser.email = "abc@chatgpt.com"
console.log("After FREEZE Operation:", JsUser["email"]) */

/*------------------Adding Functions to Objects -------------------------------*/
JsUser.greeting = function () {
  console.log("hello world");
};
JsUser.greeting = function () {
  console.log(`Display name: ${this.name}`);
  console.log(`Display full name: ${this["full name"]}`); //important
};

console.log(JsUser.greeting());

/*------------------Adding values to Objects -----------------------*/
//const tinderUser3 = new Object(); //Method 1: empty Object => Singleton Object
const tinderUser3 = {}; //Method 2: empty Object => Non singleton object

tinderUser3.id = "123abc"; //adding value inside the object
tinderUser3.name = "Sam";
tinderUser3.age = 18;
tinderUser3.isLoggedIn = false;

console.log(tinderUser3);

/*--------------- Nested Objects ---------------------- */

const regularUser = {
  email: "sam@microsoft.com",
  fullname: {
    userfullname: {
      firstname: "Sam",
      lastname: "Kapoor",
    },
  },
};

console.log(regularUser["email"]);
console.log(regularUser.fullname.userfullname.lastname);

/*---------------------------- Merging Objects -----------------*/

const obj1 = { 1: "a", 2: "b", 3: "c" };
const obj2 = { 4: "b", 5: "c", 6: "d" };
const obj3 = { 7: "a", 8: "b", 9: "c" };

//const obj4 = {obj1, obj2, obj3} //creates nested Objects and it is not recommended
//const obj4 = Object.assign({}, obj1, obj2, obj3) /*Not frequently used method */
const obj4 = {
  ...obj1,
  ...obj2,
  ...obj3,
}; /* Most frequently used method => Spread operator */
console.log(obj4);

/*------------- How to do when you receive values from database as array of objects -------------*/

const users = [
  {
    id: 1,
    email: "sam1@microsoft.com",
  },
  {
    id: 2,
    email: "sam2@microsoft.com",
  },
  {
    id: 3,
    email: "sam3@microsoft.com",
  },
  {
    id: 4,
    email: "sam4@microsoft.com",
  },
];

console.log("Retrieve user email of index 2", users[2].email);
