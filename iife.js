// Immediately Invoked Function Expressions (IIFE)

(function chai(){    // named iife
    console.log("DB CONNECTED");
})();

// use of IIFE -- to avoid the pollution due to global scope variables

(function aurcode(){   // named iife
    console.log(`DB CONNECTED TWO`);
})();

(()=>{
    console.log(`DB CONNECTED THREE`);
})();

((name)=>{
    console.log(`DB CONNECTED FOUR ${name}`);
})('ishika');