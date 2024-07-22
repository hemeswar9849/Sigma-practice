async function getdata(){
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            resolve("and also he teaches well")
            console.log("harry is the best developer in the world")
        }, 3000);
     })
}
async function main(){
    let a = await getdata().then(
        (x) => { 
            console.log(x)
         }
    )
    console.log("Code has to be execute")
}
main()
// async function prom(){
//     return new Promise((resolve, reject) => { 
//         resolve
//      })
// }