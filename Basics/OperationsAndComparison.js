//---------------------OPERATIONS-----------------------------------------

let value = 3;
let negValue = -value;
console.log(negValue); //-3

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 / 2);
console.log(2 % 2);

let strg = "hello";
let strg2 = "John";
let strg3 = strg + strg2;
console.log(strg3); //hello John

console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + "2"); //
console.log("1" + 2  + 2); //122 
console.log(1 + 2  + "2"); //32


console.log(true); //true
console.log(+true); //1
//console.log(true+); error
console.log(+""); //0

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;
gameCounter++;
console.log(gameCounter); //101

let gameCounter1 = 100;
++gameCounter1++;
console.log(gameCounter); //100

//---------------------------COMPARISONS ------------------------------------

console.log("2" > 1); //true
console.log("02" > 1); //true
 
/* Comparisons convert sometimes null to a number, treating it as 0 and sometimes as NaN. Hence, null >= 0 is true and null > 0 is false */
console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true

console.log(undefined > 0); //false
console.log(undefined == 0); //false
console.log(undefined >= 0); //false

/*Always use strict check === */
console.log("2" === 2); //false

