let aNumber = -12345;

// let aNumberInStringForm = aNumber.toString();

// let aNumberInArrayForm = Array.from(aNumber);

// aNumberInArrayForm.reverse();

// aNumber = aNumberInArrayForm.join("");

// console.log(aNumber);

let rem = 0;
let temp = aNumber;
let result = 0;


while (temp !== 0) {
    rem = parseInt(temp % 10);
    temp = parseInt(temp / 10);
    result = (result * 10) + rem;
}
console.log(result);