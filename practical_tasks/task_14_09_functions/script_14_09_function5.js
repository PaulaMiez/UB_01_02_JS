// 5) Function that takes an array of numbers
// as a parameter and returns the sum and the average of all the numbers in the array.



let arrLen = Number(prompt("Enter the count of your numbers:"));
let myArr = [];

for (let i = 0; i < arrLen; i++)
    myArr.push(Number(prompt("Enter a number:")));


function arraySumAndAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
    console.log(sum / arr.length);
    alert(`The sum of the array is ${sum} and the average of the array is ${sum / arr.length}`)
}

arraySumAndAverage(myArr);