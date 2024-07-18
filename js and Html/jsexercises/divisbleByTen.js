let a = [1,2,3,4,5,6,100,10]
let b = ((num) =>{
    if(num%10==0){
        return true
    }
    return false
})
console.log(a)
console.log(a.filter(b))