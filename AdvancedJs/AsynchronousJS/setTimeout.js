//-----------------Method 1---------------------------------
// setTimeout(function () {
//   console.log("Executed this code after 3s");
// }, 3000);

//--------------------------Method 2--------------------------
// const sayExecuted = function () {
//   console.log("Executed this code after 3s");
// };

// const changeText = function () {
//   document.querySelector("h1").innerHTML = "Stopped event";
// };
// const changeMe = setTimeout(changeText, 3000);

// document.querySelector("#stop").addEventListener("click", function () {
//   clearTimeout(changeMe);
//   console.log("Stopped");
// });
