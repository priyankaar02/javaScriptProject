/*A Promise is an object representing the eventual result of an asynchronous operation. It can be in one of three states:
Pending: The operation is still ongoing.
Fulfilled: The operation completed successfully.
Rejected: The operation failed. */

//------------------------------------------Example 1------------------------------------------------------------------------------------
//Promise creation
const promiseOne = new Promise(function (resolve, reject) {
  //Do an async task, DB calls, cryptography, network
  setTimeout(() => {
    console.log("Async task complete");
    resolve(); //connects to .then function
  }, 1000);
});
promiseOne.then(function () {
  console.log("PromiseOne consumed");
});

//------------------------------------------Example 2------------------------------------------------------------------------------------
new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Async task two");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

//------------------------------------------Example 3------------------------------------------------------------------------------------

const promiseThree = new Promise(function (resolve, reject) {
  //Do an async task, DB calls, cryptography, network
  setTimeout(() => {
    console.log("Async 3 task complete");
    resolve({ username: "Sam", email: "sam@example.com" }); //connects to .then function and normally we pass an object inside resolve
  }, 1000);
});
promiseThree.then(function (user) {
  console.log(user);
  console.log("PromiseThree consumed");
});

//------------------------------------------Example 4------------------------------------------------------------------------------------
const promiseFour = new Promise(function (resolve, reject) {
  //Do an async task, DB calls, cryptography, network
  setTimeout(() => {
    let error = true;
    if (!error) {
      console.log("Async 4 task complete");
      resolve({ username: "Sam", password: "1234546" }); //connects to .then function and normally we pass an object inside resolve
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});
promiseFour
  .then(function (user) {
    console.log(user);
    console.log("PromiseFour consumed");
    return user.username;
  })
  .then(function (username) {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("The promise is either resolved or rejected");
  });

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let success = true;
//       if (success) {
//         resolve("Data fetched successfully");
//       } else {
//         reject("Error fetching the data");
//       }
//     }, 3000);
//   });
// }

// //How to consume the promise

// /*Method 1*/
// let response = fetchData();
// console.log(response); //Promise { <pending> }

// //Method 2: Chaining of then

// fetchData()
//   .then((data) => {
//     console.log(data); //Data fetched successfully
//     return data.toLowerCase();
//   })
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => console.log(error));
