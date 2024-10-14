//ForEach loop doesnt return any value and hence it cannot be stored in a variable as shown in the below example

const coding = ["JS", "HTML", "CSS", "REACT", "ANGULAR"]
const val = coding.forEach( (item) => {
    console.log(item);
    return item
})
console.log(val); //Output: undefined
