// 1) Function that takes an age as a parameter and returns
//"You are an underages" if the age is less than 18, and "You are an adult" if the age is 18 or older.

let myAge;

do {
    myAge = Number(prompt("Please, enter your age:"))
} while (isNaN(myAge))

function ageCheck(age) {
    if (age < 18 ) {
        alert("You are underage");
    }
    else {
        alert("You are an adult");
    }
}

ageCheck(myAge);