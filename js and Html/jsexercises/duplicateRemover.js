let arr = [7, 7, 7, 8, 8, 1, 1, 2, 6, 2, 3, 3, 4, 4, 5, 5, 6, 6]
let nArr = []
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (nArr[0] === undefined) {
        nArr.push(arr[0])
    }
    let j = 0;
    while (j < nArr.length) {
        if (nArr[j] === arr[i]) {
            break;
        } else {
            j++;
            if (j === nArr.length) {
                nArr.push(arr[i])
            }
        }
    }
}
console.log(nArr);
let i = 0;
while (i < nArr.length) {
    
    i++;
}
console.log(nArr);


