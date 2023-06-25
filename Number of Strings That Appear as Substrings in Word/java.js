let patterns = ["a", "abc", "bc", "d"], word = "abc";


let numOfStrings = function (patterns, word) {

    let count = 0;
    for (let i = 0; i < patterns.length; ++i) {
        let p = patterns[i];
        let w = word.split(p);
        console.log(w);
        if (w.length > 1) {
            count++
        }
    }
    return count;
};

console.log(numOfStrings(patterns, word));

