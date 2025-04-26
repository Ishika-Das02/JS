// let score=33
// let score="33"
// let score="33abc"
// let score=null
// let score=undefined
// let score=true
let score="Ishika"

// console.log(typeof score);  // output: string
// console.log(score); // output: Ishika
// console.log(typeof(score)); // output: string

let valueInNumber=Number(score);
// console.log(typeof valueInNumber); // output: number 
// console.log(valueInNumber); // output: NaN


// Conversion
// 33 => 33
// "33" => 33
// "33abc" => NaN
// true => 1  ,  false => 0

// let isLoggedIn=1
// let isLoggedIn=""
let isLoggedIn="Ishika"

let booleanIsLoggedIn=Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn) // output: true
// console.log(typeof booleanIsLoggedIn) // output: boolean

// 1 => true; 0 => false
// "" => false
// "Ishika" => true

let someNumber=33

let stringNumber=String(someNumber)
console.log(stringNumber) // stringNumber is a string now => output: "33"
console.log(typeof stringNumber) // stringNumber is a string now => output: "33"
console.log(someNumber) // someNumber is still a number => output: 33
console.log(typeof someNumber) // someNumber is a number now => output: 33