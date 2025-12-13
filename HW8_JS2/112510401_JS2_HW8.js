const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const operatorSelect = document.getElementById("operator");
const calculateButton = document.getElementById("calculate");
const resultDisplay = document.getElementById("result");

// 運算 functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return null; 
    }
    return a / b;
}

// 主計算 function 
function calculate() {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const operator = operatorSelect.value;

    if (isNaN(num1) || isNaN(num2)) {
        resultDisplay.textContent = "Result = Please enter valid numbers";
        return;
    }

    let result;

    switch (operator) {
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = subtract(num1, num2);
            break;
        case "*":
            result = multiply(num1, num2);
            break;
        case "/":
            result = divide(num1, num2);
            if (result === null) {
                resultDisplay.textContent = "Result = Division by zero is not allowed";
                return;
            }
            break;
        default:
            resultDisplay.textContent = "Result = Invalid operator";
            return;
    }

    resultDisplay.textContent = "Result = " + result.toFixed(2);
}

calculateButton.addEventListener("click", calculate);

// 下拉選單改變時更新按鈕文字
operatorSelect.addEventListener("change", function () {
    const operator = operatorSelect.value;

    switch (operator) {
        case "+":
            calculateButton.textContent = "Add";
            break;
        case "-":
            calculateButton.textContent = "Subtract";
            break;
        case "*":
            calculateButton.textContent = "Multiply";
            break;
        case "/":
            calculateButton.textContent = "Divide";
            break;
    }
});
