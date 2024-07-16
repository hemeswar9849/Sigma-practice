let student = {
    "stu_name": "hemeswar reddy",
    "stu_id": "006",
    "year": "third year",
    "DOB": "18/12/2005",
    "DOJ": "18/12/2005"
}
// console.log(student)
// for (const key in student) {
//      const element = student[key];
//      console.log(key +" : "+element)
//     //  console.log("${key} is ${element}")
// }
for (const iterator of student.stu_name) {
    console.log(iterator)
}