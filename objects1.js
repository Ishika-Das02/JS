// there are two types of declaring objects
// 1. Like literals -> object created through object literal notation, i.e., using curly braces {}. It is a non-primitive data type. It is a collection of key-value pairs. The keys are strings and the values can be of any data type. It is a reference type (non-primitive) and it is stored in heap memory -> reference of the value is created. Therefore, if any changes are made in the copied variable ( stack ), it will affect the original variable. But if any changes are made in the reference variable ( heap ), it will affect the original variable.
// 2. Like constructors -> object created through constructor function, i.e., using the new keyword. It is a non-primitive data type. It is a collection of key-value pairs. The keys are strings and the values can be of any data type. It is a reference type (non-primitive) and it is stored in heap memory -> reference of the value is created. Therefore, if any changes are made in the copied variable ( stack ), it will affect the original variable. But if any changes are made in the reference variable ( heap ), it will affect the original variable.
// 3. Object.create() -> object created through object.create() method. It is a non-primitive data type. It is a collection of key-value pairs. The keys are strings and the values can be of any data type. It is a reference type (non-primitive) and it is stored in heap memory -> reference of the value is created. Therefore, if any changes are made in the copied variable ( stack ), it will affect the original variable. But if any changes are made in the reference variable ( heap ), it will affect the original variable.

// singleton object - object created through constructor
// object.create

// Object literals

const mySym = Symbol("key1"); 

const JsUser = {
  // object creation through literal
  name: "Ishika",
  "full name": "Ishika Das", // here full name is a string, so we have to use quotes to access it, we cannot use dot notation to access it
  // mySym: "myKey1", // here datatype of mySym is string
  [mySym]: "mykey1", // here datatype of mySym is symbol
  age: 21,
  location: "Barrackpore",
  email: "ishikadas@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(JsUser.email) // output: ishikadas@google.com
// console.log(JsUser["email"]) // output: ishikadas@google.com
// console.log(JsUser["full name"])
// console.log(JsUser[mySym]) // output: mykey1 // here datatype of mySym is symbol
// console.log(JsUser.mySym); // output: undefined // here datatype of mySym is string
JsUser.email = "ishika@chatgpt.com"; // changing the value of email property
// Object.freeze(JsUser); // make the key values constant so that no one can change it further
JsUser.email = "ishika@microsoft.com"; // won't change the value of email property because Object.freeze() method is used to freeze an object. A frozen object can no longer be changed. It prevents new properties from being added to it and marks all existing properties as read-only. In other words, it makes the object immutable. The Object.freeze() method returns the same object that was passed in, so you can use it as a method chain. It is a non-mutating method, which means it does not change the original object.
// console.log(JsUser);

// Functions in JS

JsUser.greeting = function () {
  console.log("Hello JS user");
};
JsUser.greetingTwo = function () {
    console.log(`Hello JS user, ${this.name}`); // here this refers to the object JsUser, so we can access the properties of the object using this keyword. It is a non-mutating method, which means it does not change the original object.
  };

// console.log(JsUser.greeting); // compiler says undefined // also returns reference of the function, not the value of the function. scope of the function is global scope, so it can be accessed from anywhere in the code. It is a non-mutating method, which means it does not change the original object.

console.log(JsUser.greeting()) // output: Hello JS user // function is called and it returns the value of the function. It is a non-mutating method, which means it does not change the original object.
console.log(JsUser.greetingTwo()) // output: Hello JS user, Ishika // function is called and it returns the value of the function. It is a non-mutating method, which means it does not change the original object.
