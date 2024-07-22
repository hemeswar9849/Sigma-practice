// alert("This is a settimeout")
// let a = setTimeout(() => {
//     alert("sorry for the delay")
// }, 10000);
// let a = setInterval(() => {
//     alert("this is repeated")
// }, 2000)
let a = document.querySelector(".btn");
a.addEventListener("click", (e)=>{
    // let b = document.createElement("p")
    // b.innerHTML  = "You clicked on me"
    // document.body.append(b)
    let c = document.getElementById("container")
    c.insertAdjacentHTML("afterbegin", "p")
})
a.removeEventListener("click", (e)=>{
    // let b = document.createElement("p")
    // b.innerHTML  = "You clicked on me"
    // document.body.append(b)
    let c = document.getElementById("container")
    c.insertAdjacentHTML("afterbegin", "n")
})