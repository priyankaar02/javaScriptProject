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
Write an arrow  function name `orderTea` that takes one parameter, `teaType`, and inside this function create another function named `confirmOrder` that returns a message like `"Order confirmed for chai"` Call `confirmOrder` 
from within `orderTea` and return the result.
*/
