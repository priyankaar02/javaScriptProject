/*----------FOR IN LOOP --------*/

//As seen before,for-of loop does not work on Objects. They cannot be iterated. Hence we use for-in loop for Objects

//Looping through Object
const myObject = {
    js: "Javascript",
    cpp: "c++",
    py: "python",
    rb: "ruby"
}

for (const key in myObject) {
    //console.log(key);
    //console.log(myObject[key]);
    //console.log(`${key} is the shortcut for ${myObject[key]}`);
}

//Looping through Array
const myArray = ["JS", "Ruby", "Python", "React"]
for (const key in myArray) {
   //console.log(key); //to print key
  // console.log(myArray[key]); //to print values
}

//Looping through MAP
const map = new Map()
map.set('IN', "INDIA")
map.set('USA', "UNITED STATES OF AMERICA")
map.set('FR', "FRANCE")

for (const key in map) {
 //  console.log(key);
}
//NOTE: For-in loop cannot be used for Map