/*-------------TYPE CONVERSION EXERCISES -------------------*/

/*Task 1:

Write a function stringToNumber that takes a string input and tries to convert it to a number. If the conversion fails, return "Not a number".*/

function stringToNumber(input) {
    let numb = Number(input);
    if(isNaN(numb)) {
        return `Not a number`;
    }
    console.log(numb);
}
stringToNumber('priyanka')

/*Task 2:

Write a function flipBoolean that takes any input and converts it to its boolean equivalent, then flips it. For example, true becomes false, 0 becomes true, etc.*/

function flipBoolean(input) {
    let convertBool = !Boolean(input);
    console.log(convertBool);
}
flipBoolean(1)

/*Task 3:

Write a function whatAmI that takes an input and returns a string describing its type after conversion. If it's a number, return "I'm a number!", if it's a string, return "I'm a string!"*/

function whatAmI(input) {
    if(isNaN(input)) {
        return `I am a string`
    }
    return `I am number`
}
whatAmI('hello')

/*Task 4:

Write a function isItTruthy that takes an input and returns "It's truthy!" if the value is truthy in JavaScript, or "It's falsey!" if it's falsey.*/

function isItTruthy(input) {
    let checkValue = Boolean(input);
    if(checkValue) {
        return `Im truthy`
    }
    return `its falsey`
}

isItTruthy("");

/*NOTE

If input evaluates to true in a conditional statement, it returns "It's truthy!"; otherwise, it returns "It's falsey!".

How Can I Check if a Value is Truthy or Falsy in JavaScript?
You can check if a value is truthy or falsy by using it in a Boolean context, such as an if statement. 
For example, if (value) {…} will execute the code block if the value is truthy and will not execute if the value is falsy. 
You can also convert a value to a Boolean explicitly using the Boolean() function, like this: Boolean(value).

How Does JavaScript Evaluate Expressions Involving Both Truthy and Falsy Values?
JavaScript uses the concepts of truthy and falsy when evaluating expressions. In a logical operation involving && (AND), 
if the first operand is falsy, JavaScript will short-circuit and return the first operand without evaluating the second operand. 
If the first operand is truthy, JavaScript will return the second operand. In a logical operation involving || (OR), 
if the first operand is truthy, JavaScript will short-circuit and return the first operand. If the first operand is falsy, JavaScript will return the second operand. */
