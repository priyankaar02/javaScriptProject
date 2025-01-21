/* Question 1
Write a function name `makeTea` that takes one parameter, `typeOfTea`, and returns a string like `"Making  green tea"` when called with `"green tea". Store the result in a variable name `teaOrder` */

function makeTea(typeOfTea) {
  return `Making ${typeOfTea}`;
}
let teaOrder = makeTea("green tea");
console.log(teaOrder);

/* Question 2
Write a function name `orderTea` that takes one parameter, `teaType`, and inside this function create another function named `confirmOrder` that returns a message like `"Order confirmed for chai"` Call `confirmOrder` 
from within `orderTea` and return the result.
*/

function orderTea(teaType) {
  function confirmOrder() {
    return `Order confirmed for ${teaType}`
  }
  return confirmOrder();
}
let orderInformation = orderTea("chai");
console.log(orderInformation);

/* Question 3
Write an arrow  function named `calculateTotal` that takes two parameters, `price` and `quantity`. The function should return a total cost by multiplying the `price` and `quantity`. Store the result in a variable named
`totalCost`
*/
/*-----METHOD 1-----*/
const calculateTotal = (price, quantity) => {
  return price * quantity;
}
let totalCost = calculateTotal(500, 5);

/*-----METHOD 2-----*/
const calculateTotal = (price, quantity) => price * quantity;
let totalCost1 = calculateTotal(500, 5);

/* NOTE: THIS => is a context. In the browser, window object is a context.
Arrow function has `this` but it does not have enough ability in the arrow function ie cannot pass on this context. */
 
/* Question 4: HIGHER ORDER FUNCTION (First-Class Function) [Passing a function as A parameter inside another function is higher order function. Example: forEach loop]
Write a function named `processTeaOrder` that takes another function, `makeTea` as the parameter and calls it with the argumnent `"earl grey"`. Return the result of calling `makeTea`
*/
function makeTea(typeOfTea) {
  return `maketea: ${typeOfTea}`
}
function processTeaOrder(teaFunction) {
  return teaFunction('earl grey');
}
let order = processTeaOrder(makeTea);
console.log(order);

/* Question 5: NESTED FUNCTION [link: https://www.geeksforgeeks.org/javascript-nested-functions/]
Write a function named `createTeaMaker` that returns another function. The returned function should take one parameter, `teaType` and return a message like `Making green tea`.
Store the returned function in a variable name `teaMaker` and call it with `"green tea"` */

function createTeaMaker(name) {
  let score = 100;
  return anotherFunction(teaType) {
    return `Making ${teaType}, ${name} with ${score}`
  };
}
let teaMaker = createTeaMaker('priyanka');
let result = teaMaker('green tea')
console.log(result);
