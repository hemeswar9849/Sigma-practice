let arr = [1,2,3,4,5];
console.log("first array");
for(let index = 0; index < arr.length; index++){
    let duplicateArray = [];
    duplicateArray[index] = arr[index];
    duplicateArray[0] = 0;
    console.log(duplicateArray[index]);
}
console.log("second array");
for(let index = 0; index < arr.length; index++){
    console.log(arr[index]);
}














// console.log(arr.length);
// let str = "hemeswar";
// console.log(str.length);