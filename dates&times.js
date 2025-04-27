// Dates

let myDate=new Date(); // Object or instance of date
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString()); // output: Sat Jan 14 2023 // toDateString() method returns a string representing the date portion of this date in the current locale and time zone. The format of the string is implementation-dependent, but it is typically in the form "Day Month Date Year".
// console.log(myDate.toLocaleString()); // output: 2023-01-14T12:00:00.000Z // toLocaleString() method returns a string with a language-sensitive representation of the date portion of this date in the current locale and time zone. The format of the string is implementation-dependent, but it is typically in the form "MM/DD/YYYY, HH:MM:SS AM/PM".
// console.log(typeof myDate); // output: object

// let myCreatedDate=new Date(2023,0,23); // (yyyy,m,dd)
// let myCreatedDate=new Date(2023,0,23,5,3); //(yyyy,m,dd,hh,min)
// let myCreatedDate=new Date("2023-01-14");
let myCreatedDate=new Date("01-14-2023"); // (mm-dd-yyyy)
console.log(myCreatedDate.toLocaleString());

let myTimeStamp=Date.now();

// console.log(myTimeStamp); // output in ms
// console.log(myCreatedDate.getTime());
console.log(Date.now());
// console.log(Date.now()/1000);
console.log(Math.floor(Date.now()/1000)); // in sec

let newDate=new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getMonth()+1);
console.log(newDate.getDay()); // starts from monday (1)

// `The day is ${newDate.getDay()}`

newDate.toLocaleString('default',{
    weekday:"long"
})
// object can be defined here. default portion-> time of which zone u want, then object