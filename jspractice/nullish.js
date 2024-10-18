'use strict';

let aNumber = 1;
let anotherNumber = 2;
let undefinedValue = undefined;
let nullValue = null;

let nullishCoaleshingOperator =  nullValue ?? undefinedValue;

console.log(nullishCoaleshingOperator);
