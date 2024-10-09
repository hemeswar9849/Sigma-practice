const nameSymbol = Symbol.for('name');
const nameSymbol2 = Symbol.for('name');

const obj = {
  name: 'hemeswar',
  age: 18,
  gender: 'male',
  study: 'diploma 3rd year'
};

obj[nameSymbol] = 'daemon';

console.log(nameSymbol === nameSymbol2);