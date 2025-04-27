// console.log("I");
// console.log("S");
// console.log("H");
// console.log("I");
// console.log("K");
// console.log("A");

// function is used to define a block of code that can be called by its name.
function sayMyName() {
  console.log("I");
  console.log("S");
  console.log("H");
  console.log("I");
  console.log("K");
  console.log("A");
}

// sayMyName() // execution of the function
// sayMyName // reference of the function without calling it // it will not execute the function // it will just return the reference of the function // it will not return the value of the function // it will not return the output of the function // it will not return the result of the function // it will not return the arguments of the function // it will not return the parameters of the function

// function add(n1,n2){ // parameters // types are not mandatory to be mentioned in js.
//     console.log(n1+n2);
// }

// const result=add(5,6) // arguments // it will not return the value of the function // it will not return the output of the function // it will not return the result of the function // it will not return the arguments of the function // it will not return the parameters of the function

// console.log("Result: ",result); // output-- undefined // value of the result is undefined // it will not return the value of the function // it will not return the output of the function // it will not return the result of the function // it will not return the arguments of the function // it will not return the parameters of the function

function add(n1,n2){ // parameters
    // let result=n1+n2;
    // return result;
    // console.log("Ishika"); // will not be printed as return is written already
    return n1 + n2;
}

const result=add(5,6)

// console.log("Result: ",result); // output-- 11 // value of the result is 11 // it will return the value of the function // it will return the output of the function // it will return the result of the function // it will return the arguments of the function // it will return the parameters of the function

// add(3,4); // arguments
// add(3,"4");
// add(3,"a");
// add(3,null);

// function loginUserMessage(username="sam"){ // default value will be shown in the output when no username is given
function loginUserMessage(username){
    // if(username===undefined){
    if(!username){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Ishika"))
console.log(loginUserMessage()) // output-- Please enter a username // it will not return the value of the function // it will not return the output of the function // it will not return the result of the function // it will not return the arguments of the function // it will not return the parameters of the function


