/********************************* DATATYPES *****************************/

/* PRIMITIVE DATATYPES => 7 types: Boolean, Number, String, null, undefined, symbol, BigInt
String uses call by value */

/*NOTE: JavaScript is a dynamically typed language. In dynamically typed languages all type checks are performed in a runtime, only when your program is executing. */

let score = 100;
let scoreValue = 100.3;
let isLoggedIn = false;
let outsideTemp = null;
let userEmail;
let id = Symbol("123");
let anotherId = Symbol("123");

console.log(id === anotherId); //false

const bigNumber = 2345674331178934332n;

// NON-PRIMITIVE DATATYPES (Reference) => array, object, Functions

const arrEx = ["a", "b", "c"];
let myObj = {
  name: "priyanka",
  age: 18,
};
const myFunction = function () {
  console.log("hello world");
};

console.log(typeof arrEx);
console.log(typeof myObj);

/*************************** MEMORY ALLOCATION ******************************/

// Stack (Primitive datatypes uses stack mem) and Heap memory (Non-primitive)

// Example for Stack memory: A copy of a variable is created
let nameOne = "stackmemory";

let anotherName = nameOne;
anotherName = "Copystackmemory";
console.log(nameOne); //stackmemory
console.log(anotherName); //Copystackmemory

/* Example for Heap memory: Both variables (userOne and userTwo) reference the same object and any changes done is done 
to the original object */

let userOne = {
  email: "abc@gmail.com",
  id: 123,
};

let userTwo = userOne;
userTwo.email = "bcd@gmail.com";
console.log(userOne.email);
console.log(userTwo.email);

//************************* STRINGS ************************************** */

const name = "Priyanka";
const age = 18;

/*String interpolation using Backticks(``) */
console.log(`My name is ${name} and my age is ${age}`);

//****************String Operations*****************

const cityName = new String("Munich-Bavaria");

console.log(cityName[0]);
console.log(cityName.__proto__);
console.log("Length:", cityName.length);
console.log("CharAt:", cityName.charAt(3));
console.log("Index of:", cityName.indexOf("u"));
console.log("To Uppercase:", cityName.toUpperCase());
console.log("Substing:", cityName.substring(0, 4)); //Muni ----- Cannot give negative values here
console.log("Slice:", cityName.slice(0, 3)); // Mun ---- Can give negative values
console.log("Split:", cityName.split("-")); //split(seperator,limit)

const userThree = "https://replace.com/extra%20characterremoval";
console.log("Replace:", userThree.replace("%20", "-"));
console.log("Includes:", userThree.includes("removal")); //false

const userFour = "    Removeextraspaces    ";
console.log("Before Trim:", userFour);
console.log("After Trim:", userFour.trim());

/************************** NUMBER AND MATH *****************************/

const score1 = 400;
console.log(score1);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2)); //

const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(3)); //123

const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-IN")); //10,00,000

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.random());
console.log(Math.random() * 10 + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)));

/*************************DATES AND TIME**************************************/

let myDate = new Date(); //created date object instance
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate); //Object

//To declare a specific date and Month starts from 0 in JS
let myCreatedDate = new Date(2023, 0, 23);
console.log(myCreatedDate.toDateString()); //Mon Jan 23 2023

//to declare specific date and also time
let myCreatedDate2 = new Date(2023, 0, 23, 5, 3);
console.log(myCreatedDate2.toLocaleString()); // 1/23/2023, 5:03:00 AM

//to display date in the form of YYYY-MM-DD
let myCreatedDate3 = new Date("2023-01-14");
console.log(myCreatedDate3.toLocaleString()); // 1/14/2023, 12:00:00 AM

//to display date in the form of MM-DD-YYYY
let myCreatedDate4 = new Date("2023-01-14");
console.log(myCreatedDate4.toLocaleString()); // 1/14/2023, 12:00:00 AM

//Get timestamp value and time in milliseconds
let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate3.getTime());
console.log(Math.floor(Date.now() / 1000)); //converted from milliseconds to seconds

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1); //to get a specific month from a date
console.log(newDate.getDay()); //to get a specific day from a date

newDate.toLocaleString("default", {
  weekday: "long",
});
