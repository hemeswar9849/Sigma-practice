let a = [] 
// let b = prompt("Enter a nautral number")
let b = 5
let pushN = ((a)=>{
    let temp = b;
    while(temp!=0){
        a.push(temp)
        temp--;
    }
})
pushN(a)
console.log(a)
let factorial = (num1,num2)=>{
    return num1*num2
}
console.log(a.reduce(factorial))