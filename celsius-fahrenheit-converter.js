//celsius to fahrenheit converter
function celsiusToFahrenheitConverter(celsius) {
    var fahrenheit = (celsius * 9) / 5 + 32;
    return fahrenheit;
}
var celsiusValue = 0;
var fahrenheitValue = celsiusToFahrenheitConverter(celsiusValue);
console.log(fahrenheitValue);

//fahreneit to celsius converter

function fahreneitToCelsiusConverter(fahreneit) {
    var celsiusValue = (fahreneit - 32) * 9 / 5;
    return celsiusValue;
}
let fahreneitValue = 32;
let celsius = fahreneitToCelsiusConverter(fahreneitValue);
console.log(celsius);