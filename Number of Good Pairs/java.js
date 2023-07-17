let nums = [1, 2, 3, 1, 1, 3];

let numIdenticalPairs = function (nums) {
    let count = 0;
    let a = nums.length;

    for (let i = 0; i < a; i++) {
        for (let j = i + 1; j < a; j++) {
            if (nums[i] == nums[j]) {
                count++;
            }
        }
    }
    return count;
}

console.log(numIdenticalPairs(nums));
