let words = ["are", "amy", "u"], left = 0, right = 2

let vowelStrings = function (words, left, right) {

    let count = 0;
    let str1 = "";
    let str2 = "";
    for (let i = left; i <= right; i++) {

        for (let j = 0; j < 1; j++) {
            str1 = words[i][0];
            str2 = words[i][words[i].length - 1];
        }

        if ((str1 == "a" || str1 == "e" || str1 == "i" || str1 == "o" || str1 == "u") &&
            (str2 == "a" || str2 == "e" || str2 == "i" || str2 == "o" || str2 == "u")) {
            count++

        }
    }
    return count;
};

console.log(vowelStrings(words, left, right));
// vowelStrings(words, left, right);