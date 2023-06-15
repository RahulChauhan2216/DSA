let word1 = "abcde", word2 = "pqr";

let mergeAlternately = function (word1, word2) {

    let x = word1.split('');
    let y = word2.split('');

    let result = "";

    for (let i = 0; i < x.length || i < y.length; i++) {

        if (x[i] == "" || y[i] == "") {
            result += "";
        }
        result += x[i] + y[i];
    }
    return result;
};

console.log(mergeAlternately(word1, word2));

