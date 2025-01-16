/*Question 1
Write a `while` loop that calculates the sum of numbers from 1 to 5 and stores the result in a variable named `sum`.
*/

let sum = 0;
let i = 1
while(i <= 5) {
  sum += i;
  i++;
}
console.log(sum); //15

/*Question 2
Write a `while` loop that counts down from 5 to 1 and stores the result in an array named `countdown`.
*/

let countdown = [];
let j=5;
while(j >= 1) {
  countdown.push(j);
  j--;
}
console.log(countdown); //[5,4,3,2,1]

/*Question 3
Write a `do while` loop that prompts the user to enter their favourite tea types until they enter `"stop"`. Store each teattype in an array named `teaCollection`.
*/

let teaCollection = []
let tea
do {
  tea = prompt(`Enter your favourite tea (type "stop" to finish)`)

  if(tea !== "stop") {
    teaCollection.push(tea)
  }
}  while(tea !== "stop")

/*Question 4
Write a `do while` loop that adds numbers from 1 to 3. Store the result in the variable named `total`.
*/

let total = 0;
let k = 1;
do {
  total += k;
  k++;
} while (k <= 3)

/*Question 5
Write a `for` loop that multiplies each element in the array `[2, 4, 6]` by 2 and stores the result in a new array named `multipliedNumbers`
*/

let multipliedNumbers = []
let numbers = [2, 4, 6]

for(let l=0; l < numbers.length; i++) {
  multipliedNumbers.push(numbers[l] * 2);
}
console.log(multipliedNumbers);

/*Question 6
Write a `for` loop that lists all the cities in the array `["Paris", "New York", "Tokyo", "London"]` and stores each city in a new array named `cityList`
*/

let cities = ["Paris", "New York", "Tokyo", "London"]
let cityList = []
for(let c=0; c < cities.length; c++) {
  const myCity = citites[c];
  cityList.push(myCity);
}
console.log(cityList)

/*Question 7: Use of BREAK keyword
Write a `for` loop that loops through the array `["Paris", "New York", "Tokyo", "London"]` and stops when it find `"Tokyo"`. Store all citites before `"Tokyo"` in a new array named `citiesList`
*/

let newCities = ["Paris", "New York", "Tokyo", "London"]
let citiesList = []

for(let d=0; d < newCities.length; d++) {
  if(newCities[d] === "Tokyo") {
    break;
  }
  citiesList.push(newCities[d])
}
console.log(citiesList); 

/*Question 8: Use of CONTINUE keyword
Write a `for` loop that loops through the array `["London", "New York", "Paris", "Berlin"]` and skips when it find `"Paris"`. Store all the other cities in a new array named `visitedCitites`
*/

let listCities = ["London", "New York", "Paris", "Berlin"]
let visitedCitites = []

for(let e=0; e < listCities.length; e++) {
  if(listCities[e] === "Paris") {
    continue;
  }
  visitedCitites.push(listCities[e])
}
console.log(visitedCitites); 

/*Question 9: 
Write a `for-of` loop that iterates through the array `[1, 2, 3, 4, 5]` and skips when it find `4`. Store all numbers before `4` in a new array named `smallNumbers`
*/

let newNumbers = [1, 2 ,3, 4, 5];
let smallNumbers = []

for(let num of newNumbers) {
  if(num === 4) {
    break;
  }
  smallNumbers.push(num)
}
console.log(smallNumbers)

/*Question 10: 
Write a `for-of` loop that iterates through the array `["Paris", "New York", "Tokyo", "London"]` and skips when it finds `"New York"`. Store all other citites in a new array named `preferredCities`
*/

let currentCities = ["Paris", "New York", "Tokyo", "London"];
let preferredCities = []

for(let fav of currentCities) {
  if(fav === "New York") {
    continue;
  }
  console.log(`favourite citites are ${fav}`)
  preferredCities.push(fav)
}
console.log(preferredCities)

/*Question 11: 
Write a `for-in` loop that iterates through an object containing city populations and stops when it finds `"Berlin"`. Store all other previous cities in a new object named `cityNewPopulation`
let citiesPopulation = {
"London": 890000,
"New York": 840000,
"Paris": 220000,
"Berlin": 350000
};
*/
//Here we are comparing the keys of an object
let cityPopulation = {
"Paris": 220000,
"London": 890000,
"Berlin": 350000,
"New York": 840000
};

