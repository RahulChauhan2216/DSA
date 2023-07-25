let nums = [1, 2, 2, 1], k = 1;

let countKDifference = function (nums, k) {
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let x = nums[i] - nums[j];
            if (Math.abs(x) == k) {
                count++
            }
        }
    }
    return count;
}

console.log(countKDifference(nums, k));