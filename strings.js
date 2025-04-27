const name="Ishika"
const repoCount=1

// console.log(name+repoCount+" Value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`) // string interpolation (template literals) // backticks are used to create template literals

const gameName=new String("Ishika-ish-com") // here String is an object // output is in form of key: value i.e., 0: I  1: s and so on.

console.log(gameName[0]); //output: I
console.log(gameName.__proto__); // output: String {} // prototype of the string object

console.log(gameName.length);
console.log(gameName.toUpperCase()); // in this case, it doesn't change the original value of the string (stack and heap concept), because string is a primitive type (stack) and it is stored in stack memory -> copy of the value is created. Therefore, if any changes are made in the copied variable ( stack ), it will not affect the original variable.
console.log(gameName.charAt(2));  // output: h // charAt() method returns the character at the specified index in a string. The index starts at 0, so the first character is at index 0, the second character is at index 1, and so on.
console.log(gameName.indexOf('h')); // output: 2 // indexOf() method returns the index of the first occurrence of a specified value in a string. If the value is not found, it returns -1.
console.log(gameName.lastIndexOf('h')); // output: 2 // lastIndexOf() method returns the index of the last occurrence of a specified value in a string. If the value is not found, it returns -1.

const newString=gameName.substring(0,4)
console.log(newString); // output: Ishi

const anotherString=gameName.slice(-8,4)
console.log(anotherString); 

const newStringOne="    Ishika    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://ishika.com/ishika%20das"

console.log(url.replace('%20','-')) // output: https://ishika.com/ishika-das // replace() method replaces the first occurrence of a specified value in a string with another value. If the value is not found, it returns the original string.

console.log(url.includes('ishika')) // output: true // includes() method returns true if a specified value is found in a string, otherwise it returns false.

console.log(gameName.split('-')); // output: [ 'Ishika', 'ish', 'com' ] // split() method splits a string into an array of substrings based on a specified separator. The separator can be a string or a regular expression. If no separator is specified, the entire string is returned as a single element array.
console.log(gameName.split('')); // output: [ 'I', 's', 'h', 'i', 'k', 'a', '-', 'i', 's', 'h', '-', 'c', 'o', 'm' ] // split() method splits a string into an array of substrings based on a specified separator. The separator can be a string or a regular expression. If no separator is specified, the entire string is returned as a single element array.