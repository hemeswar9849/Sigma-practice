let m = 0;
let n = 0;

let exponent = 1;
if (m === 0 && n === 0) {
    console.log(0);
} else {
    for (let index = 1; index <= n; index++) {
        exponent *= m;
    }

    console.log(exponent);
}