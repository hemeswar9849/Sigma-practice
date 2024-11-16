const arr = ['hemeswar', 'hello', 'meghana', 'hell'];

const some = (arr, callback) => {
  for(let index = 0; index < arr.length; index++){
    if(callback(arr[index], index, arr)){
      return true;
    }
  }
  return false;
};

const condition = (element) => {
  return element.includes('helll');
};

console.log(arr.some(condition));

console.log(some(arr, condition));