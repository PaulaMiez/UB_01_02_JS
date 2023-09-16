let month = prompt("Please, enter your birth month:");
let day = prompt("Please, enter your Birth Day:");

if (isNaN(day))
    console.error("You must enter a number!");


if (month.toLowerCase() == "january") {
    if (day >= 20) {
        let zodiac = "Aquarius";
        alert(zodiac);
    }
    else if (day <= 20) {
        let zodiac = "Capricorn";
        alert(zodiac);
    }
}

else if (month.toLowerCase() == "february") {
    if (day >= 19) {
        let zodiac = "Pisces";
        alert(zodiac);
    }
    else if (day <= 19) {
        let zodiac = "Aquarius";
        alert(zodiac);
    }
}

else if (month.toLowerCase() == "march") {
    if (day >= 21) {
        let zodiac = "Aries";
        alert(zodiac);
    }
    else if (day <= 21) {
        let zodiac = "Pisces";
        alert(zodiac);
    }
}

else if (month.toLowerCase() == "april") {
    if (day >= 20) {
        let zodiac = "Taurus";
        alert(zodiac);
    }
    else if (day <= 20) {
        let zodiac = "Aries";
        alert(zodiac);
    }
}

else if (month.toLowerCase() == "may") {
    if (day >= 21) {
        let zodiac = "Gemini";
        alert(zodiac);
    }
    else if (day <= 21) {
        let zodiac = "Taurus";
        alert(zodiac);
    }
}

else if (month.toLowerCase() == "june") {
    if (day >= 21) {
        let zodiac = "Cancer";
        alert(zodiac);
    }
    else if (day <= 21) {
        let zodiac = "Gemini";
        alert(zodiac);
    }
}

else if (month.toLowerCase() == "july") {
    if (day >= 23) {
        let zodiac = "Leo";
        alert(zodiac);
    }
    else if (day <= 23) {
        let zodiac = "Cancer";
        alert(zodiac);
    }
}

else if (month.toLowerCase() == "august") {
    if (day >= 23) {
        let zodiac = "Virgo";
        alert(zodiac);
    }
    else if (day <= 23) {
        let zodiac = "Leo";
        alert(zodiac);
    }
}

else if (month.toLowerCase() == "september") {
    if (day >= 23) {
        let zodiac = "Libra";
        alert(zodiac);
    }
    else if (day <= 23) {
        let zodiac = "Virgo";
        alert(zodiac);
    }
}

else if (month.toLowerCase() == "october") {
    if (day >= 23) {
        let zodiac = "Scorpio";
        alert(zodiac);
    }
    else if (day <= 23) {
        let zodiac = "Libra";
        alert(zodiac);
    }
}

else if (month.toLowerCase() == "november") {
    if (day >= 22) {
        let zodiac = "Sagittarius";
        alert(zodiac);
    }
    else if (day <= 22) {
        let zodiac = "Scorpio";
        alert(zodiac);
    }
}

else if (month.toLowerCase() == "december") {
    if (day >= 22) {
        let zodiac = "Capricorn";
        alert(zodiac);
    }
    else if (day <= 22) {
        let zodiac = "Sagittarius";
        alert(zodiac);
    }
}