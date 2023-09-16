// Prompt for Matrix 1
let rowLen1 = prompt("Rows for Matrix 1:");
let colLen1 = prompt("Columns for Matrix 1:");

let matrix1 = new Array(colLen1);
for (var i = 0; i < colLen1; i++) {
 matrix1[i] = new Array(rowLen1);
}

for (var i = 0; i < colLen1; i++) {
    for (var j = 0; j < rowLen1; j++) {
        //ask to write i col j row value
        matrix1[i][j] = prompt("For Matrix 1, enter value of column " + i + " and row " + j);
    }
}
console.log(matrix1);

// Prompt for Matrix 2
let rowLen2 = prompt("Rows for Matrix 2:");
let colLen2 = prompt("Columns for Matrix 2:");

let matrix2 = new Array(colLen2);
for (let i = 0; i < colLen2; i++) {
 matrix2[i] = new Array(rowLen2);
}

for (let i = 0; i < colLen2; i++) {
    for (let j = 0; j < rowLen2; j++) {
        //ask to write i col j row value
        matrix2[i][j] = prompt("For Matrix 2, enter value of column " + i + " and row " + j);
    }
}
console.log(matrix2);


// Calculate the sum of two matrixes
let newMatrix = [];

for (let i = 0; i < matrix1.length; i++) {
    newMatrix[i] = [];
    for (let j = 0; j < matrix1[i].length; j++){
        newMatrix[i][j] = Number(matrix1[i][j]) + Number(matrix2[i][j]);
    }
}
console.log(newMatrix);

//or

// function additionOfMatrix(matrix1, matrix2) {
//     // defining an empty array to store the result after the addition of matrixes
//     var newMatrix = []; 
//     for (let i = 0; i < matrix1.length; i++) {
//         newMatrix[i] = [];
//         for (let j = 0; j < matrix1[i].length; j++) {
//             newMatrix[i][j] = Number(matrix1[i][j]) + Number(matrix2[i][j]);
//         }
//     }
//     return newMatrix;
// }

// console.log(additionOfMatrix(matrix1,matrix2))