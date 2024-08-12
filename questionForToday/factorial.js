let aNumber = 0;

let temp = aNumber;
let result = 1;

if(aNumber <= 0){
    result = 0;
} else {
    for(let index = 1; index <= aNumber; index++){
        result = index * result;    
    }
}

console.log(result);