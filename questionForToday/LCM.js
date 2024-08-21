const A_NUMBER = 100;
const ANOTHER_NUMBER = 155;
let maxNumber;
if(A_NUMBER < ANOTHER_NUMBER){
    maxNumber = ANOTHER_NUMBER;
} else {
    maxNumber = A_NUMBER;
}

while(true){
    if(maxNumber % A_NUMBER === 0 && maxNumber % ANOTHER_NUMBER === 0){
        break
    }
    maxNumber++;
}
console.log(maxNumber);



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