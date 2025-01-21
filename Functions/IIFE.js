//Immediately Invoked Function Expressions (IIFE)

/* Why do we use IIFE ?
1. Functions are immediately executed
2. Sometimes problems are caused by global scope variables. To remove the pollution caused by global scope, we use IIFE */

//NAMED IIFE
(function test(){
    console.log(`DB CONNECTED`);
})();  //IMPORTANT: ALWAYS END THE IIFE FUNCTION AN IIFE WITH ";" WHEN THERE THERE ARE MORE THAN ONE IIFE IN A FILE

//UNNAMED IFFE USING ARROW FUNCTION
(() => {
    console.log(`DB CONNECTED TWO`); 
})();

//PASSING PARAMETER TO IFFE FUNCTION
((name) => {
    console.log(`DB CONNECTED TWO ${name}`); 
})('SAM');
