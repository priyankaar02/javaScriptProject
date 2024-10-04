/*----------Object Destructuring --------------------*/

const course = {
    courseName: "Javascript",
    price: "999",
    courseInstructor: "Sam"
}

console.log(course.courseInstructor); //method 1
console.log(course["courseInstructor"]); //method 2

//method 3
const {courseInstructor: Instructor} = course /*destructuring method, here courseInstructor is destructured as Instructor and now we can 
use just Instructor instead of courseInstructor to display the value */
console.log(Instructor);






