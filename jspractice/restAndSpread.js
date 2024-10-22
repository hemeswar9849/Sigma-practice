const arr = [false, false, false, false, false, false];

const personalDetails = {
  name: 'hems',
  gender: 'male',
  age: 19,
  height: "5' 8''",
  weight: 67,
};

const publicDetails = {
  study: 'Diploma 3rd year',
  percentage: 87,
  pin: 6,
};

const arrayOfNumbers = [1, 2, 3, 4, 5];

//rest operator
const sum = (...arr) => { //using in functions
  console.log(arr);
};

// sum(1, 2, 3, 4, 5, 6, 7);

const [first, second, third, ...rest] = arrayOfNumbers; //array destructing

// const { name, age, height, weight } = obj;  //object destructing

//spread 

const arrayOfBoleanAndNumbers = [...arr, ...arrayOfNumbers]; // array combining

const objectOfDetails = { ...personalDetails, ...publicDetails }; //object combining

const print = (a, b, c) => {
  console.log(a, b, c);
};

// print(...arrayOfNumbers);

const printf = (a, b, c) => {
  mul = a * b * c;
  length = 3;
  return {mul, length};
};

console.log(printf(...arrayOfNumbers));
