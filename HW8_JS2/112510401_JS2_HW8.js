const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const operatorSelect = document.getElementById("operator");
const calculateButton = document.getElementById("calculate");
const resultDisplay = document.getElementById("result");
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
function calculate() {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const operator = operatorSelect.value;
    let result;
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                resultDisplay.textContent = "Result = Division by zero is not allowed";
                return;
            }
            result = num1 / num2;
            break;
        default:
            resultDisplay.textContent = "Result = Invalid operator";
            return;
    }
resultDisplay.textContent = "Result = " + result.toFixed(2);
}
calculateButton.addEventListener("click", calculate);