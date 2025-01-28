//-----------------------------------------------------------------------CREATING EVENTS--------------------------------------------------------------------------------------------------

//addEventListener- Method 1
//attachEvent() - Method2

//Learn about: //type, timestamp, defaultPrevented, target, toElement, srcElement, currentTarget, clientX, clientY, screenX, screenY, altkey, ctrlkey, keycode

document.getElementById("eagle").addEventListener("click", function (e) {
  console.log(e);
});

/*----------------------------------------------------EVENT PROPAGATION--------------------------------------------- (Use them according to your use-case)

1. EVENT BUBBLING => Bubbling up (events execute from top to bottom) */
// document.getElementById("images").addEventListener(
//   "click",
//   function () {
//     console.log("clicked inside ul");
//   },
//   false
// );

// document.getElementById("eagle").addEventListener(
//   "click",
//   function (e) {
//     console.log("eagle clicked");
//   },
//   false
// ); //This 3rd parameter(false) stops the events bubbling

/*Output:
eagle clicked
clicked inside ul
*/

/*2. EVENT CAPTURING => Events execute from top to bottom */

// document.getElementById("images").addEventListener(
//   "click",
//   function () {
//     console.log("clicked inside ul");
//   },
//   true
// );

// document.getElementById("eagle").addEventListener(
//   "click",
//   function (e) {
//     console.log("eagle clicked");
//   },
//   true
// );

/*Output:
clicked inside ul
eagle clicked
*/

//--------------STOP EVENT PROPAGATION------------------------

// document.getElementById("images").addEventListener(
//   "click",
//   function () {
//     console.log("clicked inside ul");
//   },
//   false
// );

// document.getElementById("eagle").addEventListener(
//   "click",
//   function (e) {
//     console.log("eagle clicked");
//     //e.stopPropagation();
//   },
//   false
// );

//---------------PREVENT DEFAULT--------------------

document.getElementById("google").addEventListener("click", function (e) {
  e.preventDefault();
});

//---------e.target------------------------
document.querySelector("#images").addEventListener("click", function (e) {
  console.log(e.target);
  if (e.target.tagName == "IMG") {
    console.log(e.target.parentNode);
    console.log(e.target.id);
    let removeIt = e.target.parentNode;
    removeIt.remove();
  }
});
