//---------------------------------Example 1-----------------------------------------------
function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "javascript", url: "https://learnjs.com" });
    }, 3000);
  });
}

async function getUserData() {
  try {
    console.log("fetching user data....");
    const userData = await fetchUserData();
    console.log("User data fetched successfully");

    console.log("User data:", userData);
  } catch (error) {
    console.log("Error fetching data", error);
  }
}

getUserData();

//---------------------------------Example 2--------------------------------
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      console.log("Async 5 task complete");
      resolve({ username: "Sam", password: "1234546" }); //connects to .then function and normally we pass an object inside resolve
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

/*----------------------------------Example 3------------------------------------------------*/

async function getAllUsers() {
  try {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json(); //response.json takes time to get the results, so you must use await
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getAllUsers();

//-----------Same above example using .then() and .catch()----------------------

fetch("https://randomuser.me/api/")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
