let num = "51230100";

let removeTrailingZeros = function (num) {

    let x = num.split("");
    for (let i = x.length - 1; i >= 0; i--) {
        if (x[i] == "0") {
            x[i] = "";
        }
        else {
            return x.join("");
        }
    }
};

console.log(removeTrailingZeros(num));

