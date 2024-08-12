let aNumber = -121;

let temp = aNumber; 
let rem = 0;
let result = 0;
while(temp !== 0){
    rem = parseInt(temp % 10);
    temp = parseInt(temp / 10);
    result = (result * 10) + rem;
}

console.log(result);
if(aNumber === result){
    console.log("Given number is palindrome");
} else {
    console.log("Given number is not palindrome");
}