let yourName = prompt("Please, enter your name:");
console.log(`${yourName} logged in!`);


let value1 = prompt("Please, enter the first value:");
let value2 = prompt("Please, enter the second value:");

alert(isNaN(value1) && isNaN(value2) ? `${value1} ${value2}` : Number(value1) + Number(value2));


let yourName2 = prompt("Please, enter your name:");
let date = prompt("Please, enter your date of birth:");

alert(`Name: ${yourName2}\nDate of birth: ${date}`);
