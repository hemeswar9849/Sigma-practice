let a = e => {
    while(true){
    let age = parseInt(prompt("Enter your age"))
    if(age<=0){
        console.error("You entered invalid age")
    }
    if(age>=18){
        alert("You can drive")
    }
    else{
        alert(`You can't drive because your age is ${age}`)
    }
    let confrm = confirm("Do you want to re-enter your age")
    if(confrm==false){
        return
    }
}
}
a()