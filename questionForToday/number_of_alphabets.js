let str = "aabbcc";
let removeDuplicates = ((str) => {

    let aStr = "";

    let counter = 0;

    for (let index = 1; index < str.length - 1; index++) {
        let isThere = false;

        for (let index2 = 0; index2 < aStr.length; index2++) {
            if (str[index] === aStr[index2]) {
                isThere = true;
            }
        }

        if (!isThere) {
            aStr = aStr + str[index];
            counter++;
        }
    }
    return counter;
})

let numberOfAlphabets = removeDuplicates(str);
console.log(numberOfAlphabets);