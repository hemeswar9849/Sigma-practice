let aNumber = -1;

if (aNumber <= 1) {
    //to print nothing when the value is less than or equal to 1
} else {
    for(let index = 2; index <= aNumber; index++){
        let isPrime = true;
        for (let index2 = 2; index2 < index; index2++) {
            if (index % index2 === 0) {
                isPrime = false;
            }
        }
        if(isPrime){
            console.log(index);
        }
    }
}