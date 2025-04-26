// ++++++++++++++++++++++++++++++ NUms +++++++++++++++++++++++++++++++++++

const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString()); // type of balance is converted to string from number
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 123.8966;
// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000;
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString('en-IN'));
// console.log(Number.MAX_VALUE);

// +++++++++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++++++++++

// maths is a library in javascript

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.7));
// console.log(Math.ceil(4.7));
// console.log(Math.floor(4.7));
// console.log(Math.min(4,3,6,8));
// console.log(Math.max(4,3,6,8));

console.log(Math.random()); //Math.random() gives random values between 0 and 1 always
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
