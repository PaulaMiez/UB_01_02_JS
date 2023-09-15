// 2) Function that takes a name and an age as parameters and returns
// a greeting message like "Hello, [Name]! You are [Age] years old."

let myName;
let myAge

do {
    myName = (prompt("Please, enter your name:"))
} while (!isNaN(myName))

do {
    myAge = Number(prompt("Please, enter your age:"))
} while (isNaN(myAge))

function greetings(name,age) {
    alert(`Hello, ${name}! You are ${age} years old.`)
}

greetings(myName,myAge)