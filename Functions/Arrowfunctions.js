const user = {
    username: "sam",
    price: 999,
    welcomeMessage: function() {
      // console.log(`${this.username}, welcome to website`) //"this" is the current context
       // console.log(this)
    }
}

/* user.welcomeMessage()
user.username = "Alex" //here the context is changed
user.welcomeMessage() */

//console.log(this) //output: {} is an empty object

//Note: the global object inside a browser is Window object

/* when printing this inside a function inside a node environment */
function testingThis() {
    let username = "sam"
    //console.log(this);
    console.log(this.username); //Output: undefined => cannot use "this" inside a function. Works only inside an Object only
    
}

//testingThis()

/*---------------------------ARROW FUNCTIONS ---------------------------------------*/

/* const arrowFunction = function() {
    let username = "sam"
    //console.log(this);
    console.log(this.username);
} */

const arrowFunction = () => {
    let username = "sam"
    //console.log(this);
    console.log(this.username); //Output : undefined. Cannot use this inside Arrow function
}

//arrowFunction()

//Method1:

/* const addTwo = (num1, num2) => {
    return num1 + num2 //Always require a return keyword here
} */


/*Method 2:*/    //const addTwo = (num1, num2) => num1 + num2
/*Method 3: */  /* const addTwo = (num1, num2) => (num1 + num2) // does not require return keyword here
                console.log(addTwo(5,6));
 */


/*-------Returning an Object -----------*/
const addTwo = (num1, num2) => ({username: "Sam"})
console.log(addTwo());