function convertTemperature() {
    let tempInput = document.getElementById("tempInput").value;
    let unit = document.getElementById("unit").value;
    let resultElement = document.getElementById("result");
    let errorElement = document.getElementById("error");

    errorElement.textContent = "";
    resultElement.textContent = "";

    if (isNaN(tempInput) || tempInput.trim() === "") {
        errorElement.textContent = "Please enter a valid number.";
        return;
    }

    let temp = parseFloat(tempInput);
    let convertedTemp, resultText;

    if (unit === "C") {
        convertedTemp = (temp * 9/5) + 32;
        resultText = `${temp} °C is ${convertedTemp.toFixed(2)} °F`;
    } else {
        convertedTemp = (temp - 32) * 5/9;
        resultText = `${temp} °F is ${convertedTemp.toFixed(2)} °C`;
    }

    resultElement.textContent = resultText;
}
