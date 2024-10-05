const aNumber = 10;

const maxRows = aNumber + (aNumber - 2);
for (let index = 0; index <= maxRows; index++) {
  let arr = [];
  let index2 = 0;
  while (index2 <= maxRows / 2) {
    let sum = index + index2;
    let diff = index - index2;
    if (sum === maxRows / 2) {
      let index3 = 0;
      while (index3 < ((index * 2) + 1)) {
        arr.push('*');
        index3++;
      }
      break;
    } else if (diff === maxRows / 2) {
      let index3 = (maxRows - index);
      let index4 = 0;
      while (index4 < ((index3 * 2) + 1)) {
        arr.push('*');
        index4++;
      }
      break;
    } else {
      arr.push(' ');
      index2++;
    }
  }
  console.log((arr.join('')));
}
