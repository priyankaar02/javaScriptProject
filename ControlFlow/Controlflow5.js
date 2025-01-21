//ForEach loop doesnt return any value and hence it cannot be stored in a variable as shown in the below example

const coding = ["JS", "HTML", "CSS", "REACT", "ANGULAR"]
const values = coding.forEach( (item) => {
    console.log(item);
    return item
})
console.log(values); //Output: undefined

//So when you want an operation to return a value and perform an operation on it use FILTER operation as shown below

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//Method 1
const result = myNums.filter( (nums) => nums > 4)
console.log(result); //Output: [ 5, 6, 7, 8, 9, 10 ]

//Method 2
const result2 = myNums.filter( (num) => {
    return num > 4;  //whenever you open a scope "{}" then it requires a RETURN keyword.Otherwise it returns an empty array
})
console.log(result2); //Output: [ 5, 6, 7, 8, 9, 10 ]

//Using forEach 

const newNums = []
myNums.forEach((num) => {
    if(num > 4) {
        newNums.push(num)
    }
})
console.log(newNums);

//Example of a book
const books = [
    {
        title: "Book one",
        genre: "Fiction",
        publish: 2008,
        edition: 2019
    },
    {
        title: "Book two",
        genre: "Non Fiction",
        publish: 2007,
        edition: 2020
    },
    {
        title: "Book three",
        genre: "Fiction",
        publish: 2018,
        edition: 2022
    },
    {
        title: "Book four",
        genre: "History",
        publish: 2020,
        edition: 2023
    },
    {
        title: "Book five",
        genre: "Science",
        publish: 2018,
        edition: 2020
    },
    {
        title: "Book six",
        genre: "History",
        publish: 2018,
        edition: 2022
    },
    {
        title: "Book seven",
        genre: "Science",
        publish: 2005,
        edition: 2020
    },
    {
        title: "Book eigth",
        genre: "Non fiction",
        publish: 2008,
        edition: 2020
    },
    {
        title: "Book nine",
        genre: "Science",
        publish: 2010,
        edition: 2022
    },
    {
        title: "Book ten",
        genre: "History",
        publish: 2012,
        edition: 2020
    }
]

//-------------print books with genre "History" ----------------------------

//const userBooks = books.filter((buk) => buk.genre === "History")
//console.log(userBooks);

//--------------------print books with publish date after 2019 and genre "History"------------------

const userBooks2 = books.filter((buk) => {
    return buk.publish >= 2019 && buk.genre === "History"
})
console.log(userBooks2);










