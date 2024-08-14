let numList = [6, 7, 11, 2];
let tempNumList = numList;
let subSetsList = [];
let temp2NumList;
console.log("working11")
console.log(numList)
for (let index in numList) {
    tempNumList = numList.toSpliced(0, index)
    while (tempNumList.length !== 1) {
        let temp2NumList = tempNumList;
        for (let ind = 1; ind < tempNumList.length; ind++) {
            subSetsList.push(temp2NumList);
            temp2NumList = tempNumList.toSpliced(ind, 1);
            console.log(temp2NumList)
        }
        tempNumList = temp2NumList;
    }
}
// console.log(subSetsList);