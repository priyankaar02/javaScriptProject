//----------Method 1-------------------------

// setInterval(() => {
//   console.log("Display date:", Date.now());
// }, 1000);

//-----------Method 2----------------------------

// const sayDate = function (str) {
//   console.log(str, Date.now());
// };

// const intervalId = setInterval(sayDate, 1000, "Display date");
// clearInterval(intervalId);

//----------------------------------DISPLAY DATE WHEN CLICKED ON START AND STOP WHEN CLICKED STOP-----------------------------
// let intervalId;

// const startClicked = function () {
//   if (!intervalId) {
//     intervalId = setInterval(function () {
//       console.log("Display date", Date.now());
//     }, 1000);
//   }
// };

// const stopClicked = function () {
//   clearInterval(intervalId);
//   intervalId = null; //flush out intervalId
// };

// document.querySelector("#start").addEventListener("click", startClicked);

// document.querySelector("#stop").addEventListener("click", stopClicked);

//-----------------------CHANGE BACKGROUND COLOR WHEN CLICKED ON START AND STOP WHEN CLICKED STOP-----------------------
let intervalId;
const body = document.querySelector("body");

const randomColor = function () {
  const hex = "0123456789ABCEDF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(function () {
      body.style.backgroundColor = randomColor();
    }, 1000);
  }
};

const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector("#start").addEventListener("click", startChangingColor);

document.querySelector("#stop").addEventListener("click", stopChangingColor);
