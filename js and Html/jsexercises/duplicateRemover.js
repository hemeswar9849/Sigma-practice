let arr1 = [7, 7, 7, 8, 8, 1, 1, 2, 6, 2, 3, 3, 4, 4, 5, 5, 6, 6]
let newArray = []
for (let arr1Index = 0; arr1Index < arr1.length; arr1Index++) {
    if (newArray[0] === undefined) {
        newArray.push(arr1[0])
    }
    let j = 0;
    while (j < newArray.length) {
        if (newArray[j] === arr1[arr1Index]) {
            break;
        } else {
            j++;
            if (j === newArray.length) {
                newArray.push(arr1[arr1Index])
            }
        }
    }
}
console.log(arr1);
console.log(newArray);


