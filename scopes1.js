// let a=10;
// const b=20;
// var c=30;

// var c=300
let a=300 // global scope

if(true){
    let a=10; // block scope
    const b=20;
    // var c=30;
    console.log("INNER: ",a);
}

for(let i=0;i<Array.length;i++){
    const element=array[i];
}


console.log(a);
// console.log(b);
// console.log(c);