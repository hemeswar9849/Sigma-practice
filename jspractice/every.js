const arr = [1, 2, 3, 4];

const every = (arr, callback) => {
  for (let index = 0; index < arr.length; index++) {
    if (!callback(arr[index], index, arr)) {
      return false;
    }
  }
  return true;
};

const condition = (element) => {
  return element < 2;
};

console.log(arr.every(condition));

console.log(every(arr, condition));