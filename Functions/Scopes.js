//var c = 3000; // Global scope
let a = 300;

//Local scope
if (true) {
  let a = 10;
  const b = 20;
  //var c = 30;
  console.log("INNER:", a);
}

console.log(a);
//console.log(b); //b is not defined
//console.log(c); //30 - avoid var

/*NOTE: Global execution context in the browser is Window object and in NodeJS environment it is {} empty object*/
