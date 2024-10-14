// let file = require('fs');

// const readTheFile = (error, data) => {
//   console.log(data);
// };
// //                 \file path \encoded  \callback
// // file.readFile('./calc.js','utf-8', readTheFile);

// //
// // const thediv = () => {
// //   return `
// // const div = (a, b) => {
// //   return a, b;
// // }`;
// // }

// // file.readFile('./import.js',(data) => {
// //   console.log(data);
// // })
// console.log('hi');
// file.writeFile('hems.txt', 'My name is hemeswar reddy');

// // file.appendFile('./calc.js', thediv(), () => {
// //   console.log('hi');
// // });


const fs = require('fs');

// fs.writeFile('hems.txt', 'My sister name is meghana');
// fs.appendFile('./hems.txt','\nAnd my mother name is rajeswari', (err) =>{
//   if(err){
//     console.log(err);
//   } else {
//     console.log('Data added successfully');
//   }
// });
// fs.readFile('hems.txt',(err, data) => {
//   if(err){
//     console.log(err);
//   } else {
//     console.log(data.toString());
//   }
// })
// fs.unlink('hems/hens.txt',(err) => {
//   console.log(err);
// })
// fs.mkdir('hems',(err) => {
//   console.log(err);
// })
// fs.readdir('./hems',(err, files) => {
//   console.log(files);
// })
// fs.rmdir('./hems',(err) => {
//   if(err){
//     console.log(err);
//   } else{
//     console.log('successful');
//   }
// });
fs.watchFile('hems.txt',(curr, prev) => {
  console.log(curr);
  console.log(prev);
})
