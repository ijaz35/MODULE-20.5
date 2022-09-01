function displayNumbers(number) {
    let numbers = [];
    for (let i = 0; i <= number; i++) {
        numbers[i] = i;
    }
    return numbers;
}
var display = 100;
var showNumbers = displayNumbers(display);
console.log(showNumbers);