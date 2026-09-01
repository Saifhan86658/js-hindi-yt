//The major difference between data types is how the value is stored/handled:
// javascript is dynamically typed language
// primitive

// 7 types : string,Number, Boolean, Null , NaN , Undefined, symbol,BigInt

const score= 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id= Symbol('123')
const anotherId = Symbol('123')

console.log( id === anotherId)

const BigNumber = 23484783283748327948n
// Reference type also known as non primitive data types

// Array , Objects, Functions

const heros = ["shaktiman","naagraj","doga"]
let myObj = {
    name: "saif",
    age: 22,
}

const myfunction = function(){
    console.log(" Hello World")
}

console.log(typeof heros);