let s = "K1:L2"

let cellsInRange = function (s) {

    let arr = []
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let r1 = s[1];
    let r2 = s[4];
    let c1;
    let c2;

    for (let i = 0; i < alphabet.length; i++) {

        if (s[0] === alphabet[i]) {
            c1 = i;
        }
        if (s[3] === alphabet[i]) {
            c2 = i;
        }
    }

    for (let i = c1; i <= c2; i++) {
        for (let j = r1; j <= r2; j++) {
            arr.push(alphabet[i] + j)
        }
    }

    return arr;
};

console.log(cellsInRange(s));
