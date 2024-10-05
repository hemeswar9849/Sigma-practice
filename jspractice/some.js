const arr = [1, 2, 3, 4];

const some = (array, callback) => {
  for(let index = 0; index < arr.length; index++){
    if(callback(arr[index], index, array)){
      return true;
    }
  }
  return false;
};

const condition = (element) => {
  return element > 3;
};

console.log(arr.some(condition));

console.log(some(arr, condition));