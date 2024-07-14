/* --------------- OBject Destructure ------------------ */

const course ={
  courseName: "Javascript Course",
  coursePrice: 1999,
  courseInstructor: "Prince Kumar",
  courseDuration: 12,
  courseValidation: "Unlimited",
  coursePlatform: "udemy"  
}


const {courseInstructor} = course

console.log(courseInstructor);

const {courseInstructor: instructor} = course
console.log(instructor);