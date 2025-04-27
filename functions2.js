// function calculateCartPrice(num1){ 
//     return num1;
// }

// console.log(calculateCartPrice(2)); //output -> 2
// console.log(calculateCartPrice(2,3)); //output -> 2 , it won't take 3 as it is not defined in the function .

function calculateCartPrice(val1,val2,...num1){ // ... is called rest or spread operator -> it is used to pass multiple arguments to a function // it is used to pass an array of arguments to a function // it is used to pass an object of arguments to a function // it is used to pass a string of arguments to a function // it is used to pass a number of arguments to a function // it is used to pass a boolean of arguments to a function // it is used to pass null of arguments to a function // it is used to pass undefined of arguments to a function
    return num1;
}

console.log(calculateCartPrice(200,300,400,500)); // output-- [ 400, 500 ] 
const user={
    username:"ishika",
    price:199
}

// handling object in a function
function handleObject(anyobject){  // passing object in a function
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user);

handleObject({ // passing object in a function directly
    username:"sam",
    price:399
})

const myNewArray=[200,400,100,600]

function returnSecondValue(getArray){ // passing an array in a function
    return getArray[1]
}

console.log(returnSecondValue(myNewArray)) // output -> 400
// passing array in a function directly
console.log(returnSecondValue([200,300,500,600])) // output -> 300