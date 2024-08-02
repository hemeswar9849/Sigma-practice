let link = "https://2024-03-06.currency-api.pages.dev/v1/currencies/"
let select = document.querySelectorAll("select")
const button = document.querySelector("#btn")
for (const iterator of select) {
    for (const key in countryList) {
        let options = document.createElement("option")
        options.value = countryList[key]
        options.innerText = countryList[key]
        iterator.append(options)
    }
    iterator.addEventListener("change", (evt) => {
        updateflag(evt.target)
    })
}
function updateflag(element) {
    let curcode = element.value;
    let image = element.parentElement.querySelector("img");
    image.src = `https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/${curcode.toLowerCase()}.png`;
}
button.addEventListener("click", async () => {
    // console.log(countryto.value);
    // console.log(countryfrom.value);
    let countryfrom = document.querySelector("#from").value
    console.log(countryfrom);
    for (const key in countryList) {
        if (countryList[key] == countryfrom) {
            countryfrom = key;
        }
    }
    let countryto = document.querySelector("#to").value
    console.log(countryto)
    for (const key in countryList) {
        if (countryList[key] == countryto) {
            countryto = key;
        }
    }
    const convert = (rate) => {

    }
    let fetching = async () => {
        let convert = await fetch(`${link}${countryfrom.toLowerCase()}.json`);
        let data = await convert.json();
        console.log(data)
        const rate = data.usd[countryto]
        console.log(rate);
    }
    let getdata = async () => {
        await fetching();
    }
    getdata()


})
document.addEventListener("DOMContentLoaded", () => {
    let from = document.querySelector("#from");
    let usd = document.querySelector("#from option").value = 
})