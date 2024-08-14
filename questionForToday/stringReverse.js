let aString = "HarryIs";

//1st method
// let arr = Array.from(aString);
// arr.reverse();
// aString = arr.join("");
// console.log(typeof aString);

//2nd method
// let arr = aString.split(" ").reverse().join("");
// console.log(arr);

//3rd method
let arr = Array.from(aString);
let stringLength = aString.length;

let strReverse = (aString) => {
    for (let index = 0; index < parseInt((stringLength) / 2); index++) {
        let temp = aString[index];
        aString[index] = aString[(stringLength - 1) - index];
        aString[(stringLength - 1) - index] = temp;
    }
    return aString;
}

console.log(aString);
let reversedString = strReverse(arr).join("");
console.log(reversedString);