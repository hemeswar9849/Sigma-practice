let a = []
let c = true
console.log(a)
let pushuntilzero = ((e) =>{
    while (true){
        let b = parseFloat(prompt("Enter a number"))
        if(b==0){
            return;
        }
        a.push(b)
    }
})
pushuntilzero(a)  
a.forEach((value,index) => {
    alert(`The ${index} index is ${value}`)
});
console.log(a)
// while(true){
//     if(b==0){
//         return 0;
//     }
//     a.push(b)
// }
// console.log(a)





// console.log(a)