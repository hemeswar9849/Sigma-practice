const aFucntion = (callBack) => {
  // setTimeout(() => {
    waitTwoSeconds();
    console.log('hiiiii');
  // }, 1000);
};

const waitTwoSeconds = () => {
  for(let i = 0; i < 10000000000; i++){}
  console.log('hi');
};

const wait = (callBack) => {
  callBack();
  alert('hi');
}

// const button = document.querySelector('button');
// button.addEventListener('click', () => wait(waitTwoSeconds));
// alert('thank you');


// const alert = () => {
//   alert('hi');
// }

const greet = (callBack) => {
  setTimeout(() => {
    callBack();
    console.log('hi');
  }, 1000);
};

const greet2 = (callBack) => {
  setTimeout(() => {
    callBack();
    console.log('Welcome to my youtube channel');
  }, 1000);
};

const greet3 = () => {
  setTimeout(() => {
    console.log('I hope you are all doing good');
  }, 1000);
};


// aFucntion(greet);

// console.log('hi I am hemeswar reddy');

// aFucntion(() => {
//   greet(() => {
//     greet2(() => {
//       greet3();
//     });
//   });
// });
