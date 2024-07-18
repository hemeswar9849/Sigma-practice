let rand = Math.random()
// document.body.style.backgroundColor = "red"
alert(rand)
if(rand<=0.2){
    document.body.style.backgroundColor = "red"
}
else if(rand>=0.2 && rand <= 0.4){
    document.body.style.backgroundColor = "yellow"
}
else if(rand>=0.4 && rand <= 0.6){
    document.body.style.backgroundColor = "white"
}
else if(rand>=0.6 && rand <= 0.8){
    document.body.style.backgroundColor = "black"
}
else{
    document.body.style.backgroundColor = "green"
}