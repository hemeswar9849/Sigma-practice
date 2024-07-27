class person{
    constructor(name){
        this.name = name;
    }
    get name(){
        return this._name;
    }
    set name(newname){
        this._name = newname;
    }
}
class employee extends person{
    constructor(name){
        super(name)
    }
    id(eid){
        this.eid = eid;
    }
}
let a = new person("hemeswar");
console.log(a);
let b = new employee("mounisha")
b.id(23)
console.log(b);
console.log(a instanceof person );
// a instanceof employee
// false
// b instanceof employee
// true
// b instanceof person
// true























// class math{
//     static add(a,b){
//         console.log(a+b) ;
//     }
//     static sub(a,b){
//         console.log(a-b);
//     }
// }
// math.add(1,2)
// math.sub(1,2)

// class fruit{
//     eatable(){
//         console.log("may be yes")
//     }
//     sweet(){
//         console.log("may be yes");
//     }
// }
// let a = new fruit

// a.eatable()
// class clgstu{
//     constructor(name){
//         this.name = name;
//     }
//     stu(){
//         console.log(this.name)
//     }
// }
// let student = new clgstu("hemeswar") //to create a new instance
// student.stu()
// class clgnss extends clgstu{
//     constructor(name){
//         super(name)
//         console.log(name)
//     }
//     printstu(){
//         super.stu()
//         console.log(this.name)
//     }
// }
// let nssstudent = new clgnss("mounisha")
// nssstudent.printstu()
