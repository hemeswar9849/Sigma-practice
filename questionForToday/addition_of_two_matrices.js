let aMatrix = [
    [1, 2, 3],
    [4, 5, 6]
];
let anotherMatrix = [
    [1, 2, 3],
    [4, 5, 6]
];
let resultantMatrix = [];
if (aMatrix.length === anotherMatrix.length && aMatrix[0].length === anotherMatrix[0].length) {
    for (let row = 0; row < aMatrix.length; row++) {
        let aRow = [];
        for (let column = 0; column < aMatrix[0].length; column++) {
            let result = (aMatrix[row][column]) + (anotherMatrix[row][column]);
            aRow.push(result);
        }
        resultantMatrix.push(aRow);
    }
}
console.log(resultantMatrix);
