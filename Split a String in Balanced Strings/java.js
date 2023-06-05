let s = "RLRRLLRLRL";

function str(s) {
    let count = 0;
    let total = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "R") {
            count++
        }
        else if (s[i] === "L") {
            count--
        }

        // -----
        else if (count == 0) {
            total++
        }
    }
    return total;
};

console.log(str(s));