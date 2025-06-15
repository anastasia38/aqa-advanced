function calculateAreaDeclaration(width, height) {
    return width * height;
}

const result1 = calculateAreaDeclaration(3, 8);
console.log("Function Declaration:", result1);

const calculateAreaExpression = function(width, height) {
    return width * height;
};

const result2 = calculateAreaExpression(2, 7);
console.log("Function Expression:", result2);

const calculateAreaArrow = (width, height) => {
    return width * height;
};

const result3 = calculateAreaArrow(4, 9);
console.log("Arrow Function:", result3);