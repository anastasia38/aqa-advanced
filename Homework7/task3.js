function divide(numerator, denominator) {
    if (typeof numerator != 'number' || typeof denominator !== 'number') {
        throw new Error('Обидва аргумента мають бути числами');
    }

    if (denominator === 0) {
       throw new Error('Ділення на нуль неможливе');
    }

    return numerator / denominator;
}

const testCases = [
    [10, 2],
    [8, 0],
    ['10', 2],
    [10, 'a'],
    [15, 3],
];

for (const [numerator, denominator] of testCases) {
    try {
    const result = divide(numerator, denominator);
    console.log(`Результат: ${result}`);
} catch (error) {
console.error(`Помилка: ${error.message}`);

} finally {
    console.log('Робота завершена');
    console.log('---');
}
}