// 3) Function that calculates the area of a rectangle
// when given its width and height as parameters. Return the area.

let recLen;
let recWid;

do {
    recLen = Number(prompt("Enter the length of the rectangle:"))
} while (isNaN(recLen))

do {
    recWid = Number(prompt("Enter the width of the rectangle:"))
} while (isNaN(recWid))

function rectangleArea(length,width) {
    if (length > 0 && width > 0) {
        return length * width;
    }
    return 0;
 }  

alert(`The area of rectangle is ${rectangleArea(recLen,recWid)}`);