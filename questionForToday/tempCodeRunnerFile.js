let A_NUMBER = 24;
let ANOTHER_NUMBER = 36;

for (let index = 1; ; index++) {
    let multipleOfANumber = A_NUMBER;
    let multipleOfANumber2 = ANOTHER_NUMBER;
    multipleOfANumber *= index;
    if (multipleOfANumber >= ANOTHER_NUMBER) {
        for (let index2 = 1; ; index2++) {
            multipleOfANumber2 *= index2;
            if (multipleOfANumber < multipleOfANumber2) {
                break;