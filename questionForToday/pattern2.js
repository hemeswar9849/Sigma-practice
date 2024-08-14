/* 

      *
    * *
  * * *
* * * *

*/

let aNumber = 4;

//1st method
for(let index = 1; index <= aNumber; index++){
    let str = "";
    for(let index2 = 1; index2 <= aNumber; index2++){
        if((index + index2) > aNumber){
            str = str + "* ";
        } else {
            str = str + "  ";
        }
    }
    console.log(str);
}
//2nd method
for(let index = 1; index <= aNumber; index++){
    let arr = [];
    for(let index2 = 1; index2 <= aNumber; index2++){
        if((index + index2) > aNumber){
            arr.push("* ");
        } else {
            arr.push("  ");
        }
    }
    console.log(arr.join(""));
}