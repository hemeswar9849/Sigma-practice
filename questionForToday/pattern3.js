let aNumber = 6;

// for (let index = 1; index <= aNumber; index++) {
// let arr = [];
// for (let index2 = 1; index2 <= aNumber + (aNumber - 1); index2++) {
//     let temp = 1;
//     if (index > 1) {
//         temp = index + (index - 1);
//     }
//     if ((index + index2) === (aNumber + 1)) {
//         while (temp !== 0) {
//             arr.push("* ");
//             temp--;
//         }
//         break;
//     } else {
//         arr.push("  ");
//     }
// }
// console.log(arr.join(""));

//another method
// }
for (let index = 0; index < aNumber; index++) {
    let arr = [];
    for (let index2 = 0; index2 < 2 * aNumber; index2++) {
        if (index2 >= aNumber - 1 - index && index2 <= aNumber - 1 + index) {
            arr.push("*");
        } else {
            arr.push(" ");
        }
    }
    console.log(arr.join(""));
}