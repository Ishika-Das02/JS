function one(){
    const username = "ishika";

    function two(){
        const website="youtube"
        console.log(username);
    }

    // console.log(website); // error due to out of scope

    two();
}

// one();

if(true){
    const username = "ishika";
    if(username==="ishika"){
        const website = "youtube";
        // console.log(username+" "+website);
    }
    // console.log(website); // scope error

}

// console.log(username); // scope error

// +++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++++

console.log(addOne(6));

function addOne(num){
    return num+1
}

addOne(5)

// addTwo(6) // error

const addTwo = function(num){
    return num+2
}

addTwo(5)