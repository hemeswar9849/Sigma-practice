// const arr = [1, 2, 3, 4];
const arr = [true , true, true, true];

const every = (arr, callback) => {
  for (let index = 0; index < arr.length; index++) {
    if (!callback(arr[index], index, arr)) {
      return false;
    }
  }
  return true;
};

const condition = (element) => {
  return element === true;
};

console.log(arr.every(condition));

console.log(every(arr, condition));