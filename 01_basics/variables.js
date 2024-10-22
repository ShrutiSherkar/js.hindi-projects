const accountId=144553
let accountEmail="abc@gmail.com"
var accountPassword="12345"
accountCity="satara"
let accountState;

//accountId=2 // not allowed
accountEmail="cde@gmail.com"
accountPassword="1234567"
accountCity="pune"

console.log(accountId);
// dont use var because it give scope issue
console.table([accountId,accountEmail,accountPassword,accountCity,accountState
])