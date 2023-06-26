let s = "book";

let halvesAreAlike = function (s) {

    let str1 = "";
    let str2 = "";
    let count1 = 0;
    let count2 = 0;

    for (let i = 0; i < s.length / 2; i++) {
        if (s[i] == "a" || s[i] == "e" || s[i] == "i" || s[i] == "o" || s[i] == "u" || s[i] == "A" || s[i] == "E" || s[i] == "I" || s[i] == "O" || s[i] == "U") {
            count1++;
        }
        str1 += s[i];
    }

    for (let i = s.length - 1; i >= s.length / 2; i--) {
        if (s[i] == "a" || s[i] == "e" || s[i] == "i" || s[i] == "o" || s[i] == "u" || s[i] == "A" || s[i] == "E" || s[i] == "I" || s[i] == "O" || s[i] == "U") {
            count2++;
        }
        str2 += s[i];
    }

    if (count1 == count2) {
        return true;
    }
    else {
        return false;
    }

};

console.log(halvesAreAlike(s));