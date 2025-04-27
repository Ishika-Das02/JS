// Stack (Primitive) -> copy of declared variable is obtained,  Heap (Non-Primitive) -> reference of the variable is obtained of original value. 
// Therefore, if any changes are made in the copied variable ( stack ), it will not affect the original variable. But if any changes are made in the reference variable ( heap ), it will affect the original variable.

let myName="ishikadasdotcom"

let anotherName=myName
anotherName="ishika"

console.log(myName); // myName is not changed because it is a primitive type (string) and it is stored in stack memory -> copy of the value is created. output: ishikadasdotcom
console.log(anotherName); // anotherName is changed because it is a primitive type (string) and it is stored in stack memory -> copy of the value is created. output: ishika
// console.log(myName === anotherName); // false because myName and anotherName are different values

let userOne={
    email: "user@google.com",
    upi: "user@ybl"
} // object is a reference type (non-primitive) and it is stored in heap memory -> reference of the value is created. Therefore, if any changes are made in the copied variable ( stack ), it will affect the original variable.
// console.log(userOne); // output: { email: 'user@google.com', upi: 'user@ybl' }
console.log(userOne);

let userTwo=userOne

userTwo.email="ishika@google.com"

console.log(userOne.email); // output: ishika@google.com
console.log(userTwo.email); // output: ishika@google.com 