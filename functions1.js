// console.log("I");
// console.log("S");
// console.log("H");
// console.log("I");
// console.log("K");
// console.log("A");

function sayMyName() {
  console.log("I");
  console.log("S");
  console.log("H");
  console.log("I");
  console.log("K");
  console.log("A");
}

// sayMyName()
// sayMyName

// function add(n1,n2){ // parameters
//     console.log(n1+n2);
// }

// const result=add(5,6)

// console.log("Result: ",result); // output-- undefined

function add(n1,n2){ // parameters
    // let result=n1+n2;
    // return result;
    // console.log("Ishika"); // will not be printed as return is written already
    return n1 + n2;
}

const result=add(5,6)

// console.log("Result: ",result); 

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
console.log(loginUserMessage())


