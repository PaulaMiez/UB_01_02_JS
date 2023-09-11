let value1 = prompt("Please, enter the first number :");
if (isNaN(value1)) 
    console.error("You must enter a number!");


let value2 = prompt("Please, enter the first number :");
if (isNaN(value2)) 
    console.error("You must enter a number!");



let operation = (prompt("Please, enter an operation(+, -, /, *, %, **): "));

if (operation == "+") {
    let result = Number(value1) + Number(value2); 
    alert(`The result is: ${value1} + ${value2} = ${result}`);
}
else if (operation == "-") {
    let result = Number(value1) - Number(value2); 
    alert(`The result is: ${value1} - ${value2} = ${result}`);
}
else if (operation == "/"){
    let result = Number(value1) / Number(value2); 
    alert(`The result is: ${value1} / ${value2} = ${result}`);
}
else if (operation == "*") {
    let result = Number(value1) * Number(value2); 
    alert(`The result is: ${value1} * ${value2} = ${result}`);
}
else if (operation == "%"){
    let result = Number(value1) % Number(value2); 
    alert(`The result is: ${value1} % ${value2} = ${result}`);
}
else if (operation == "**") {
    let result = Number(value1) ** Number(value2); 
    alert(`The result is: ${value1} ** ${value2} = ${result}`);
}
else 
console.error("You must enter an operation!");