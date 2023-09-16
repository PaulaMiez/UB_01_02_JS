// 6) Function that attempts to divide two numbers.
// Handle potential errors such as division by zero and log appropriate error messages.

let number1;
let number2;

do {
    number1 = Number(prompt("Please, enter number 1:"))
} while (isNaN(number1))

do {
    number2 = Number(prompt("Please, enter number 2:"))
} while (isNaN(number2))

function division(a,b) {
    if (a != 0 && b !=0) {
       result = a / b;
       alert(`The result is ${result}!`);
    }
    else {
        alert("Dividing by zero is not possible!")
    }
}

division(number1,number2);