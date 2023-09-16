//2) Implement your own sorting of the numerical array (without using standard Array.sort function)

//Bubble sorting algorithm

let myArray = [52,74,83,42,2,55,34,27,15,100,65];

function bubbleSort(arr) {
    
    for (let i = 0; i < arr.length; i++) {
        for (let j =0; j < arr.length - i - 1; j++) {
            if(arr[j + 1] < arr[j]) {
                //Swap
                [arr[j + 1],arr[j]] = [arr[j],arr[j +1]]
            }
        }
    }
    return arr;
}

console.log(bubbleSort(myArray));

