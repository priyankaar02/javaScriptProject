//--------------------------------------CONVERSION OF DATATYPES-------------------------------------------------


//--------------- Number Conversion----------------
let score = 33;
console.log(typeof score); //number
console.log(typeof(score)); //number

let score1="33";
console.log(typeof score1); //string
console.log(typeof(score1)); //string

let valueInNumber = Number(score); //Its a guarantee that score has been converted to score
console.log(typeof valueInNumber); // number
console.log(valueInNumber); 

let score2 = "33abc";
let valueInNumber2 = Number(score2); 
console.log(typeof valueInNumber2); // number
console.log(valueInNumber2); //NaN

let score3 = null;
let valueInNumber3 = Number(score3); 
console.log(typeof valueInNumber3); // number
console.log(valueInNumber3); //0

let score4 = undefined;
let valueInNumber4 = Number(score4);
console.log(typeof valueInNumber4); // number
console.log(valueInNumber4); //NaN

let score5 = true;
let valueInNumber5 = Number(score5);
console.log(typeof valueInNumber5); // number
console.log(valueInNumber5); //1

let score = "John";
let valueInNumber6 = Number(score6);
console.log(typeof valueInNumber6); // number
console.log(valueInNumber6); //1

//--------------Boolean Conversion------------------------------
let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(isLoggedIn); //true

let isLoggedIn1 = "";
let booleanIsLoggedIn1 = Boolean(isLoggedIn1);
console.log(isLoggedIn1); //false

let isLoggedIn2 = "Sam";
let booleanIsLoggedIn2 = Boolean(isLoggedIn2);
console.log(isLoggedIn2); //true

//------------String Conversion------------------------------------
let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber); //33
console.log(typeof stringNumber); //String

