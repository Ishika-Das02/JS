"use strict"; // treat all JS code as newer version

// alert(3+3) // we are using nodejs, not browser

console.log(3 + 3); // code readability should be high

console.log("Ishika");

let name = "Ishika";
let age = 21;
let isLoggedIn = false;
let state = null;

// number=> 2 to the power 53 (range of number)
// bigint => 2 to the power 53 (range of number) + 1
// string=> " " or ' ' or ` `
// template literals => ` `
// boolean=> true/false 
// null=> standalone value -> absence of value(empty value), not undefined
// undefined=> not initialized, not assigned, not declared
// symbol=> unique value, not used in day to day programming

//object => collection of key value pairs

console.log(typeof "Ishika")
console.log(typeof age)
console.log(typeof null) //object // null is a primitive value, but typeof null returns "object" due to a bug in JavaScript's implementation. This is a well-known quirk of the language.
console.log(typeof isLoggedIn) //boolean
console.log(typeof undefined) //undefined

