let arr = [1, 2, 3, 4];
let tempArray = [];
for (let index = 0; index <= arr.length; index++) {
    if (index == 0) {
        console.log(tempArray);
    }
    else {
        for (let index2 = 1; index2 <= arr.length; index2++) {
            let arr1 = [];
            for (let index3 = 1; index3 <= index; index3++) {
                arr1.push(arr[index2 - 1]);
            }
            console.log(arr1);
        }
    }
}