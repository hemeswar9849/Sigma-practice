let aNumber = 4;

for (let index = 1; index <= aNumber; index++) {
    let arr = [];
    for (let index2 = 1; index2 <= aNumber; index2++) {
        if (index === 1 || index === aNumber || index2 === 1 || index2 === aNumber){
            arr.push("*");
        } else {
            arr.push(" ");
        }
    }
    console.log(arr.join(""));
}