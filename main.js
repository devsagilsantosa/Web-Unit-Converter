const convertBtn = document.getElementById("convertBtn");
const inputField = document.getElementById("inputValue");

const lengthOutput = document.getElementById("lengthOutput");
const volumeOutput = document.getElementById("volumeOutput");
const massOutput = document.getElementById("massOutput");

const CONVERTION_FACTORS = {
    METER_TO_FEET: 3.28084,
    LITER_TO_GALON: 0.264172,
    KILO_TO_POUNDS: 2.20462,
};

convertBtn.addEventListener("click", function () {
    const inputValue = Number(inputField.value);
    if (isNaN(inputValue) || inputValue < 0) {
        alert("Please ennter a valid number");
        return;
    }

    const meterToFeet = convertUnitMultiply(inputValue, CONVERTION_FACTORS.METER_TO_FEET);
    const feetToMeter = convertUnitDevide(inputValue, CONVERTION_FACTORS.METER_TO_FEET);
    const literToGallon = convertUnitMultiply(inputValue, CONVERTION_FACTORS.LITER_TO_GALON);
    const gallonToLiter = convertUnitDevide(inputValue, CONVERTION_FACTORS.LITER_TO_GALON);
    const kiloToPound = convertUnitMultiply(inputValue, CONVERTION_FACTORS.KILO_TO_POUNDS);
    const poundToKilo = convertUnitDevide(inputValue, CONVERTION_FACTORS.KILO_TO_POUNDS);

    lengthOutput.textContent = formatOutput(inputValue, "meter", meterToFeet, "feet", feetToMeter);
    volumeOutput.textContent = formatOutput(inputValue, "liters", literToGallon, "gallons", gallonToLiter);
    massOutput.textContent = formatOutput(inputValue, "pounds", kiloToPound, "kilograms", poundToKilo);

    inputField.value = "";
    inputField.focus();
});

function convertUnitMultiply(value, factor) {
    return (value * factor).toFixed(3);
}

function convertUnitDevide(value, factor) {
    return (value / factor).toFixed(3);
}

function formatOutput(value, unit1, result1, unit2, result2) {
    return `${value} ${unit1} = ${result1} ${unit2} | ${value} ${unit2} = ${result2} ${unit1}`;
}
