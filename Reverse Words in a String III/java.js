let s = "Let's take LeetCode contest";

let reverseWords = function (s) {
    let x = s.split(" ");
    let str = ""

    for (let i = 0; i < x.length; i++) {
        for (let j = x[i].length - 1; j >= 0; j--) {
            str += (x[i][j]);
        }
        if (i< x.length-1) {
            str += " "
        }
    }
    return str;
};

console.log(reverseWords(s));
