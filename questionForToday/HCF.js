"use strict"
const A_NUMBER = 8;
const ANOTHER_NUMBER = 0;

// if(A_NUMBER > 0 && ANOTHER_NUMBER >0){
//     let isPrime = true;
//     for(let index = 1; index < 10; index++){
//         for(let index2 = 2; index2 < index; index2++){
//             if(index % index2 === 0){
//                 isPrime = false;
//             }
//         }
//         if(isPrime){
//             console.log(index);
//         }
//     }
// }

let commonFactors = [];

if (A_NUMBER === 0 && ANOTHER_NUMBER !== 0) {
    console.log(ANOTHER_NUMBER);
} else if (A_NUMBER !== 0 && ANOTHER_NUMBER === 0) {
    console.log(A_NUMBER);
} else {
    for (let index = 1; index <= A_NUMBER; index++) {
        // console.log("hi");
        if (A_NUMBER % index === 0) {
            for (let index2 = 1; index2 <= ANOTHER_NUMBER; index2++) {
                if (ANOTHER_NUMBER % index2 === 0) {
                    if (index === index2) {
                        commonFactors.push(index);
                    }
                }
            }
        }
    }
    let arrLength = commonFactors.length;
    console.log(commonFactors[arrLength - 1]);
}






// console.log(1%1);

// let i = 3;
// let arr = [1,2,3,4,5,6];
// console.log(arr.slice(i,i+1));
// console.log(arr)


