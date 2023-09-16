
let number;

do {
    number = Number(prompt("Please, enter number:"));
} while (isNaN(number))

// looping through numbers from 2 to given number
for (let j = 2; j <= number; j++) {
    
    //checking if the number is a prime number
    let isPrime = true;
    for (let i = 2; i <= j-1 ; i++) {
        if (j % i === 0) {
            isPrime = false;
            break
        }
    }
    if (isPrime) 
    console.log(j);
}


