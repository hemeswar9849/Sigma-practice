'use strict'

let aNumber = -1;

let result = 0;

for (let index = 1; index <= aNumber; index++) {
    result = result + index;
}
console.log(result)

//another method
let anotherResult = (aNumber * (aNumber + 1)) / 2;

console.log(anotherResult);