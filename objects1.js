// there are two types of declaring objects
// 1. Like literals
// 2. Like constructors

// singleton object - object created through constructor
// object.create

// Object literals

const mySym = Symbol("key1");

const JsUser = {
  // object creation through literal
  name: "Ishika",
  "full name": "Ishika Das",
  // mySym: "myKey1", // here datatype of mySym is string
  [mySym]: "mykey1", // here datatype of mySym is symbol
  age: 21,
  location: "Barrackpore",
  email: "ishikadas@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "ishika@chatgpt.com";
// Object.freeze(JsUser); // make the key values constant so that no one can change it further
JsUser.email = "ishika@microsoft.com";
// console.log(JsUser);

// Functions in JS

JsUser.greeting = function () {
  console.log("Hello JS user");
};
JsUser.greetingTwo = function () {
    console.log(`Hello JS user, ${this.name}`);
  };

// console.log(JsUser.greeting); // compiler says undefined // also returns reference of the function
console.log(JsUser.greeting()) 
console.log(JsUser.greetingTwo()) 
