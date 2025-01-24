/*A Promise represents the eventual result of an asynchronous operation. It can be in one of three states:
Pending: The operation is still ongoing.
Fulfilled: The operation completed successfully.
Rejected: The operation failed. */

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve("Data fetched successfully");
      } else {
        reject("Error fetching the data");
      }
    }, 3000);
  });
}

//How to consume the promise

/*Method 1*/
let response = fetchData();
console.log(response); //Promise { <pending> }

//Method 2: Chaining of then

fetchData()
  .then((data) => {
    console.log(data); //Data fetched successfully
    return data.toLowerCase();
  })
  .then((value) => {
    console.log(value);
  })
  .catch((error) => console.log(error));
