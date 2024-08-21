let str = "aaaabbbbbcc";

let aStr = "";
aStr = str[0];

let counter = 1;

for (let index = 1; index < str.length - 1; index++) {
    let isThere = false;
    for (let index2 = 0; index2 < aStr.length; index2++) {
        if (str[index] === aStr[index2]) {
            isThere = true;
        }
    }
    if(!isThere){
        aStr = aStr + str[index];
        counter++;
    }
}
console.log(aStr,counter);