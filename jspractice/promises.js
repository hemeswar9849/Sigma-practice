const dogWentOut = () => {
  return new Promise((resolve, reject) => {
    let isDogWentToOut;
    setTimeout(() => {
      isDogWentToOut = false;
      if (isDogWentToOut) {
        resolve('Yep');
      } else {
        reject('Nope');
      }
    }, 2000);
  });
};

const whatNext = (isDogWent) => {
  return new Promise((resolve, reject) => {
    if(isDogWent === 'Yep'){
      resolve('You\'re permitted to do next task');
    } else if(isDogWent === 'Nope'){
      reject('You\'re not permitted to do next task, Therefore go and do that first');
    }
  });
};

const dogWent = () => {
  return new Promise((resolve, reject) => {
    let isDogWentToToilet;
    setTimeout(() => {
      isDogWentToToilet = false;
      if (isDogWentToToilet) {
        resolve('Yep, she went to toilet');
      } else {
        reject('Nope, she didn\'t toilet');
      }
    }, 1000);
  });
};

const dogAte = () => {
  return new Promise((resolve, reject) => {
    let isDogWentToAte;
    setTimeout(() => {
      isDogWentToAte = false;
      if (isDogWentToAte) {
        resolve('Yep, she ate');
      } else {
        reject('Nope, she didn\'t ate');
      }
    }, 3000);
  });
};

const resolved = (resolves) => {
  console.log(resolves);
};

const rejected = (rejects) => {
  console.log(rejects);
}

//to call the promise in a promise
// dogWentOut()
//   .catch((error) => {
//     rejected(error);
//     return 'Nope';
//   })
//   .then(whatNext)
//   .then(resolved)
//   .catch(rejected);

//it gives all array of out put only when all promises are resolved and if anyone of it get error it returns that rejected value
// Promise.all([DogWentOut(), dogWentToilet(),dogAte()])
//   .then(resolved => {
//     console.log(resolved);
//   })
//   .catch(error => {
//     console.log(error);
//   });

//it gives only the promise that is executed first either fullfilled or rejected
// Promise.race([DogWentOut(), dogWentToilet(),dogAte()])
//   .then(resolved => {
//     console.log(resolved);
//   })
//   .catch(error => {
//     console.log('the error is' , error);
//   });

// it returns all the values of promises regardless of promise is fullfilled or rejected.
// Promise.allSettled([DogWentOut(), dogWentToilet(),dogAte()])
//   .then(resolved => {
//     console.log(resolved);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// it returns the value of first fullfilled value igonring rejections
// Promise.any([DogWentOut(), dogWentToilet(),dogAte()])
//   .then(resolved => {
//     console.log(resolved);
//   })
//   .catch(error => {
//     console.log(error);
//   });

//generally it is a good practice because it executes when function is called
// const aFunction = (callback) => {
//   const dogStatusNow = callback();
//   console.log(dogStatusNow)
//   dogStatusNow
//     .then((resolved) => console.log(resolved))
//     .catch(rejected => console.log(rejected))
//     .finally(() => console.log('Your promise is executed successfully'));
// };

//with out await and its bad practice without callback
// const aFunction = () => {
//   const dogStatusNow = DogWentOut();
//   console.log(dogStatusNow);
//   dogStatusNow
//   .then(result => {
//       console.log(result);
//       return 'arey bhai';
//     })
//     .then(bhai => {
//       console.log(bhai);
//       return 'your code is executed successfully!! ewww!!'
//     })
//     .catch(result => {
//       console.log(result);
//     })
//     .finally( ()=> {
//       console.log('hi your code execution is done');
//       console.log(dogStatusNow);
//     });
// };

//with await and also a bad practice
// const aFunction = async () => {
//   try {
//     const dogStatusNow = await DogWentOut();
//     console.log(dogStatusNow);
//   } catch (error) {
//     console.log(error);
//   }
// };

// aFunction(DogWentOut);
