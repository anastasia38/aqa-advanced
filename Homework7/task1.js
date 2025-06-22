function handleNum() {
    console.log("number is even");
}

function handleOdd() {
    console.log("number is odd");
}

function handleEven() {
    console.log("number is even");
}

function handleNum(number, evenCallback, oddCallback) {
    if (number % 2 === 0) {
        evenCallback();
    } else {
        oddCallback();
    }
    }

    handleNum(4, handleEven, handleOdd);
    handleNum(7, handleEven, handleOdd);