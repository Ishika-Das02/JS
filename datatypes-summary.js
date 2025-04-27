//  on the basis of how data are stored in the memory and access those data, data is divided into 2 types -> Primitive, Non Primitive

// Primitive (Immutable)  // call by value

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt  // call by value

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null // value is not assigned yet -> empty value (not zero)
let userEmail;

const id = Symbol('123') // datatype Symbol -> unique identifier (not a string)
const anotherId = Symbol('123')

// console.log(id === anotherId); // false because both are unique identifiers

const bigNumber = 3456543576654356754n  // datatype BigInt. n is used to represent big numbers
// console.log(typeof bigNumber) // bigint


// Reference (Non primitive)

// Array, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Ishika",
    age: 21,
}

const myFunction = function(){
    // console.log("Hello world");
}

console.log(typeof heroes); // object
console.log(typeof myObj); // object
console.log(typeof anotherId); // symbol
// console.log(typeof myFunction); // function // function is a special type of object
// console.log(typeof null); // object // null is a special type of object
console.log(typeof bigNumber) // bigint // bigInt is a special type of number

const m = 345457645667778855431
console.log(typeof m) // number // number is a special type of object
// https://262.ecma-international.org/5.1/#sec-11.4.3