const marvel_heroes=["thor","Ironman","spiderman"] // array of strings
const dc_heroes=["superman","flash","batman"] // another array of strings

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes); // output: [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ] // push() method adds one or more elements to the end of an array and returns the new length of the array. It is a mutating method, which means it changes the original array.
// console.log(marvel_heroes[3][1]); // output: flash // accessing the element of the nested array

// const allHeroes = marvel_heroes.concat(dc_heroes) // concat returns a new array
// console.log(allHeroes); // output: [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ] // concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

const all_new_heroes=[...marvel_heroes, ...dc_heroes] // spread -> spread operator is used to unpack the elements of an array or object. It is a non-mutating method, which means it does not change the original array.


// console.log(all_new_heroes); // output: [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ] // spread operator is used to unpack the elements of an array or object. It is a non-mutating method, which means it does not change the original array. It makes the elements of the array or object available as individual elements. It is used to unpack the elements of an array or object into a new array or object.

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]] // another array of numbers // nested array

const real_another_array=another_array.flat(Infinity) // flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth. The default depth is 1. If no depth is specified, the method flattens the array to a depth of 1. If Infinity is specified, the method flattens the array to a depth of Infinity. It is a non-mutating method, which means it does not change the original array.
console.log(real_another_array); // output: [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ] 

console.log(Array.isArray("Ishika")) // output: false // isArray() method returns true if the value is an array, otherwise false. It is a static method of the Array object, which means it can be called on the Array class itself, rather than on an instance of the class.
console.log(Array.from("Ishika")) // output: [ 'I', 's', 'h', 'i', 'k', 'a' ] // from() method creates a new, shallow-copied Array instance from an array-like or iterable object. It is a static method of the Array object, which means it can be called on the Array class itself, rather than on an instance of the class.
console.log(Array.from({name: "Ishika"})) // Interesting // output: [] (empty array) 
// to get an array, we have to specify the array should be created with the keys or the values of the object
console.log(Array.from({name: "Ishika"},(value,key)=>[key,value])) // output: [ [ 'name', 'Ishika' ] ] // from() method creates a new, shallow-copied Array instance from an array-like or iterable object. It is a static method of the Array object, which means it can be called on the Array class itself, rather than on an instance of the class. The second argument is a map function that is called on every element of the array. The map function takes two arguments: the value and the index of the element. The map function returns an array of arrays, where each inner array contains the key and value of the object.

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3)); // output: [ 100, 200, 300 ] // of() method creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments. It is a static method of the Array object, which means it can be called on the Array class itself, rather than on an instance of the class.