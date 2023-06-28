let words = ["lewsmb","lewrydnve","lewqqm","lewec","lewn","lewb","lewedb"], pref = "lew"

let prefixCount = function (words, pref) {
    let str = ""
    let count = 0;

    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < pref.length; j++) {
            str += words[i][j];
        }
        if (str == pref) {
            count++;
            str = ""
        }
        else {
            str = ""
        }
    }
    return count;

};

console.log(prefixCount(words, pref));
