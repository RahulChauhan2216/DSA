let words = ["cd","ac","dc","ca","zz"];

let maximumNumberOfStringPairs = function (words) {
    let x = "";
    let count = 0;

    for (let i = 0; i < words.length; i++) {
        for (let j = words[i].length - 1; j >= 0; j--) {
            x += words[i][j];
        }
        for (let k = i + 1; k < words.length; k++) {
            if (x == words[k]) {
                count++
            }
        }
        x = ""
    }
    return count;
};

console.log(maximumNumberOfStringPairs(words));
