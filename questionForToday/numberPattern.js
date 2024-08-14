let aNumber = 7;

for(let index = 0; index <= 7; index++){
    let arr = [];
    for(let index2 = 0; index2 <= 7; index2++){
        if(index2 >= index){
            arr.push(index-1);
        } else {
            arr.push(" ");
        }
    }
    console.log(arr.join(""))
}