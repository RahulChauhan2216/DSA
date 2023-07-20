let nums = [1,15,6,3];

let differenceOfSum = function (nums) {

    let x = nums.toString().split(",");
    let y = 0;
    for (let i = 0; i < x.length; i++) {
        for (let j = 0; j < x[i].length; j++) {
            y += parseInt(x[i][j]);
        }
    }

    let z = 0;
    for (let i = 0; i < nums.length; i++) {
        z += nums[i];
    }
    return z - y;
};

console.log(differenceOfSum(nums));







