/*--------- IF CONDITION ------------------*/
console.log("----------IF CONDITION-------------");
const userEmail = [];
if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Didnt recieve user email");
}

//Operators used inside if condition: <, >, <=, >=, ==, !==, ===, !==
const isUserLoggedIn = true;
const temperature = 41;

if (temperature === 40) {
  console.log("Less than 50");
} else {
  console.log("Temperature is greater than 50");
}

/*---- Falsy Values   :  false,0, -0, BigInt 0n, "",null, undefined, NaN -----*/
/*---- Truethy Values :  "0", 'false', " ", [], {}, function(){} -----*/

/*check if the ARRAY exits */
if (userEmail.length === 0) {
  console.log("Array is empty");
}

/*check if the OBJECT exits */
const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
  //Object.keys(emptyObj) => Here "Object.keys" converts the object "emptyObj" into an array
  console.log("Object is empty");
}

/* NOTE => Check these inside the console of a browser
false == 0  Output: true
false == '' Output: true
0 == ''     Output: True  */

//Nullish Coalescing Operator (??): null undefined

let val1, val2, val3, val4;
val1 = 5 ?? 10;
val2 = null ?? 10;
val3 = undefined ?? 15;
val4 = null ?? 10 ?? 15;
console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);

//Terniary Operator
console.log("----------TERNIARY OPERATION-------------");
const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("lesser") : console.log("greater");

//Switch Condition
const month = 3;
switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;

  default:
    console.log("No match case");
    break;
}

//example 2
const month1 = "April";

switch (month1) {
  case "January":
    console.log("January");
    break;
  case "February":
    console.log("February");
    break;
  case "March":
    console.log("March");
    break;
  case "April":
    console.log("April");
    break;
  case "Mai":
    console.log("Mai");
    break;
  case "June":
    console.log("June");
    break;

  default:
    console.log("No match case");
    break;
}

/* --------- FOR LOOP -------------------- */
console.log("----------FOR LOOP -------------");
for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    console.log(`Element: ${element} and Index: ${i} matched`);
  }
  console.log(element);
}

//Nested for loop
console.log("----------NESTED FOR LOOP-------------");
for (let i = 0; i <= 10; i++) {
  console.log(`Outer loop value: ${i}`);
  for (let j = 0; j <= 10; j++) {
    console.log(`Inner loop value: ${j} and outer loop value: ${i}`);
  }
}

// For loop for an Array
console.log("----------ACCESSING ARRAY ELEMENTS THROUGH FOR LOOP-------------");
let myArray = ["Munich", "Berlin", "Frankfurt"];
for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  console.log(element);
}

//Break and continue Operation
console.log("----------BREAK OPERATION-------------");
for (let index = 0; index <= 10; index++) {
  if (index == 5) {
    console.log("Detected 5");
    break;
  }
  console.log(`Value of index is ${index}`);
}

console.log("----------CONTINUE OPERATION-------------");

for (let index = 0; index <= 10; index++) {
  if (index == 5) {
    console.log("Detected 5");
    continue;
  }
  console.log(`Value of index is ${index}`);
}

/* ------------ WHILE LOOP -------------------*/
console.log("----------WHILE LOOP-------------");
let index = 0;
while (index <= 10) {
  console.log(`Value of index is: ${index}`);
  index = index + 4;
}

console.log("----------ARRAY OPERATION IN WHILE LOOP-------------");
let myArray2 = ["BMW", "VW", "MERCEDEZ", "FORD"];
let arr = 0;
while (arr < myArray2.length) {
  console.log(`Value is ${myArray2[arr]}`);
  arr = arr + 1;
}

console.log("----------DO WHILE LOOP-------------");
let score = 1;
do {
  console.log(`Score is ${score}`);
  score++;
} while (score <= 10);
