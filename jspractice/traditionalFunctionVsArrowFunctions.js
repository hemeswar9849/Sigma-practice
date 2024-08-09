function userName(name) {
    this.name = name;
    return this.name;
}
console.log(userName("hemeswar"));
 
















// let sum = (...args) => {
//     return args;
// }
// console.log(sum(1,23,46,5));
// function sum() {
//     return arguments[0];
// }
// console.log(sum(1));

// let aObject = {
//     userName : "Hemeswar",
//     hems () {
//         return this.userName;
//     },
//     hemes : () => {
//         return this.userName; //not works
//     }
// }
// console.log(aObject.hems());
// console.log(aObject.hemes());

//syntax
// let aFunction = function () {
//     console.log("This a traditional function");
     
// }
// aFunction();
// let aArrowFunction = () => {
//     console.log("This an arrow function");
// }
// aArrowFunction();