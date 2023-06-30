let n = 1;

let generateTheString = function (n) {

    let alpha = "abcdefghijklmnopqrstuvwxyz"
    let str = "";

    if (n == 1) {
        return "a"
    }

    if (n % 2 == 0) {
        for (let i = 0; i < n - 1; i++) {
            str += "a"
        }
        str += "b"
        return str;
    }

    if (n >= 3 && n % 2 != 0) {
        for (let i = 0; i < n - 2; i++) {
            str += "a"
        }

        for (let i = 1; i < 3; i++) {
            str += alpha[i];
        }
        return str;
    }

};

console.log(generateTheString(n));

