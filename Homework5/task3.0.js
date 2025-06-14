const number = 3;

console.log("Таблиця множення для числа", number, "з використанням циклу for:");

for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}

const numberForWhile = 8;

console.log("Таблиця множення для числа", numberForWhile, "- з використанням циклу while:");

let j = 1;
while (j <= 10) {
    console.log(`${numberForWhile} x ${j} = ${numberForWhile * j}`);
    j++;
}