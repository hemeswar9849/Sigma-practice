let obj = {
    uName : "hemeswar",
    age : 19,
    userId : 6    
}
let arr = [1,2,3,5,4,6];
for (const key in Object.keys(obj)) {
    console.log(key,obj[key]);
}