// Array
// in JS array is an object, it is resizable, and it is dynamic in nature. It can hold different types of data. It is a collection of elements. It is a reference type (non-primitive) and it is stored in heap memory -> reference of the value is created. Therefore, if any changes are made in the copied variable ( stack ), it will affect the original variable.
// shallow copy -> copy of the reference is obtained i.e., if , if any changes are made in the copied variable ( stack ), it will affect the original variable. But if any changes are made in the reference variable ( heap ), it will affect the original variable. 
// deep copy -> copy of the value is obtained. i.e., if any changes are made in the copied variable ( stack ), it will not affect the original variable. But if any changes are made in the reference variable ( heap ), it will not affect the original variable.

const myArr=[0,1,2,3,4,5]; // elements can be of different types
const myHeroes=["Superman","Batman"];

const myAr2=new Array(1,2,3,4);
// console.log(myArr[0]);

// Array Methods

// myArr.push(6); // push() method adds one or more elements to the end of an array and returns the new length of the array. It is a mutating method, which means it changes the original array.
// console.log(myArr); // output: [ 0, 1, 2, 3, 4, 5, 6 ]
// myArr.pop(); // pop() method removes the last element from an array and returns that element. This method changes the length of the array. It is a mutating method, which means it changes the original array.
// myArr.push(7);
// myArr.pop();

// myArr.unshift(9); // unshift() method adds one or more elements to the beginning of an array and returns the new length of the array. It is a mutating method, which means it changes the original array.
// myArr.shift(); // shift() method removes the first element from an array and returns that element. This method changes the length of the array. It is a mutating method, which means it changes the original array.

// console.log(myArr.includes(9)); // includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate. It is a non-mutating method, which means it does not change the original array.
// console.log(myArr.indexOf(9)); // indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present. It is a non-mutating method, which means it does not change the original array.

// const newArr=myArr.join(); // join() method joins all elements of an array into a string. The elements are separated by a specified separator. If no separator is specified, the elements are separated by commas. It is a non-mutating method, which means it does not change the original array.
// console.log(myArr); // output: [ 0, 1, 2, 3, 4, 5 ]
// console.log(newArr); // output: 0,1,2,3,4,5 // join() method returns a string representation of the array. The elements are separated by a specified separator. If no separator is specified, the elements are separated by commas.

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr); // Array is converted to string

// slice, splice
// slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified. It is a non-mutating method, which means it does not change the original array.
// splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. It returns an array containing the deleted elements. If no elements are removed, an empty array is returned. It is a mutating method, which means it changes the original array.

console.log("A ", myArr); // original array

const myn1=myArr.slice(1,3); 

console.log(myn1); // slice returns a new array, original array is not modified
console.log("B ", myArr); 

const myn2=myArr.splice(1,3);
console.log("C ", myArr); // splice manipulates original array and returns the deleted elements
console.log(myn2); // deleted elements