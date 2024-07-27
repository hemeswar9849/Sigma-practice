

























// async function getdata() {
//     try {
//         console.log("Fetching data...");
//         let f = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//         console.log("Response received:", f);
//         let a = await f.json();
//         console.log("Data parsed:", a);
//         return a;
//     } catch (error) {
//         console.error("Error fetching data:", error);
//     }
// }

// async function main() {
//     try {
//         console.log("Calling getdata...");
//         let b = await getdata();
//         console.log("Fetched data:", b);
//     } catch (error) {
//         console.error("Error in main function:", error);
//     }
// }
// main();
// async function getdata() {
//     let f = await fetch("https://jsonplaceholder.typicode.com/todos/1")
//     let a = await f.text()
//     return a
// }
// async function main() {
//     let b = await getdata()
//     console.log(b)
// }
// main()
// // async function a(){
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then((e) => {
//         console.log("Your data is Fetched successfully");
//         console.log(e);
//     })
// }
// a()
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(data => {
//     console.log(data); // Process the data
//   })
