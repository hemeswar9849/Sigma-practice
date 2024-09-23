'use strict';
const divide = (a, b, callback) => {
  if (b === 0) {
    throw Error(`you can't divide any number by 0`);
  };
  callback(b);
  return a / b;
};

try {
  console.log(divide(10, 0));
} catch(error) {
  console.log(`${error}`);
}