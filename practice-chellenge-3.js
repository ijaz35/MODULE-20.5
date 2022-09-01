//৫০ থেকে ৮০ এর মধ্যে যতো বিজোড় সংখ্যা আছে সেগুলাকে দেখাবে।
//Showing number by series

function showNumbers() {
    var oddNumbersSeries = [];
    var item = 0;
    for (var i = 50; i <= 80; i++) {
        if (i % 2 != 0) {
            oddNumbersSeries[item] = i;
            item = item + 1;
        }
    }
    return oddNumbersSeries
}
var oddNumbers = showNumbers();
console.log(oddNumbers);

//Showing even Numbers in console
function numberViewer() {
    var i = 80;
    while (i >= 50) {
        if (i % 2 == 0) {
            console.log(i);
        }
        i--;
    }
}
var oddNumber = numberViewer();









