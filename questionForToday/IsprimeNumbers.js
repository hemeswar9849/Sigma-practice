let aNumber = 19;




let isPrime = true;
if (aNumber < 2) {
    console.log("Not a prime");
} else {
    for (let index = 2; index < aNumber; index++) {
        if (aNumber % index == 0) {
            console.log(`${aNumber} is not a prime number`);
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log("prime");
    }
}
