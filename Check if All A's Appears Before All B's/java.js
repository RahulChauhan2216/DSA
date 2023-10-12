let s = "aaabbb";

var checkString = function (s) {
    return s.split("").sort().join("") == s;
};

console.log(checkString(s));
