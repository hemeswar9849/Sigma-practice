// let aRandomNumber = Math.random();
// let aNumber = parseInt(aRandomNumber * 10);

let anArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '    ', '', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, '-', '=', '_', '+', ',', '<', '>', '.', '/', '?', ':', ';', `'`, `"`];

let passwordLength = 16;

let anotherArray = [];


for (let index = 0; index < passwordLength; index++) {
    let aRandomNumber = Math.random();
    let aNumber = parseInt(aRandomNumber * 80);
    anotherArray.push(anArray[aNumber]);
}
console.log(anotherArray.join(""));