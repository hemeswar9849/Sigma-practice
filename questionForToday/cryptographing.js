const SECURE = {
    's': '$',
    'and': '&',
    'a': '@',
    'o': '0',
    'i': 1,
    '1': '!',
    'I': '|'
}

//a method
// const PASSWORD = 'Indian';
// let anotherPassword = '';
// for (let index = 0; index < PASSWORD.length; index++) {
//     let isEqual = false;
//     for (const key in SECURE) {
//         if (key === PASSWORD[index]) {
//             anotherPassword = anotherPassword + SECURE[key];
//             isEqual = true;
//             break;
//         }
//     }
//     if(isEqual === false){
//         anotherPassword = anotherPassword + PASSWORD[index];
//     }
// }

// console.log(anotherPassword);


//second method 
let PASSWORD = 'Indian';
let anotherPassword = '';
for (const key in SECURE) {
    PASSWORD = PASSWORD.replace(key, SECURE[key]);
}

console.log(PASSWORD);