let aNumber = -1;

let tempNumber = aNumber;

let result = [];
if (aNumber = 0) {
    console.log("0");
} else {
    while (true) {
        if (tempNumber === 1) {
            result.push(1);
            break;
        }
        if (tempNumber % 2 === 0) {
            result.push(0);
        } else {
            result.push(1);
        }
        tempNumber = parseInt(tempNumber/2);
    }
    result.reverse();
    console.log(result.join(""));
}