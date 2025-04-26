const myArr=[]
// %DebugPrint(myArr)

// In javascript Array is of two types
// continuous and holey array

// Optimization in javascript --- 
// SMI(Small Integer), Packed element, Double(float,string,function)

// things present in an array are called array elements

const arrTwo=[1,2,3,4,5]
// PACKED_SMI_ELEMENTS
// const arrTwo=[1,2,,4,5] // holey array

arrTwo.push(6.0)
//PACKED_DOUBLE_ELEMENTS

arrTwo.push('7')
// PACKED_ELEMENTS

arrTwo[10]=11
//HOLEY_ELEMENTS

console.log(arrTwo) ;
console.log(arrTwo.length);
console.log(arrTwo[9]);

//how array finds the value of a particular index ?

// bound check
// hasOwnProperty(arrTwo,9)
// hasOwnProperty(arrTwo.prototype,10)
// hasOwnProperty(Object.prototype,10)

// holes are very expensive in js

const arrThree=[1,2,3,4,5]
console.log(arrThree[2]) ;

// Optimization Degree
// SMI > DOUBLE > PACKED (FOR CONTINUOUS ARRAY)
// H_SMI > H_DOUBLE > H_PACKED (FOR HOLEY ARRAY)

const arrFour = new Array(3)
// just 3 holes, HOLEY_SMI_ELEMENTS
arrFour[0]='1'  // HOLEY_ELEMENTS
arrFour[1]='2'  // HOLEY_ELEMENTS
arrFour[2]='3'  // HOLEY_ELEMENTS

const arrFive=[]
arrFive.push('1')  //PACKED_ELEMENTS
arrFive.push('2')  //PACKED_ELEMENTS
arrFive.push('3')  //PACKED_ELEMENTS

const arrSix=[1,2,3,4,5]
// PACKED_SMI

arrSix.push(NaN)  // now it is converted into PACKED_DOUBLE and it can never be degraded to PACKED_SMI again
arrSix.push(infinity)  // now it is converted into PACKED_DOUBLE and it can never be degraded to PACKED_SMI again

// for, for-of, forEach