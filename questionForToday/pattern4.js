/*

 *****
  ****
   ***
    **
     *
*/
let aNumber = 4;

for (let index = 1; index <= 4; index++) {
    let arr = [];
    for(let index2 = 1; index2 <= 4; index2++){
        if(index2 >= index){
            arr.push("*");
        } else {
            arr.push(" ");
        }
    }
    console.log(arr.join(""));
}