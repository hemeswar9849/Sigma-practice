// 'use strict';

// const ARRAY_1 = [1, 2, 3, [4, 5, 6, [100, 99, 44, [20, 19, 16, [10, 20], ['hello', 'app'], ['hi', [123]]]]]];
// const ARRAY_2 = [1, 2, 3, [4, 5, 6, [100, 99, 44, [20, 19, 16, [10, 20], ['hello', 'app'], ['hi', [126]]]]]];

// /*
// Write a function that takes two arrays and returns a boolean. true if the arrays are equal, false otherwise.
// Call the function and log the value returned by your function.
// Note: Please do not change the above variables. Also do not use the same names for any variables in your entire code.

// Example 1:
// Input: ARRAY_1=[1, 2, 3], ARRAY_2=[1, 2, 3]
// Output: true

// Example 2:
// Input: ARRAY_1=[5, 10, 'hello'], ARRAY_2=[5, 10, 'hello']
// Output: true

// Example 3:
// Input: ARRAY_1=[5, 10, 'hi'], ARRAY_2=[5, 10, 'hello']
// Output: false

// Example 4:
// Input: ARRAY_1=[5, 10, ['a', 'b', 'c']], ARRAY_2=[5, 10, ['a', 'b', 'c']]
// Output: true

// Example 5:
// Input: ARRAY_1=[5, 10, ['a', 'b', 'c']], ARRAY_2=[5, 10]
// Output: false
// */
// const equalArrays = function (arrOne, arrTwo) {
//     if (arrOne === null && arrTwo === null) {
//         return true;
//     }
//     if (arrOne.length !== arrTwo.length) {
//         return false;
//     }
//     else {
//         for (let index = 0; index < arrOne.length; index++) {
//             if (typeof arrOne[index] === 'object' && typeof arrTwo[index] === 'object') {
//                 return equalArrays(arrOne[index],arrTwo[index]);
//             } else if(arrOne[index] !== arrTwo[index]) {
//                 // console.log(arrOne[index], '+', arrTwo[index], 'end');
//                 return false;
//             }
//             console.log(arrOne[index], '=', arrTwo[index], 'end');
//         }
//     }
//     return true;
// }
// console.log(equalArrays(ARRAY_1, ARRAY_2))



'use strict';

const OBJECT_1 = { name: 'Ram' };
const OBJECT_2 = { name: 'Ram', marks: undefined };

/*
Write a function that takes two objects and returns a boolean. true if the objects are equal, false otherwise.
Call the function and log the value returned by your function.
Note: Please do not change the above variables. Also do not use the same names for any variables in your entire code.

Example 1:
Input: OBJECT_1 = {name: 'Raju', age: 21}, OBJECT_2 = {name: 'Ravi', age: 21}
Output: false

Example 2:
Input: OBJECT_1 = {name: 'Ravi', age: 21}, OBJECT_2 = {name: 'Ravi', age: 21}
Output: true

Example 3:
Input: OBJECT_1 = {name: 'Ravi', age: 21, location: 'Hyderabad'}, OBJECT_2 = {name: 'Ravi', age: 21}
Output: false

Example 4:
Input: OBJECT_1 = {name: 'Ravi', age: 21, address: {pincode: 123456, location: 'Hyderabad'}}, OBJECT_2 = {name: 'Ravi', age: 21, address: {pincode: 123456, location: 'Hyderabad'}}
Output: true

Example 5:
Input: OBJECT_1 = {page: 10, chapter: 'Building webpages'}, OBJECT_2 = {name: 'Ravi', age: 21, address: {pincode: 123456, location: 'Hyderabad'}}
Output: false

*/
const equalObjects = function (objOne, objTwo) {
  if (objOne === null && objTwo === null) {
    return true;
  } else if ((objOne === null || objTwo === null) || (Object.keys(objOne).length !== Object.keys(objTwo).length)) {
    return false;
  }
  for (const key in objOne) {
    if (typeof objOne[key] === 'object' && typeof objTwo[key] === 'object') {
      return equalObjects(objOne[key], objTwo[key]);
    } else if (objOne[key] !== objTwo[key]) {
      return false;
    }
  }
  return true;
};

console.log(equalObjects(OBJECT_1, OBJECT_2));