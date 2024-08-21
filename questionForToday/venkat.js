'use strict';

const ARRAY_1 =[1, 2, 3];
const ARRAY_2 = [1, 2, 3];
const equal = (firstArray, secondArray) => {
    let result;
    if (firstArray.length === secondArray.length) {
        result = true;
    }
    if (result === true) {
        for (let index = 0; index < firstArray.length; index++) {
            if (typeof firstArray[index] === 'object' && firstArray[index]!==null&&typeof secondArray[index] === 'object'&&secondArray[index]!==null) {
                result= equal(firstArray[index], secondArray[index]);
            } else {
                if (firstArray[index] !== secondArray[index]) {
                    result = false;
                }
            }
        }
    }
    return result;
}
console.log(equal(ARRAY_1, ARRAY_2));