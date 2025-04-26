const user={
    username:"ishika",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); // gives empty node out of a block scope

// function chai(){
//     let username="ishika"
//     console.log(this);
//     console.log(this.username); // gives undefined
// }

// chai()

// const chai=function(){
//     let username="ishika"
//     console.log(this.username); 
// }

// chai()

// const chai=()=>{
//     let username="ishika"
//     console.log(this.username); 
// }

// chai()

// const addTwo=(num1,num2)=>{ // explicit return in arrow function
//     return num1+num2;
// }

// const addTwo=(num1,num2)=> num1+num2; // implicit return in arrow function
// const addTwo=(num1,num2)=> (num1+num2); 
const addTwo=(num1,num2)=> ({username:"ishika"}); 


console.log(addTwo(1,2));


