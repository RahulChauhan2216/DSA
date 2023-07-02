let s = "aaab";

let areOccurrencesEqual = function (s) {

    let obj = {};
    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]] == undefined) {
            obj[s[i]] = 1;
        }
        else {
            obj[s[i]] += 1;
        }
    }

    let count = obj[s[0]];

    for (let key in obj) {
        if (obj[key] != count) {
            return false;
        }
    }
    return true;
};

console.log(areOccurrencesEqual(s));

