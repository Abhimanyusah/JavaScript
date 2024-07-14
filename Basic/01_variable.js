const accountId = 123
let accountEmail = "abhi@gmail.com"
var accountPassword = "12345"
accountCity = "Noida"
let accountState;

// accountId = 2 // not allowed


accountEmail = "Abhimanyu@gmail.com"
accountPassword = "21212121"
accountCity = "Bihar"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])