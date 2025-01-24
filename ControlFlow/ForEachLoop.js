//FOR-EACH LOOP
const coding = ["JS", "HTML", "CSS", "REACT", "ANGULAR"]

//CASE 1: Using normal function inside foreach
coding.forEach(function(item) {
    console.log(item);
})

//CASE 2=>Using arrow function
coding.forEach((item) => {
    console.log(item);
})

//CASE 3: We can pass a function for forEach
function printMe(item) {
    console.log(item);
}
coding.forEach(printMe)

//CASE 4: printing array value, array index and the whole array using forEach
coding.forEach((value, index, arr) => {
    console.log(value, index, arr);  
})

//IMPORTANT: Using forEach when there is Objects inside array [{}, {}, {}]
const myArray = [
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
    {
        languageName: "React",
        languageFileName: "jsx"
    }
]

myArray.forEach((item) => {
    //console.log(item.languageFileName);
    console.log(item.languageName);
})