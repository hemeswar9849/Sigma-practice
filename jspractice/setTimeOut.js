'use strict';

const set = async () => {
  console.log('1');
  const setted = await setTimeout(() => {
    console.log('2');
  }, 2000);
  console.log('3');
  console.log('4');
  console.log('5');
};

set();
