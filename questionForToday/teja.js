'use strict';

const ARRAY_1 = [1, 2, 3, [4, 5, 6, [100, 99, 44, [20, 19, 16, [10, 20], ['hello', 'app'], ['hi', [123]]]]]];
const ARRAY_2 = [1, 2, 3, [4, 5, 6, [100, 99, 44, [20, 19, 16, [10, 20], ['hello', 'app'], ['hi', [126]]]]]];

/*
Write a function that takes two arrays and returns a boolean. true if the arrays are equal, false otherwise.
Call the function and log the value returned by your function.
Note: Please do not change the above variables. Also do not use the same names for any variables in your entire code.

Example 1:
Input: ARRAY_1=[1, 2, 3], ARRAY_2=[1, 2, 3]
Output: true

Example 2:
Input: ARRAY_1=[5, 10, 'hello'], ARRAY_2=[5, 10, 'hello']
Output: true

Example 3:
Input: ARRAY_1=[5, 10, 'hi'], ARRAY_2=[5, 10, 'hello']
Output: false

Example 4:
Input: ARRAY_1=[5, 10, ['a', 'b', 'c']], ARRAY_2=[5, 10, ['a', 'b', 'c']]
Output: true

Example 5:
Input: ARRAY_1=[5, 10, ['a', 'b', 'c']], ARRAY_2=[5, 10]
Output: false
*/
const equalArrays = function (arrOne, arrTwo) {
    if (arrOne === null && arrTwo === null) {
        return true;
    }
    if (arrOne.length !== arrTwo.length) {
        return false;
    }
    else {
        for (let index = 0; index < arrOne.length; index++) {
            if (typeof arrOne[index] === 'object' && typeof arrTwo[index] === 'object') {
                return equalArrays(arrOne[index],arrTwo[index]);
            } else if(arrOne[index] !== arrTwo[index]) {
                // console.log(arrOne[index], '+', arrTwo[index], 'end');
                return false;
            }
            console.log(arrOne[index], '=', arrTwo[index], 'end');
        }
    }
    return true;
}
console.log(equalArrays(ARRAY_1, ARRAY_2))