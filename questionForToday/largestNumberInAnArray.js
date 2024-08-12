'use strict'
let arr = [];

let bigNumber = arr[0];

// for(let index = 0; index < arr.length; index++){
//     if(bigNumber < arr[index]){
//         bigNumber = arr[index];
//     }
// }
// console.log(bigNumber);

arr.forEach((value) => {
    if(bigNumber < value){
        bigNumber = value;
    }
})

if(typeof bigNumber === "number"){   
    console.log(bigNumber);
}










// arr.sort();
// console.log(arr);

// let arrLength = arr.length;
// console.log(arr[arrLength-1]);