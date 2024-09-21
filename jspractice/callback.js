const aFucntion = (callBack) => {
  const setTime = setTimeout(() => {
    callBack();
  }, 3000);
};

const greet = (callBack) => {
  setTimeout(() => {
    console.log('hi');
    callBack();
  }, 3000);
};

const greet2 = (callBack) => {
  setTimeout(() => {
    console.log('Welcome to my youtube channel');
    callBack();
  }, 3000);
};

const greet3 = () => {
  setTimeout(() => {
    console.log('I hope you are all doing good');
  }, 3000);
};


aFucntion(() => {
  greet(() => {
    greet2(() => {
      greet3();
    });
  })
});
