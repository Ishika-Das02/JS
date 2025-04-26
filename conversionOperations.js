let value = 3
let negValue = -value
// console.log(negValue); // output: -3
// console.log(value); // output: 3

// console.log(2+2); // output: 4
// console.log(2-2); // output: 0
// console.log(2*2); // output: 4
// console.log(2**3); // output: 8
// console.log(2/3); // output: 0.6666666666666666
// console.log(2%3); // output: 2

let str1 = "hello"
let str2 = " world"
// console.log(str1 + str2); // output: hello world

let str3 = str1 + str2
// console.log(str3);  // output: hello world
// console.log(str1 + 2); // output: hello2

// console.log("1" + 2); // output: 12 because of string concatenation, not addition
// console.log(1 + "2"); // output: 12 because of string concatenation, not addition
// console.log("1" + 2 + 2); // output: 122 because of string concatenation, not addition 
// console.log(1 + 2 + "2"); // output: 32 because of string concatenation, not addition
// console.log(1 + 2 + 3); // output: 6 because of addition, not string concatenation

// console.log( (3 + 4) * 5 % 3); // output: 2 because of operator precedence
// console.log(3 + 4 * 5 % 3); // output: 3 because of operator precedence

// console.log(+true); // output: 1 because true is converted to 1
// console.log(+false); // output: 0 because false is converted to 0
// console.log(+null); // output: 0 because null is converted to 0
// console.log(true+) // error: unexpected token
// console.log(+undefined); // output: NaN because undefined is converted to NaN
// console.log(true + false); // output: 1 because true is converted to 1 and false is converted to 0
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter; // 
console.log(gameCounter); // output: 101
// console.log(gameCounter++); // output: 101

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion