let rowCount = 0; 
const mathValues = [];
const englishValues = [];
document.getElementById("button").addEventListener("click", function () {
    const mathInput = parseFloat(document.getElementById("input1").value);
    const englishInput = parseFloat(document.getElementById("input2").value);
    const rowAverage = ((mathInput + englishInput) / 2).toFixed(2);
    rowCount++;
    const tableBody = document.getElementById("tableBody");
    const newRow = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.textContent = rowCount;
    newRow.appendChild(td1);
    let td2 = document.createElement("td");
    td2.textContent = mathInput.toFixed(0);
    newRow.appendChild(td2);
    let td3 = document.createElement("td");
    td3.textContent = englishInput.toFixed(0);
    newRow.appendChild(td3);
    let td4 = document.createElement("td");
    td4.textContent = rowAverage;
    newRow.appendChild(td4);
    mathValues.push(mathInput);
    englishValues.push(englishInput);
    updateAverages();
    tableBody.appendChild(newRow);
    document.getElementById("input1").value = '';
    document.getElementById("input2").value = '';
});
function updateAverages() {
    const mathAvg = calculateAverage(mathValues).toFixed(2);
    const englishAvg = calculateAverage(englishValues).toFixed(2);
    const overallAvg = (
        (parseFloat(mathAvg) + parseFloat(englishAvg)) / 2
    ).toFixed(2);
    document.getElementById("mathAvg").textContent = mathAvg;
    document.getElementById("englishAvg").textContent = englishAvg;
    document.getElementById("overallAvg").textContent = overallAvg;
}
function calculateAverage(values) {
    let sum = 0;
    for (let i = 0; i < values.length; i++) {
        sum += values[i];
    }
    return sum / values.length;
}