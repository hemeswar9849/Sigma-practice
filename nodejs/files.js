const file = require('fs');

const readTheFile = (error, data) => {
  console.log(data);
};
//                 \file path \encoded  \callback
// file.readFile('./calc.js','utf-8', readTheFile);

//
const thediv = () => {
  return `
const div = (a, b) => {
  return a, b;
}`;
}

file.appendFile('./calc.js', thediv(), () => {
  console.log('hi');
});