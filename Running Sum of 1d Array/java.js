let nums = [1, 2, 3, 4];

var runningSum = function (nums) {
    let arr = [];
    let x = 0;

    for (let i = 0; i < nums.length; i++) {
        x += nums[i];
        arr.push(x);
    }
    return arr;
};