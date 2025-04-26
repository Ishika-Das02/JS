const accountId=14453 // unchangeable
let accountEmail="ishika@google.com" // scope is block or global
var accountPassword="12345" // scope is function or global -> not recommended to use
accountCity="Jaipur"
let accountState; // undefined

// accountId=2 //not allowed

accountEmail="id@id.com"
accountPassword="212121"
accountCity="Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]) // table format for better readability