let n = 7;

let sumOfMultiples = function (n) {
    let x = 0;
    for (let i = 3; i <= n; i++) {
        if (i % 3 == 0 || i % 5 == 0 || i % 7 == 0) {
            x += i;
        }
    }
    return x;
};

console.log(sumOfMultiples(n));

