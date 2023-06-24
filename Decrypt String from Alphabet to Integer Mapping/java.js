let s = "10#11#12";

let freqAlphabets = function (s) {

    let obj = {};

    let str = ""

    let alphabet = "abcdefghijklmnopqrstuvwxyz";

    let output = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10#", "11#", "12#", "13#", "14#", "15#", "16#", "17#", "18#", "19#", "20#", "21#", "22#", "23#", "24#", "25#", "26#"];

    for (let i = 0; i < alphabet.length; i++) {
        if (obj[output[i]] == undefined) {
            obj[output[i]] = alphabet[i]
        }
    }

    for (let i = 0; i < s.length; i++) {
        if (s[i + 2] == "#") {
            let sub = s[i] + s[i + 1] + s[i + 2];
            str += obj[sub];
            i += 2;
        }
        else {
            str += obj[s[i]]
        }
    }
   return str;

};

console.log(freqAlphabets(s));



