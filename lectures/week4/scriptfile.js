//### Ternary if-else
// let value1 = prompt("Enter value 1");
// let value2 = prompt("Enter value 2");

// //let result = value1.toLowerCase() == value2.toLowerCase() ? "Both inputs are the same" : "Inputs are different";\

// let result;

// //if ((value1.toLowerCase() == value2.toLowerCase()) == true) { // A == true --> A

// if (value1.toLowerCase() == value2.toLowerCase()) 
// //{ --> not mandatory to use braces if there is only one line of code
//     //line1
//     //line2
//     //line3
//     result = "Both inputs are the same";
// //}
// else {
//     result = "Inputs are different";
// }
// alert(result)

// let result = express ? result_true : result_false ---> let result; if(express) {result = result_true} else {result = result_false}


//#### Number comperison ####
// let value1 = prompt("Enter number 1");
// alert(typeof(value1)) ---> the value will be typed as string

// let value1 = +prompt("Enter number 1");
// if (isNaN(value1)) {
//     alert("The value provided is wrong");
// }
// else {
//     // let value2 = prompt("Enter value 2");
//     let value2 = +prompt("Enter value 2");
//     if (isNaN(value2)) {
//         alert("The value provided is wrong");
//     } else {
//         // let value1_num = Number(value1);
//         // let value2_num = Number(value2);
//         // if (value1_num > value2_num)
//         if (value1 > value2)
//             console.log("Value 1 is greater than value 2");
//         // else if (value2_num > value1_num)
//         else if (value2 > value1)
//             console.log("Value 2 is greater than value 1");
//         else
//         console.log("Both values are the same");
//     }
// }

//##### Logical combinations when building branches

// expr1 && expr2 ---> true && true, return true, the rest pf combinations return false

// let value1 = Number(prompt("Enter value 1"));
// let value2 = Number(prompt("Enter value 2"));

// if (!isNaN(value1) && !isNaN(value2) && value1 > value2)
//     console.log("Value 1 is greater than value 2")

// else if (!isNaN(value1) && !isNaN(value2) && value1 < value2)
//     console.log("Value 2 is greater than value 1")

// else if (!isNaN(value1) && !isNaN(value2) && value1 == value2)
//     console.log("Both values are the same")

// // else if (isNaN(value1) && !isNaN(value2))
// //     console.log("Value 1 is not a number")

// // else if (!isNaN(value1) && isNaN(value2))
// //     console.log("Value 2 is not a number")

// // else if (isNaN(value1) && isNaN(value2))
// //     console.log("Both inputs are not numbers")

// else if(isNaN(value1) || isNaN(value2))
// console.log("One of the values is not a number")


// ### De Morgen's Laws
// expr1 is true/false and expr2 is true/false then

/// !(expr1 || expr1) always results in the same as 
/// !expr1 && !expr2

/// expr1,2,3,4... are true/false then 
/// !(expr1 || expr2 || expr3... || expr_n) are the same as
/// !expr1 && !expr && !expr3... && !expr_n

/// expr1,2,3,4... are true/false then 
/// !(expr1 && expr2 && expr3... & expr_n) are the same as
/// !expr1 || !expr || !expr3... || !expr_n

/// if(something && something_else && something_else2){...}

// let age = Number(prompt("Enter age:"));
// let salary = Number(prompt("Enter salary:"));
// let debt = Number(prompt("Enter your debt:"));

// let loan_amount = Number(prompt("Enter the amount of loan you need:"))

// let max_loan_avb = salary * 20;

// //if (!(age > 17 && debt == 0 && loan_amount < max_loan_avb)) {
// if (!(age > 17) || !(debt == 0) || !(loan_amount < max_loan_avb)) {
//     alert("You can't take a loan")
// }
// else {
//     console.log("Loan succesfuly registered!")
// }

/// Example

// if (
//    (!isNaN(value1) && !isNaN(value2)) && value1 > value2) same would be
// if (
//    (!isNaN(value1) && !isNaN(value2)) && !(value1 <= value2)) ---> 
//    (!(isNaN(value1) || isNaN(value2)) || (value1 <= value2))


// let month = prompt("Enter the month as number 1 - 12:");

// switch (month) {
//     case '1':
//         alert("January");
//         break;
//     case '2':
//         alert("February");
//         break;
//     case '3':
//         alert("March");
//         break;
//     case '4':
//         alert("April");
//         break;
//     case '5':
//         alert("May");
//         break;
//     case '6':
//         alert("June");
//         break;
//     case '7':
//         alert("July");
//         break;
//     case '8':
//         alert("August");
//         break;
//     case '9':
//         alert("September");
//         break;
//     case '10':
//         alert("October");
//         break;
//     case '11':
//         alert("November");
//         break;
//     case '12':
//         alert("December");
//         break;
//     default:
//         alert("Such month does not exist!")
// }


// let month = prompt("Enter the month as number 1 - 12:");

// switch (month) {
//     case '1':
//     case '2':
//     case '12':
//         alert("Winter");
//         break;
//     case '3':
//     case '4':
//     case '5':
//         alert("Spring");
//         break;
//     case '6':
//     case '7':
//     case '8':
//         alert("Summer");
//         break;
//     case '9':
//     case '10':
//     case '11':
//         alert("Autumn");
//         break;
//     default:
//         alert("Such month does not exist!")
// }




// for(let i = 0; i < 5; i++) { // executed as 1, 2, 3, 4
//     console.log(i);
// }

// for(let i = 0; i > 5; i++) { // Do not execute at all
//     console.log(i);
// }

// for(let i = 0; i > -1; i++) { // Lopp is infinite
//     console.log(i);
// }

// let i = Number(prompt("Enter the number:"))
// for(i; i < 10; i++) { //declared i in the prompt
//     console.log(i);
// }


// for (; ;) { // Infinite Lopp
// }

// for (; true;) { // Infinite Lopp
// }


// let no_times = Number(prompt("Enter the number"))
// let i = 0;

// for (; ;) { // Infinite Lopp
//     if (i < no_times) {
//         alert("Hello");
//         i++;
//     }
//     else
//         break; // Jumps out of loop
// }

// let max_number = Number(prompt("Enter the max number:"))

// for(let i = 0; i < max_number; i++) { // Prints even numbers only
//     if(i % 2 != 0) {
//         continue; // goes to the next iteration
//     }
//     console.log(i);
// }


// let i = 1;

// for(; ;) {
//     alert(i++)
//     let answer = prompt("Enter stop if you don't want to continue");
//     if(answer == "stop")
//     break;
// }

/// to make it more readable and effective
/// Same above but using while

// let i = 1;
// let answer;

// while(answer !== "stop") {
//     answer = prompt("Enter stop if you don't want to continue");
// }



// let i = 0;

// while (i < 10) {
//     alert(i++)
// }

//same as

// for(let i = 0; i < 10; i++) {
//     alert(i);
// }


// while(true) {
//     alert("Hello");
//     if(prompt("Enter stop to finish") == "stop")
//     break;
// }


// let answer;
// do {
//     alert("Hello");
//     answer = prompt("Enter stop to finish") == "stop" ? false : true;
// }
// while (answer);
