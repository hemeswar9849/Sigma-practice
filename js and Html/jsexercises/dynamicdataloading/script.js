function dataentry(title,channel,views,date,time,thumbnail) {
    let time1 = document.getElementById("time")
    let title1 = document.getElementById("title")
    let channel1 = document.getElementById("cname")
    let views1 = document.getElementById("views")
    let date1 = document.getElementById("date")
    let thumbnail1 = document.getElementById("thumbnail")
    function viewsconvert(){
        if(views>1000 && views<1000000){
            let temp = views/1000;
            return `${temp}k`
        }
        else if(views>=1000000){
            let temp = views/1000000;
            return `${temp}M`;
        }
        else{
            return views;
        }
    };
    time1.innerText = time
    title1.innerText = title
    channel1.innerText = channel
    views1.innerText = viewsconvert()
    date1.innerText = date
    thumbnail1.src  = thumbnail
}
dataentry("Installing VS code & How Website Work | Sigma Web Development Course-Tutorial #1","CodeWithHarry",1000000,"1 year ago","31:30","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDxR2Iy74ubFQvvf2uP0BepdJ_GNw")