let cityNewPopulation = {}
for(let citypop in cityPopulation) {
  if(citypop === "Berlin") {
    break;
  } 
  cityNewPopulation[citypop] = cityPopulation[citypop];
}
console.log(cityNewPopulation)

/*Question 12: 
Write a `for-in` loop that iterates through an object containing city populations and skips any city with a population below 3 million. Store all other cities in a new object named `worldNewCities`
let worldCities = {
"Syney": 500000,
"Tokyo": 900000,
"Paris": 220000,
"Berlin": 350000
};
*/
//Here we must compare the values of an object
let worldCities = {
"Syney": 500000,
"Tokyo": 900000,
"Paris": 220000,
"Berlin": 350000
};
let worldNewCities = {}

for(let lesspop in worldCities) {
  if(worldCities[lesspop] < 300000) {
    continue;
  }
  worldNewCities[lesspop] = worldCities[lesspop]
}
console.log(worldNewCities)

/*Question 13: 
Write a `forEach` loop that iterates through an array `["Paris", "New York", "Tokyo", "London"]` and stop the loop when it finds `"Tokyo"`. Store all the previous cities before `"Tokyo"` in a new array named `bucketListNewCity`
NOTE: Break and Continue cannot be used inside a function. Works only inside loops. So you must use RETURN keyword
*/

let bucketListCity = ["Paris", "New York", "Tokyo", "London"]
let bucketListNewCity = []

bucketListCity.forEach((city) => {
  if(city === "Tokyo") {
    return
  }
  bucketListNewCity.push(city)
  
});
console.log(bucketListNewCity)

/*Question 14: 
Write a `forEach` loop that iterates through an array `["Berlin", "Sydney", "Tokyo", "Paris"]` and skip the loop when it finds `"Sydney"`. Store all the other cities in a new array named `traveledNewCities`
NOTE: Break and Continue cannot be used inside a function. Works only inside loops. So you must use RETURN keyword
*/

let traveledCities = ["Berlin", "Sydney", "Tokyo", "Paris"]
let traveledNewCities = [];

traveledCities.forEach((city) => {
  if(city === "Sydney") {
    return;
  }
  traveledNewCities.push(city)
})
console.log(traveledNewCities)

/*Question 15: 
Write a `forEach` loop that iterates through an array `[2, 5, 7, 9]` and skip the loop when it finds `7` and multiply the rest by 2. Store all the other numbers in a new array named `doubledNewNumbers  `
NOTE: Break and Continue cannot be used inside a function. Works only inside loops. So you must use RETURN keyword inside forEach loop
*/

let doubledNumbers = [2, 5, 7, 9];
let doubledNewNumbers = []

doubledNumbers.forEach((numb) => {
  if(numb === 7) {
    return;
  }
  
  doubledNewNumbers.push(numb*2);
});
console.log(doubledNewNumbers)

//Using normal for loop
let myNumbers = [2, 5, 7, 9];
let myNewNumbers = []

for(let i=0; i< myNumbers.length; i++){
  if(myNumbers[i] === 7) {
    continue;
  }
  
  myNewNumbers.push(myNumbers[i]*2);
}
console.log(myNewNumbers)


/*Question 15: 
Use a `for-of` loop that iterates through an array `["Paris", "New York", "Tokyo", "London", "Sydney", "Vancoever"]` and stop when the length of the city name greater than 5. Store all the other cities in a new array named `shortNewCities`
*/

let shortCities = ["Paris city", "Tokyo city", "London city", "Sydney city", "Vancoever city"];
let shortNewCities = [];

for(let city of shortCities) {
  console.log(`Value of city now ${city.length}`);
  if(city.length > 10) {
    break;
  }
  shortNewCities.push(city)
}
console.log(shortNewCities);

/*Question 16: Count Vowels in a String
Write a function countVowels(str) that returns the number of vowels (in both lower & uppercase) in the given string str.
*/

function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
const inputString = "Hello World";
const vowelCount = countVowels(inputString);
console.log(vowelCount); // Output: 3
