let accounts = [[1, 2, 3], [3, 2, 1]];

let maximumWealth = function (accounts) {
    let arr = [];
    let x = 0;

    for (let i = 0; i < accounts.length; i++) {
        for (let j = 0; j < accounts[i].length; j++) {
            x += accounts[i][j];
        }
        arr.push(x);
        x = 0;
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > x) {
            x = arr[i];
        }
    }
    return x;

};

console.log(maximumWealth(accounts));