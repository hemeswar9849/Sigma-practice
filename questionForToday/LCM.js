let A_NUMBER = 1;
let ANOTHER_NUMBER = 1;

let undefinedValue;
if (A_NUMBER === 0 && ANOTHER_NUMBER === 0) {
    console.log(undefinedValue);
} else if (A_NUMBER === 0 || ANOTHER_NUMBER === 0) {
    console.log(0);
} else {
    for (let index = 1; ; index++) {
        let multipleOfANumber = A_NUMBER;
        let Isfound = false;
        multipleOfANumber *= index;
        if (multipleOfANumber >= ANOTHER_NUMBER) {
            for (let index2 = 1; ; index2++) {
                let multipleOfANumber2 = ANOTHER_NUMBER
                multipleOfANumber2 *= index2;
                if (multipleOfANumber < multipleOfANumber2) {
                    break;
                } else if (multipleOfANumber === multipleOfANumber2) {
                    Isfound = true;
                    console.log(multipleOfANumber);
                    break;
                }
            }
            if (Isfound) {
                break;
            }
        }
    }
}