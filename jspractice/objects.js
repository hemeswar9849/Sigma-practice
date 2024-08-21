//singleton
// const facebook = new Object();
// facebook.name = 'hemeswar98';
// console.log(facebook);









//object literals

let sym = Symbol("key1");
let obj = {
    userName: "hemeswar98",
    age: 19,
    id: 6,
    1: "two",
    [sym]: 'key1',
    fullName: {
        firstName: 'Hemeswar',
        lastName: 'Reddy',
        surname: 'Bogolu'
    },
    junnu: function () {
        console.log(this.userName);
    }
}
// console.log(obj?.fullName?.name?.firstName);

let obj2 = Object.assign({
    email: "hemeswarreddy74@gmail.com"
}, obj);
// console.log(obj2);
//spread operator
// let obj3 = {...obj,...obj2};
// console.log(Object.entries(obj));
// console.log(Object.values(obj));
// console.log(obj.hasOwnProperty('fullName'));
const {fullName: name} = obj;

console.log(name);

// console.log(obj3,obj);
// console.log(Object.isFrozen(obj2));
// obj.fullName = 'Bogolu Hemeswar Reddy';
// Object.freeze(obj);
// obj.fullName = 'Bogolu Hemeswar';
// obj.junnu();


// let userName = "userName";
// console.log(obj.junnu());
// let arr = [1,2,
//     {
//         userName: "hemes",
//         age: 19,
//         pin: 6
//     },
//     3,4];
// const obj = {
//     arr,
//     age : 19
// }
// console.log(obj);
// console.log(arr);
// [1,2,3,4,5,6,7,8].forEach(item => (console.log(item)))

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(arr);



