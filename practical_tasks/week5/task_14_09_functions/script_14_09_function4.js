// 4) Function that takes a number as a parameter and returns
// a new function. The returned function should take another number and return the sum of both numbers.

let myNumber;

do {
    myNumber = Number(prompt("Please, enter number 1:"))
} while (isNaN(myNumber))

function numbers(a) {
    do {
        number = Number(prompt("Please, enter number 2:"))
    } while (isNaN(number))

    function sumOfNumbers(b) {
        number += a;
        alert(`The result is ${number}`);
    }

    sumOfNumbers(number);
}

numbers(myNumber);