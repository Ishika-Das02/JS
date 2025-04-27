// const tinderUser=new Object(); // singleton object 
const tinderUser = {}; // non-singleton object

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser); // { id: '123abc', name: 'Sammy', isLoggedIn: false }

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Ishika",
      lastname: "Das",
    },
  },
};

console.log(regularUser.fullname?.userfullname.firstname); // Ishika // ?. is optional chaining operator, // it checks if the property exists before accessing it

const obj1 = { 1: "a", 2: "b" }; // { 1: 'a', 2: 'b' }
const obj2 = { 3: "a", 4: "b" }; // { 3: 'a', 4: 'b' }

// const obj3={obj1,obj2} 
// const obj3=Object.assign({},obj1,obj2); 
// console.log(obj3); // { obj1: { 1: 'a', 2: 'b' }, obj2: { 3: 'a', 4: 'b' } } // this is not what we want // {} is used to create a new object // Object.assign() is used to copy the values of all enumerable own properties from one or more source objects to a target object // it returns the target object // it does not create a new object // it mutates the target object // it does not mutate the source objects
const obj3 = { ...obj1, ...obj2 };
console.log(obj3); // { 1: 'a', 2: 'b', 3: 'a', 4: 'b' } // this is what we want // ... is the spread operator // it is used to spread the values of an object into a new object // it creates a new object // it does not mutate the original object
// it is used to copy the values of all enumerable own properties from one or more source objects to a target object // it returns the target object // it does not create a new object // it mutates the target object // it does not mutate the source objects

// when objects come from database, they come in the form of array of objects
const users = [
  {
    id: 1,
    email: "y@gmail.com",
  },
  {
    id: 1,
    email: "i@gmail.com",
  },
];

users[1].email; 
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // ['id', 'name', 'isLoggedIn'] // it returns an array of the keys of the object // it does not return the values of the object // it does not return the entries of the object // it does not return the prototype of the object // it does not return the constructor of the object // it does not return the __proto__ of the object
console.log(Object.values(tinderUser)); // ['123abc', 'Sammy', false] // it returns an array of the values of the object // it does not return the keys of the object // it does not return the entries of the object // it does not return the prototype of the object // it does not return the constructor of the object // it does not return the __proto__ of the object
console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ] // it returns an array of the entries of the object // it does not return the keys of the object // it does not return the values of the object // it does not return the prototype of the object // it does not return the constructor of the object // it does not return the __proto__ of the object

console.log(tinderUser.hasOwnProperty("isLoggedIn")); // true // it checks if the object has the property // it does not check if the object has the value // it does not check if the object has the entry // it does not check if the object has the prototype // it does not check if the object has the constructor // it does not check if the object has the __proto__
console.log(tinderUser.hasOwnProperty("isLoggedIn1")); // false // it checks if the object has the property // it does not check if the object has the value // it does not check if the object has the entry // it does not check if the object has the prototype // it does not check if the object has the constructor // it does not check if the object has the __proto__
