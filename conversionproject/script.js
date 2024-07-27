let link = "https://2024-03-06.currency-api.pages.dev/v1/currencies/"
let countryfrom = "usd"
let countryto = "inr"
function getNestedProperty(obj, path) {
    return path.reduce((acc, key) => (acc && acc[key] !== undefined) ? acc[key] : undefined, obj);
}
let fetching = async () =>{
    let convert = await fetch(`${link}${countryfrom}.json`);
    let data = await convert.json();
    console.log(data.)
}
let getdata = async () =>{
    await fetching();
}
getdata()
