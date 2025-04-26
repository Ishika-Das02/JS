// function calculateCartPrice(num1){
//     return num1;
// }

// console.log(calculateCartPrice(2));

function calculateCartPrice(val1,val2,...num1){ // ... is called rest or spread operator
    return num1;
}

console.log(calculateCartPrice(200,300,400,500));

const user={
    username:"ishika",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user);

handleObject({ // passing object in a function
    username:"sam",
    price:399
})

const myNewArray=[200,400,100,600]

function returnSecondValue(getArray){ // passing an array in a function
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,300,500,600]))