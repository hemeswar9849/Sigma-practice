let result = document.getElementById("result");
let input = document.getElementById("hems");

input.addEventListener('change', (event) => {
    let eventInput = event.target.value;
    let arrayOfInput = Array.from(eventInput);
    calculate(arrayOfInput);
})
let calculate = ((anArray) => {
    let expression;
    let evaluation = parseFloat(anArray[0]);
    for (const element of anArray) {
        if(element === '+' || element === '-' || element === '*' || element === '/' || element === '%'){
           expression = element;
        } else {
            let int = parseInt(element);
            if(element !== anArray[0]){
                switch (expression) {
                    case "+":
                        evaluation = evaluation + int;
                        break;
                    case "-":
                        evaluation = evaluation - int;
                        break;
                    case "/":
                        evaluation = evaluation / int;
                        break;
                    case "*":
                        evaluation = evaluation * int;
                        break;
                    case "%":
                        evaluation = evaluation % int;
                        break;
                    default:
                        console.log("invalid operation");
                        break;
                }
            }
        }
    }
    // console.log(evaluation);
    let answer = document.getElementById("answer");
    answer.textContent = evaluation;
})