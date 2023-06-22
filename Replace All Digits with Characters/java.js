let s = "a1c1e1";

let replaceDigits = function (s) {

    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    let str = "";
    let c1 = 0;
    let c2 = 0;

    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            if (s[i] == alphabet[j]) {
                if (!s[i + 1]) {
                    str += s[i]
                }
                else {
                    c1 = j;
                    c2 = j + (+s[i + 1]);
                    str += s[i] + alphabet[c2]
                }
            }

        }
    }
    return str;

};

console.log(replaceDigits(s));