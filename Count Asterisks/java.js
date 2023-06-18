let s = "l|*e*et|c**o|*de|";

let countAsterisks = function (s) {

    let count = 0;
    let bar = 0

    for (let i = 0; i < s.length; i++) {
        if (s[i] == "|") {
            bar++
        }
        if (bar % 2 == 0 && s[i] == "*") {
            count++
        } 
    }
    return count
};

console.log(countAsterisks(s));
