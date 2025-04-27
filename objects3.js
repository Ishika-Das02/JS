// Object de-structure -> it is used to extract the values of the object into variables // it does not mutate the original object // it does not create a new object // it does not copy the values of the object into a new object // it does not copy the keys of the object into a new object // it does not copy the entries of the object into a new object // it does not copy the prototype of the object into a new object // it does not copy the constructor of the object into a new object // it does not copy the __proto__ of the object into a new object

const course = {
  courseName: "javascript",
  price: "999",
  courseInstructor: "Ishika",
};

// course.courseInstructor 

// const {courseInstructor}=course // here courseInstructor value will be extracted from course object and assigned to courseInstructor variable
const {courseInstructor:instructor}=course // courseInstructor will be called as instructor only

// console.log(courseInstructor); 
console.log(instructor); // output: Ishika

// json (javascript object notation)- used for api, api is used to send and receive data from server, it is a lightweight data interchange format, it is easy for humans to read and write, it is easy for machines to parse and generate, it is language independent, it is based on a subset of the javascript programming language, it is a text format that is completely language independent but uses conventions that are familiar to programmers of the C family of languages, which includes C, C++, C#, Java, JavaScript, Perl, Python, and many others. These properties make JSON an ideal data interchange language.

// keys-> string, values-> string, number, boolean, null, array, object
// {
//     "name":"ishika",
//     "coursename":"js in hindi",
//     "price":"free"
// }

// apis can also be found in the form of array of objects
[
    {},
    {},
    {}
]