/* to print following pattern

   *
   * *
   * * *
   * * * *

*/
let aNumber = 4;

for(let index = 1; index <= aNumber; index++){
    let index2 = index;
    let design = [];
    while(index2 !== 0){
        design.push("* ");
        index2--;
    }
    console.log(design.join(""));
}