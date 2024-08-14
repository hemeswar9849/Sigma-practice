const AN_INTEGER = -12345;

let temp = AN_INTEGER;

let count = 0;
while (temp !== 0) {
    temp = parseInt(temp / 10);
    count++;
}
console.log(count);

