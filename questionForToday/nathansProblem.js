const cardsPosition = '1001101';

const array = cardsPosition.split('');

let noOfMoves = 0;
let noOfZerosFound = 0;

while (noOfZerosFound < array.length - 1) {
    noOfZerosFound = 0;
    for (let index = 0; index < array.length - 1; index++) {
        if (array[index] === '1') {
            array[index] = '0';
            array[index + 1] = array[index + 1] === '0' ? '1' : '0';
            noOfMoves++;
        } else {
            noOfZerosFound++;
        }
    }
}

console.log(`The terminated answer is ${array.join('')} and no of moves are ${noOfMoves}`);
