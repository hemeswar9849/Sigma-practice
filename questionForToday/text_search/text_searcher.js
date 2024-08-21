const SEARCH_INPUT = document.getElementById('search');
let PARAGRAPH = document.getElementById('aPara');



SEARCH_INPUT.addEventListener('change', (text) => {
    let search = text.target.value;
    let aPara = PARAGRAPH.innerText;
    aPara = aPara.split(" ");
    for(let element of aPara){
        element = element.toLowerCase();
        if(search === element){
            let span = document.createElement('span');
            span.className = 'result';
            console.log(search);
        }
    }
});

document.write('<span class="result">Hemes</span>')
