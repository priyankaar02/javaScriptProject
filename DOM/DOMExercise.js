//Example 1

document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    //console.log(this); //Imp: Here this points to the current context (inside normal function but inside arrow function, this points to window object)
    document.getElementById("myParagraph").textContent = "Button clicked";
  });

//Example 2

document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    const list = document.getElementById("citiesList");
    list.firstElementChild.classList.add("highlight");
  });

//Example 3
document.getElementById("changeOrder").addEventListener("click", function () {
  let coffeeType = document.getElementById("coffeeType");
  //   console.log(coffeeType);
  coffeeType.textContent = "Espresso";
  coffeeType.style.backgroundColor = "brown";
  coffeeType.style.padding = "10px";
});

//Example 4
document.getElementById("addNewItem").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "Eggs";
  const item = document.getElementById("shoppingList");
  item.appendChild(newItem);
});

//Example 5
document
  .getElementById("removeLastItem")
  .addEventListener("click", function () {
    let taskList = document.getElementById("taskList");
    taskList.lastElementChild.remove();
  });

//Example 6
document
  .getElementById("clickMeButton")
  .addEventListener("mouseover", function () {
    alert("clicked");
  });

//Example 7
document.getElementById("teaList").addEventListener("click", function () {
  //console.log(event.target); //to find out what the user clicks
  if (event.target && event.target.matches(".teaItem")) {
    alert("you selected " + event.target.textContent);
  }
});

//Example 8
document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    console.log(feedback);
    document.getElementById(
      "feedbackDisplay"
    ).textContent = `Your feedback is: ${feedback}`;
  });

//Example 9
document.addEventListener("DOMContentL oaded", function () {
  document.getElementById("domStatus").textContent = "DOM fully loaded";
});

//Example 10
document
  .getElementById("toggleHighlight")
  .addEventListener("click", function () {
    let descriptionText = document.getElementById("descriptionText");
    descriptionText.classList.toggle("highlight");
  });

/* Example of MDN webpage
  
  document.getElementByTagName('h1') Output: HTMLCollection[h1] (which is an array)
  document.getElementsByTagName('h1').length; Output: 1
  document.getElementsByTagName("h1")[0]; Output: <h1>Input</h1>
  document.getElementById('h1')[0].textContent; Output: 'InputEvent'
  document.getElementsByTagName('h1')[0].textContent = "change content"

When you want to select some anchor elements inside the website and display its content using for loop
  for (let index = 0; index < 15; index++) {
        console.log(anchorElements[index].textContent);
    }

To convert a NodeList into an array in JavaScript, you can use several methods.

const nodeList = document.querySelectorAll('p'); // Select all <p> elements

// Method 1: Array.from()
const array1 = Array.from(nodeList);

// Method 2: Spread operator
const array2 = [...nodeList];

// Method 3: Array.prototype.slice.call()
const array3 = Array.prototype.slice.call(nodeList);

// Method 4: Array.prototype.map.call()
const array4 = Array.prototype.map.call(nodeList, node => node);

console.log(array1, array2, array3, array4);  
*/
