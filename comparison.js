// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// not allowed in typeScript
// console.log("2" > 1); // true because "2" is converted to number 2
// console.log("02" > 1); // true because "02" is converted to number 2

console.log(null > 0); // false because null is converted to 0
console.log(null == 0); // false because null is not equal to 0
console.log(null >= 0); // true because null is converted to 0

console.log(undefined == 0); // false because undefined is not equal to 0
console.log(undefined != 0); // true because undefined is not equal to 0
console.log(undefined > 0); // false because undefined is not greater than 0
console.log(undefined >= 0); // false because undefined is not greater than or equal to 0
console.log(undefined < 0); // false because undefined is not less than 0
console.log(undefined <= 0); // false because undefined is not less than or equal to 0

// === 

console.log("2" === 2); // false because "2" is a string and 2 is a number
console.log("2" !== 2); // true because "2" is a string and 2 is a number