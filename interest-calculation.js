//সুদের হিসাব করবে। জাস্ট হিসাব কেমনে করতে হয়। সেই চিন্তায় করবে। সুদ ভালো না খারাপ সেটা এখন চিন্তা করার দরকার নাই। জাস্ট একটা ফর্মুলা থাকলে সেটা কিভাবে কোড এ লিখতে হয় সেই এঙ্গেল থেকে করার চেষ্টা করো। 
//Interest(I) = capital (P) * time (n) * r/100 (interest-rate);

function calculateInterest(capital, time, interestRate) {
    let interestValue = capital * time * interestRate / 100;
    return interestValue;
}
let capitalValue = 800;
let timeValue = 2;
let interestRateValue = 8;
let interest = calculateInterest(capitalValue, timeValue, interestRateValue);
console.log(interest);