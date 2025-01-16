//-------------------Using MAP function ------------------------------------------------------

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums2 = myNumbers.map((nums) => {
    return nums + 2;
})

console.log(newNums2);
 
 //--------------------------- Chaining using MAP function ----------------------------------
const myNumb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNumb = myNumb
                .map((num) => num * 10)
                .map((num) => num + 1)
                .filter((num) => num >= 50)
console.log(newNumb);
