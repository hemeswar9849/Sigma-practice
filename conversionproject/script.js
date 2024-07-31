let link = "https://2024-03-06.currency-api.pages.dev/v1/currencies/"
let countryfrom = document.querySelector("#from")
console.log(countryfrom.value);
let countryto = document.querySelector("#to")
console.log(countryto.value);
let select = document.querySelectorAll("select")

for (const iterator of select) {
    for (const key in countryList) {
        let options = document.createElement("option")
        options.value = countryList[key]
        options.innerText = countryList[key]
        iterator.append(options)
    }
    iterator.addEventListener("change", (evt)=>{
        updateflag(evt.target)
    })
}
function updateflag(element){
    let curcode = element.value;
    let image = element.parentElement.querySelector("img")
    image.src = `https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/${curcode.toLowerCase()}.png`
}

  
// let fetching = async () =>{
//     let convert = await fetch(`${link}${countryfrom}.json`);
//     let data = await convert.json();
//     value = data
//     console.log(value)
// }
// let getdata = async () =>{
//     await fetching();
// }
// getdata()
