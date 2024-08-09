let obj = {
    userName: "hemeswar",
    age: 19,
    id: 6,
    1: "two", 
    junnu: function()  {
        return this.userName;
    }
}
let userName = "userName";
console.log(obj.junnu());

