const MAX_RANGE = 10000;

for (let index = 1; index <= MAX_RANGE; index++) {
    let temp = index;
    let count = 0;
    while (temp !== 0) {
        temp = parseInt(temp / 10);
        count++;
    }
    let square;
    let result = 0;
    temp = index;
    while (temp !== 0) {
        let rem = temp % 10;
        temp = parseInt(temp / 10);
        square = Math.pow(rem, count);
        result = result + square;
    }
    if(result === index){
        console.log(index);
    }
}




















//ye program diye number armstrong number ya nahi pehchane ke liye 
let aNumber = 9474;

let result = 0;
let temp = aNumber;
let square;

let count = 0;
while (temp !== 0) {
    temp = parseInt(temp / 10);
    count++;
}
temp = aNumber;

while (temp !== 0) {
    let rem = temp % 10;
    temp = parseInt(temp / 10);
    square = Math.pow(rem, count);
    result = result + square;
}

if (aNumber === result) {
    console.log('Given number is a Armstrong number');
} else {
    console.log('Given number is not a Armstrong number');
}