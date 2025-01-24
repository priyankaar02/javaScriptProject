//Nested Scope => Closures

function one() {
  const username = "sam";
  function two() {
    const website = "youtube";
    console.log(username);
  }
  //console.log(website); //website is not defined
  two();
}
one();

if (true) {
  const username = "John";
  if (username === "John") {
    const website = "   youtube";
    console.log(username + website); //John youtube
  }
  // console.log(website); //website is not defined
}

//console.log(username); //username is not defined

//--------------IMPORTANT - Hoisting------------------------------
console.log(addOne(5));

function addOne(num) {
  return num + 1;
}

console.log(addTwo(5)); //cannot access addTwo before initialization
const addTwo = function (num) {
  return num + 2;
};
