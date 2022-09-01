//কেউ ১০০ এর মধ্যে কত মার্ক্স্ পেয়েছে সেটা তোমাকে বলে দিবে। তুমি একটা ফাংশন দিয়ে বলে দিবে সে এ+ পাবে নাকি অন্য কোন গ্রেড পাবে। 
//if else
function tellGrade(number) {
    if (number < 50) {
        return 'your grade is F';
    } else if (number > 50 && number < 60) {
        return 'your grade is D';
    } else if (number > 60 && number < 70) {
        return 'your grade is C';
    } else if (number > 70 && number < 80) {
        return 'your grade is B';
    } else if (number > 80 && number < 90) {
        return 'your grade is A';
    } else if (number > 90) {
        return 'your grade is A+';
    }
}
var grade = tellGrade(46);
console.log(grade);

//by SWITCH
function gradeChecker(number) {
    switch (true) {
        case number < 50:
            return 'your grade is F';
            break;
        case number > 50 && number < 60:
            return 'your grade is D';
            break;
        case number > 60 && number < 70:
            return 'your grade is C';
            break;
        case number > 70 && number < 80:
            return 'your grade is B';
            break;
        case number > 80 && number < 90:
            return 'your grade is A';
            break;
        default:
            return 'your grade is A+';


    }
}
let yourGrade = gradeChecker(90);
console.log(yourGrade);