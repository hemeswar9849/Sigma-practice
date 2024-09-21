'use strict';

const sum = (a, b) => {
  console.log(a+b);
}

const set = async () => {
  console.log('1');
  const setted =  setTimeout(sum, 2000,4,5);
  // clearTimeout(setted);
  console.log('3');
  console.log('4');
  console.log('5');
};

set();
