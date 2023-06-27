let details = ["7868190130M7522", "5303914400F9211", "9273338290F4010"];

let countSeniors = function (details) {
    let str = ""
    let arr = [];
    let count = 0;

    for (let i = 0; i < details.length; i++) {
        for (let j = 11; j <= 12; j++) {
            str += details[i][j];
        }
        arr.push(str);
        str = "";
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 60) {
            count++;
        }
    }
    return count;
};

console.log(countSeniors(details));