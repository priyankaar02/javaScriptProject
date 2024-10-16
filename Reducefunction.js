/*--------------REDUCE FUNCTION ------------------*/

//EXAMPLE 1
const myNums = [1, 2, 3]
//Method 1: using normal function
const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`Accumilator value: ${acc} and current value: ${currval}`);
    return acc + currval
}, 0)

console.log(myTotal);

//Method 2: Using Arrow function. Here since I have not opened scope "{}" inside the arrow function, no return keyword is used
const myTotal2= myNums.reduce((acc, currval) => acc + currval, 0)
console.log(`Using arrow function: ${myTotal2}`);

//EXAMPLE 2
const shoppingCart = [
    {
        itemId: 1,
        itemName: "Javascript course",
        price: 3000
    },
    {
        itemId: 1,
        itemName: "Python course",
        price: 5000
    },
    {
        itemId: 1,
        itemName: "React course",
        price: 8000
    },
    {
        itemId: 1,
        itemName: "Typescript course",
        price: 4000
    },
    {
        itemId: 1,
        itemName: "Android course",
        price: 4000
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);


