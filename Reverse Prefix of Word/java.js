let word = "abcdefd", ch = "d";
let reversePrefix = function (word, ch) {
    let x = 0;
    let y = "";
    let z = "";

    for (let i = 0; i < word.length; i++) {
        if (word[i] == ch) {
            x = i;
            break;
        }
    }

    for (let i = x; i >= 0; i--) {
        y += word[i];
    }

    for (let i = x + 1; i < word.length; i++) {
        z += word[i];
    }

    return y + z;
};

console.log(reversePrefix(word, ch));

