const name="Ishika"
const repoCount=1

// console.log(name+repoCount+" Value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName=new String("Ishika-ish-com") // here String is an object // output is in form of key: value i.e., 0: I  1: s and so on.

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase()); // in this case, it doesn't change the original value of the string (stack and heap concept)
console.log(gameName.charAt(2)); 
console.log(gameName.indexOf('h')); 

const newString=gameName.substring(0,4)
console.log(newString);

const anotherString=gameName.slice(-8,4)
console.log(anotherString);

const newStringOne="    Ishika    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://ishika.com/ishika%20das"

console.log(url.replace('%20','-'))

console.log(url.includes('ishika'))

console.log(gameName.split('-'));