const numBtns = document.querySelectorAll(".btn");
const displayDiv = document.querySelector(".display");

function add(num1,num2) {
    return num1 + num2;
}

function subtract(num1,num2) {
    return num1 - num2;
}

function multiply(num1,num2) {
    return num1 * num2;
}

function divide(num1,num2) {
    return num1 / num2;
}

function operate(num1, operator, num2) {
    switch(operator) {
        case "+":
            return add(num1,num2);
        case "-":
            return subtract(num1,num2);
        case "×":
            return multiply(num1,num2);
        case "÷":
            return divide(num1,num2);
    }
}

function checkOperation(str) {
    let operators = ["+", "-", "×","÷"];
    for (let op of operators) {
        index = str.indexOf(op);
        if (index > 0) {
            return {
                num1: parseInt(str.substring(0, index)),
                operator: op,
                num2: parseInt(str.substring(index + 1, str.length))
            }
        }
    }
}

numBtns.forEach((btn) => btn.addEventListener("click", () => {
    if (btn.textContent === "C") {
        displayDiv.textContent = "";
    }
    else if (btn.textContent === "=") {
        expression = checkOperation(displayDiv.textContent);
        displayDiv.textContent = operate(expression.num1, expression.operator, expression.num2);
    }
    else {
        displayDiv.textContent += btn.textContent;
    }
}));